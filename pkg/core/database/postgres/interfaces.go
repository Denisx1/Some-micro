package pkg_core_database_postgres

import (
	"context"
	"time"
)

type CommandTag interface {
	RowsAffected() int64
}

type Row interface {
	Scan(dest ...any) error
}

type Rows interface {
	Close()
	Err() error
	Next() bool
	Scan(dest ...any) error
}

// Executor — интерфейс выполнения базовых запросов (для Pool и Tx)
type Executor interface {
	Exec(ctx context.Context, sql string, arguments ...any) (CommandTag, error)
	Query(ctx context.Context, sql string, args ...any) (Rows, error)
	QueryRow(ctx context.Context, sql string, args ...any) Row
}

// Tx — интерфейс транзакции
type Tx interface {
	Executor
	Commit(ctx context.Context) error
	Rollback(ctx context.Context) error
}

// Pool — полный интерфейс пула соединений
type Pool interface {
	Executor
	Close()
	OpTimeout() time.Duration
	Begin(ctx context.Context) (Tx, error)
	WithTx(ctx context.Context, fn func(tx Tx) error) error
}
