package core_pgx_pool

import (
	"context"
	"errors"
	"fmt"
	core_errors "pkg/core/errors"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
)

var (
	ErrNoRows             = errors.New("no rows")
	ErrViolatesForeignKey = errors.New("violates foreign key")
	ErrUnknown            = errors.New("unknown")
)

func mapErrors(err error) error {
	const (
		pgErrUniqueViolation           = "23505" // Нарушение уникальности
		pgErrForeignKeyViolation       = "23503" // Нарушение внешнего ключа
		pgErrSyntaxError               = "42601" // Синтаксическая ошибка в SQL
		pgErrUndefinedColumn           = "42703" // Несуществующая колонка (undefined_column)
		pgErrInvalidTextRepresentation = "22P02" // Неверный тип/формат данных
	)

	if err == nil {
		return nil
	}

	// 1. Запись не найдена
	if errors.Is(err, pgx.ErrNoRows) {
		return core_errors.ErrNotFound
	}

	// 2. Отмена контекста / таймаут запроса
	if errors.Is(err, context.DeadlineExceeded) || errors.Is(err, context.Canceled) {
		return err
	}

	// 3. Ошибки PostgreSQL
	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		switch pgErr.Code {
		case pgErrUniqueViolation:
			return fmt.Errorf("%v: %w", err, core_errors.ErrConflict)

		case pgErrForeignKeyViolation, pgErrInvalidTextRepresentation:
			return fmt.Errorf("%v: %w", err, core_errors.ErrInvalidArgument)

		case pgErrSyntaxError, pgErrUndefinedColumn:
			// Ошибки самого запроса (неверный синтаксис или обращение к несуществующему полю)
			return fmt.Errorf("%v: %w", err, core_errors.ErrSyntax)
		}
	}

	// 4. Все прочие неперехваченные ошибки
	return fmt.Errorf("%w: %v", core_errors.ErrUnknown, err)
}
