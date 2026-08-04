package pkg_core_database_postgres

import (
	"context"
	"errors"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
)

// Адаптер CommandTag
type pgxCommandTag struct {
	tag pgconn.CommandTag
}

func (t pgxCommandTag) RowsAffected() int64 {
	return t.tag.RowsAffected()
}

// Адаптер Row
type pgxRow struct {
	row pgx.Row
}

func (r pgxRow) Scan(dest ...any) error {
	if err := r.row.Scan(dest...); err != nil {
		return MapErrors(err)
	}
	return nil
}

// Адаптер Rows
type pgxRows struct {
	rows pgx.Rows
}

func (r pgxRows) Next() bool {
	return r.rows.Next()
}

func (r pgxRows) Scan(dest ...any) error {
	if err := r.rows.Scan(dest...); err != nil {
		return MapErrors(err)
	}
	return nil
}

func (r pgxRows) Err() error {
	if err := r.rows.Err(); err != nil {
		return MapErrors(err)
	}
	return nil
}

func (r pgxRows) Close() {
	r.rows.Close()
}

// Адаптер Транзакции
type pgxTxAdapter struct {
	tx pgx.Tx
}

func (t *pgxTxAdapter) Exec(ctx context.Context, sql string, args ...any) (CommandTag, error) {
	tag, err := t.tx.Exec(ctx, sql, args...)
	if err != nil {
		return nil, MapErrors(err)
	}
	return pgxCommandTag{tag: tag}, nil
}

func (t *pgxTxAdapter) Query(ctx context.Context, sql string, args ...any) (Rows, error) {
	rows, err := t.tx.Query(ctx, sql, args...)
	if err != nil {
		return nil, MapErrors(err)
	}
	return pgxRows{rows: rows}, nil
}

func (t *pgxTxAdapter) QueryRow(ctx context.Context, sql string, args ...any) Row {
	row := t.tx.QueryRow(ctx, sql, args...)
	return pgxRow{row: row}
}

func (t *pgxTxAdapter) Commit(ctx context.Context) error {
	if err := t.tx.Commit(ctx); err != nil {
		return MapErrors(err)
	}
	return nil
}

func (t *pgxTxAdapter) Rollback(ctx context.Context) error {
	if err := t.tx.Rollback(ctx); err != nil && !errors.Is(err, pgx.ErrTxClosed) {
		return MapErrors(err)
	}
	return nil
}
