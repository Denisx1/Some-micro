package customer_postgres_repository

import (
	// Импортируем типы из pkg/core
	postgres "pkg/core/database/postgres"
)

type CustomerRepository struct {
	db postgres.Executor
}

func NewCustomerRepository(db postgres.Executor) *CustomerRepository {
	return &CustomerRepository{db: db}
}

// WithTx создает локальную копию репозитория под контекст транзакции
func (r *CustomerRepository) WithTx(tx postgres.Tx) *CustomerRepository {
	return &CustomerRepository{db: tx}
}
