package customer_service

import (
	"context"
	core_domain "customer/internal/core/domain"
)

type CustomerService struct {
	customerRepository CustomerRepository
}
type CustomerRepository interface {
	CreateCustomer(
		ctx context.Context,
		customer core_domain.Customer,
	) (core_domain.Customer, error)
	GetCustomer(
		ctx context.Context,
		selector core_domain.FindSelector,
	) (core_domain.Customer, error)
}

func NewCustomerService(customerRepository CustomerRepository) *CustomerService {
	return &CustomerService{
		customerRepository: customerRepository,
	}
}
