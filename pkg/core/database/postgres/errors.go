package pkg_core_database_postgres

import (
	"errors"
	"fmt"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
)

var (
	ErrNoRows             = errors.New("no rows in result set")
	ErrViolatesForeignKey = errors.New("violates foreign key constraint")
	ErrUnknown            = errors.New("unknown database error")
)

func MapErrors(err error) error {
	if err == nil {
		return nil
	}

	if errors.Is(err, pgx.ErrNoRows) {
		return ErrNoRows
	}

	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		switch pgErr.Code {
		case "23503":
			return fmt.Errorf("%w: %s", ErrViolatesForeignKey, pgErr.Detail)
		}
	}

	return fmt.Errorf("%w: %v", ErrUnknown, err)
}
