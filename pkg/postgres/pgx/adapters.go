package core_pgx_pool

import (
	"context"
	"errors"

	core_repository "pkg/core/repository"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
)

// --- Адаптер CommandTag ---
type pgxCommandTag struct {
	tag pgconn.CommandTag
}

func (t pgxCommandTag) RowsAffected() int64 {
	return t.tag.RowsAffected()
}

// --- Адаптер Row ---
type pgxRow struct {
	row    pgx.Row
	cancel context.CancelFunc
}

func (r pgxRow) Scan(dest ...any) error {
	if r.cancel != nil {
		defer r.cancel()
	}
	if err := r.row.Scan(dest...); err != nil {
		return mapErrors(err)
	}
	return nil
}

// --- Адаптер Rows ---
type pgxRows struct {
	rows   pgx.Rows
	cancel context.CancelFunc
}

func (r pgxRows) Next() bool {
	return r.rows.Next()
}

func (r pgxRows) Scan(dest ...any) error {
	if err := r.rows.Scan(dest...); err != nil {
		return mapErrors(err)
	}
	return nil
}

func (r pgxRows) Err() error {
	if err := r.rows.Err(); err != nil {
		return mapErrors(err)
	}
	return nil
}

func (r pgxRows) Close() {
	r.rows.Close()
	if r.cancel != nil {
		r.cancel()
	}
}

// --- Адаптер Транзакции ---
type pgxTxAdapter struct {
	tx pgx.Tx
}

func (t *pgxTxAdapter) Exec(ctx context.Context, sql string, args ...any) (core_repository.CommandTag, error) {
	tag, err := t.tx.Exec(ctx, sql, args...)
	if err != nil {
		return nil, mapErrors(err)
	}
	return pgxCommandTag{tag: tag}, nil
}

func (t *pgxTxAdapter) Query(ctx context.Context, sql string, args ...any) (core_repository.Rows, error) {
	rows, err := t.tx.Query(ctx, sql, args...)
	if err != nil {
		return nil, mapErrors(err)
	}
	return pgxRows{rows: rows}, nil
}

func (t *pgxTxAdapter) QueryRow(ctx context.Context, sql string, args ...any) core_repository.Row {
	row := t.tx.QueryRow(ctx, sql, args...)
	return pgxRow{row: row}
}

func (t *pgxTxAdapter) Commit(ctx context.Context) error {
	if err := t.tx.Commit(ctx); err != nil {
		return mapErrors(err)
	}
	return nil
}

func (t *pgxTxAdapter) Rollback(ctx context.Context) error {
	if err := t.tx.Rollback(ctx); err != nil && !errors.Is(err, pgx.ErrTxClosed) {
		return mapErrors(err)
	}
	return nil
}
