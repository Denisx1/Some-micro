package user_repository

import core_repository "pkg/core/repository"

type UserRepository struct {
	pool core_repository.Pool
}

func NewUserRepository(pool core_repository.Pool) *UserRepository {
	return &UserRepository{
		pool: pool,
	}
}
