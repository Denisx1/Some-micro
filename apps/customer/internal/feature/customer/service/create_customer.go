package customer_service

import (
	"context"
	core_domain "customer/internal/core/domain"
	"fmt"
)

func (r *CustomerService) CreateCustomer(
	ctx context.Context,
	customer core_domain.Customer,
) (core_domain.Customer, error) {
	newCustomer, err := r.customerRepository.CreateCustomer(ctx, customer)
	if err != nil {
		return core_domain.Customer{}, fmt.Errorf("create customer: %w", err)
	}

	return newCustomer, nil

}
