package user_outbox_repository

import core_repository "pkg/core/repository"

type UserOutboxRepository struct {
	pool core_repository.Pool
}

func NewUserOutboxRepository(pool core_repository.Pool) *UserOutboxRepository {
	return &UserOutboxRepository{
		pool: pool,
	}
}
