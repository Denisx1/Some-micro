package customer_postgres_repository

import (
	"context"
	core_domain "customer/internal/core/domain"
	"fmt"
)

func (r *CustomerRepository) CreateCustomer(
	ctx context.Context,
	customer core_domain.Customer,
) (core_domain.Customer, error) {
	ctx, cancel := context.WithTimeout(ctx, r.db.OpTimeout())
	defer cancel()
	query := `
	INSERT INTO customer.profile (user_id, first_name, last_name)
	VALUES ($1, $2, $3)
	RETURNING id, version, user_id, first_name, last_name;
	`
	row := r.db.QueryRow(
		ctx,
		query,
		customer.UserId,
		customer.FirstName,
		customer.LastName,
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
		return core_domain.Customer{}, fmt.Errorf("scan error: %w", err)
	}
	customerDomain := core_domain.NewCustomer(
		customerModel.ID,
		customer.Version,
		customerModel.UserId,
		customerModel.FirstName,
		customerModel.LastName,
	)
	return customerDomain, nil

}
