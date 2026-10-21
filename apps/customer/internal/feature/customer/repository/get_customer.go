package customer_postgres_repository

import (
	"context"
	core_domain "customer/internal/core/domain"
	"errors"
	"fmt"
	core_errors "pkg/core/errors"
	core_pgx_pool "pkg/postgres/pgx"
)

func (r *CustomerRepository) GetCustomer(
	ctx context.Context,
	selector core_domain.FindSelector,
) (core_domain.Customer, error) {
	ctx, cancel := context.WithTimeout(ctx, r.db.OpTimeout())
	defer cancel()

	query := `
		SELECT id, version, user_id, first_name, last_name
		FROM customer.profile
		WHERE ($1::uuid IS NOT NULL AND id = $1)
		   OR ($2::uuid IS NOT NULL AND user_id = $2)
		LIMIT 1
	`
	row := r.db.QueryRow(
		ctx,
		query,
		selector.ID,
		selector.UserID,
	)
	var customerModel CustomerModel

	err := row.Scan(
		&customerModel.ID,
		&customerModel.Version,
		&customerModel.UserId,
		&customerModel.FirstName,
		&customerModel.LastName,
	)

	if err != nil {
		if errors.Is(err, core_pgx_pool.ErrNoRows) {
			return core_domain.Customer{}, fmt.Errorf(
				"user with id '%v': %w",
				selector.ID,
				core_errors.ErrNotFound,
			)
		}
		return core_domain.Customer{}, fmt.Errorf("scan error:%w", err)
	}
	customerDomain := core_domain.NewCustomer(
		customerModel.ID,
		customerModel.Version,
		customerModel.UserId,
		customerModel.FirstName,
		customerModel.LastName,
	)
	return customerDomain, nil
}
