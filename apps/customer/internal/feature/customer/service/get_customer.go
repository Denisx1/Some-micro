package customer_service

import (
	"context"
	core_domain "customer/internal/core/domain"
	"fmt"
)

func (s *CustomerService) GetCustomer(
	ctx context.Context,
	selector core_domain.FindSelector,
) (core_domain.Customer, error) {
	customer, err := s.customerRepository.GetCustomer(ctx, selector)
	if err != nil {
		return core_domain.Customer{}, fmt.Errorf("get customer from repository: %w", err)
	}
	return customer, nil
}
