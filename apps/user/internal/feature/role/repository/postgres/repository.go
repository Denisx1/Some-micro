package role_repository

import core_repository "pkg/core/repository"

type RoleRepository struct {
	pool core_repository.Pool
}

func NewRoleRepository(pool core_repository.Pool) *RoleRepository {
	return &RoleRepository{
		pool: pool,
	}
}
