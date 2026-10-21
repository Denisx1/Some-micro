package core_repository

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
	Exec(ctx context.Context, sql string, args ...any) (CommandTag, error)
	Query(ctx context.Context, sql string, args ...any) (Rows, error)
	QueryRow(ctx context.Context, sql string, args ...any) Row
}

// Tx описывает управление транзакцией.
type Tx interface {
	Executor
	Commit(ctx context.Context) error
	Rollback(ctx context.Context) error
}

// Transactor — контракт для компонентов бизнес-логики (Use Cases / Services),
// которым нужно объединять несколько вызовов репозиториев в транзакцию.
type Transactor interface {
	WithTx(ctx context.Context, fn func(ctx context.Context) error) error
}

// Pool — полный интерфейс пула соединений
type Pool interface {
	Executor
	Transactor
	Close()
	OpTimeout() time.Duration
}
