package pkg_core_database_postgres

import (
	"context"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type PoolStruct struct {
	*pgxpool.Pool
	opTimeout time.Duration
}

func NewPool(ctx context.Context, config Config) (Pool, error) {
	connString := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=%s pool_max_conns=%d pool_min_conns=%d",
		config.Host,
		config.Port,
		config.User,
		config.Password,
		config.DB,
		config.SSLMode,
		config.MaxConns,
		config.MinConns,
	)

	pgxconfig, err := pgxpool.ParseConfig(connString)
	if err != nil {
		return nil, fmt.Errorf("parse Postgres connection string: %w", err)
	}

	pgxconfig.MaxConnLifetime = config.MaxConnLifetime

	pool, err := pgxpool.NewWithConfig(ctx, pgxconfig)
	if err != nil {
		return nil, fmt.Errorf("create Postgres connection pool: %w", err)
	}

	if err := pool.Ping(ctx); err != nil {
		pool.Close()
		return nil, fmt.Errorf("ping Postgres connection pool: %w", err)
	}

	return &PoolStruct{
		Pool:      pool,
		opTimeout: config.OpTimeout,
	}, nil
}

func (p *PoolStruct) OpTimeout() time.Duration {
	return p.opTimeout
}

func (p *PoolStruct) Exec(ctx context.Context, sql string, args ...any) (CommandTag, error) {
	tag, err := p.Pool.Exec(ctx, sql, args...) // Вызов p.Pool.Exec!
	if err != nil {
		return nil, MapErrors(err)
	}
	return pgxCommandTag{tag: tag}, nil
}

func (p *PoolStruct) Query(ctx context.Context, sql string, args ...any) (Rows, error) {
	rows, err := p.Pool.Query(ctx, sql, args...) // Вызов p.Pool.Query!
	if err != nil {
		return nil, MapErrors(err)
	}
	return pgxRows{rows: rows}, nil
}

func (p *PoolStruct) QueryRow(ctx context.Context, sql string, args ...any) Row {
	row := p.Pool.QueryRow(ctx, sql, args...) // Вызов p.Pool.QueryRow!
	return pgxRow{row: row}
}

func (p *PoolStruct) Begin(ctx context.Context) (Tx, error) {
	tx, err := p.Pool.Begin(ctx) // Вызов p.Pool.Begin!
	if err != nil {
		return nil, MapErrors(err)
	}
	return &pgxTxAdapter{tx: tx}, nil
}

func (p *PoolStruct) WithTx(ctx context.Context, fn func(tx Tx) error) (err error) {
	tx, err := p.Begin(ctx)
	if err != nil {
		return err
	}

	defer func() {
		if pErr := recover(); pErr != nil {
			_ = tx.Rollback(ctx)
			panic(pErr)
		} else if err != nil {
			_ = tx.Rollback(ctx)
		} else {
			err = tx.Commit(ctx)
		}
	}()

	err = fn(tx)
	return err
}

func (p *PoolStruct) Close() {
	p.Pool.Close()
}
