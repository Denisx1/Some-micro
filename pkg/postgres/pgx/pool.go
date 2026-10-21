package core_pgx_pool

import (
	"context"
	"fmt"
	core_repository "pkg/core/repository"
	"time"

	"github.com/bytedance/sonic"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
)

type pgxPool struct {
	pool      *pgxpool.Pool
	opTimeout time.Duration
}

func NewPool(
	ctx context.Context,
	config PostgresConfig,
) (core_repository.Pool, error) {
	connString := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=%s",
		config.User,
		config.Password,
		config.Host,
		config.Port,
		config.Database,
		config.SSLMODE,
	)
	pgxconfig, err := pgxpool.ParseConfig(connString)
	if err != nil {
		return nil, fmt.Errorf("parse Postgres connection string: %w", err)
	}

	connectCtx, cancel := context.WithTimeout(ctx, config.Timeout)
	defer cancel()

	pgxconfig.AfterConnect = func(ctx context.Context, conn *pgx.Conn) error {
		sonicCodec := &pgtype.JSONCodec{
			Marshal:   sonic.Marshal,
			Unmarshal: sonic.Unmarshal,
		}

		// 2. Регистрируем переопределенный pgtype.Type для JSON и JSONB
		conn.TypeMap().RegisterType(&pgtype.Type{
			Name:  "json",
			OID:   pgtype.JSONOID,
			Codec: sonicCodec,
		})

		conn.TypeMap().RegisterType(&pgtype.Type{
			Name:  "jsonb",
			OID:   pgtype.JSONBOID,
			Codec: sonicCodec,
		})

		return nil
	}

	pool, err := pgxpool.NewWithConfig(connectCtx, pgxconfig)
	if err != nil {
		return nil, fmt.Errorf("create Postgres connection pool: %w", err)
	}

	if err := pool.Ping(connectCtx); err != nil {
		pool.Close()
		return nil, fmt.Errorf("ping Postgres connection pool: %w", err)
	}

	return &pgxPool{
		pool:      pool,
		opTimeout: config.Timeout,
	}, nil
}

func (p *pgxPool) OpTimeout() time.Duration {
	return p.opTimeout
}

func (p *pgxPool) withTimeout(
	ctx context.Context,
) (context.Context, context.CancelFunc) {
	if p.opTimeout <= 0 {
		return ctx, func() {}
	}
	if deadline, ok := ctx.Deadline(); ok {
		if time.Until(deadline) < p.OpTimeout() {
			return ctx, func() {}
		}
	}
	return context.WithTimeout(ctx, p.OpTimeout())
}

func (p *pgxPool) Exec(
	ctx context.Context,
	sql string,
	args ...any,
) (core_repository.CommandTag, error) {
	reqCtx, cancel := p.withTimeout(ctx)
	defer cancel()
	tag, err := p.pool.Exec(reqCtx, sql, args...)
	if err != nil {
		return nil, err
	}
	return pgxCommandTag{tag: tag}, nil
}

func (p *pgxPool) Query(
	ctx context.Context,
	sql string,
	args ...any,
) (core_repository.Rows, error) {
	reqCtx, cancel := p.withTimeout(ctx)
	rows, err := p.pool.Query(reqCtx, sql, args...)
	if err != nil {
		cancel() // Если запрос свалился сразу — чистим контекст
		return nil, err
	}
	return pgxRows{rows: rows, cancel: cancel}, nil
}

func (p *pgxPool) QueryRow(
	ctx context.Context,
	sql string,
	args ...any,
) core_repository.Row {
	reqCtx, cancel := p.withTimeout(ctx)
	row := p.pool.QueryRow(reqCtx, sql, args...)
	return pgxRow{row: row, cancel: cancel}
}

func (p *pgxPool) Begin(
	ctx context.Context,
) (core_repository.Tx, error) {
	reqCtx, cancel := p.withTimeout(ctx)
	defer cancel()
	tx, err := p.pool.Begin(reqCtx)
	if err != nil {
		return nil, err
	}
	return &pgxTxAdapter{tx: tx}, nil
}

func (p *pgxPool) WithTx(
	ctx context.Context,
	fn func(ctx context.Context) error,
) (err error) {
	txCtx, cancel := p.withTimeout(ctx)
	defer cancel()
	tx, err := p.Begin(txCtx)
	if err != nil {
		return err
	}

	// Помещаем созданную транзакцию в контекст
	ctxWithTx := context.WithValue(
		txCtx,
		core_repository.TxKey{},
		tx,
	)
	defer func() {
		if pErr := recover(); pErr != nil {
			_ = tx.Rollback(ctxWithTx)
			panic(pErr) // перевыбрасываем панику после успешного отката
		} else if err != nil {
			_ = tx.Rollback(ctxWithTx)
		} else {
			err = tx.Commit(ctxWithTx)
		}
	}()

	err = fn(ctxWithTx)
	return err
}

func (p *pgxPool) Close() {
	p.pool.Close()
}
