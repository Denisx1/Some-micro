package customer_postgres_repository

import core_repository "pkg/core/repository"

type CustomerRepository struct {
	db core_repository.Pool
}

func NewCustomerRepository(db core_repository.Pool) *CustomerRepository {
	return &CustomerRepository{db: db}
}
