package role_service

import (
	"context"
	core_repository "pkg/core/repository"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

type RoleService struct {
	roleRepository      RoleRepository
	roleCacheRepository RoleCacheRepository
	txManager           core_repository.Transactor
}

type RoleRepository interface {
	CreateRole(
		ctx context.Context,
		role *core_domain.Role,
	) (*core_domain.Role, error)
	GetRoleByName(
		ctx context.Context,
		roleName string,
	) (*core_domain.Role, error)
}
type RoleCacheRepository interface {
	SetRole(
		ctx context.Context,
		id, name string,
	) error
	GetRoleByName(
		ctx context.Context,
		roleName string,
	) (string, error)
	HasRole(
		ctx context.Context,
		roleName string,
	) (bool, error)
}

func NewRoleService(
	roleRepository RoleRepository,
	roleCacheRepository RoleCacheRepository,
	txManager core_repository.Transactor,
) *RoleService {
	return &RoleService{
		roleRepository:      roleRepository,
		roleCacheRepository: roleCacheRepository,
		txManager:           txManager,
	}
}
