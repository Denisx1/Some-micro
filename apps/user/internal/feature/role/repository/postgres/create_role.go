package role_repository

import (
	"context"
	"fmt"
	core_repository "pkg/core/repository"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (r *RoleRepository) CreateRole(
	ctx context.Context,
	role *core_domain.Role,
) (*core_domain.Role, error) {
	exec := core_repository.GetExecutor(ctx, r.pool)
	query := `
		INSERT INTO "user".role (name, description, permissions)
		VALUES ($1, $2, $3)
		ON CONFLICT (name) DO NOTHING
		RETURNING id, name, description, permissions;
		`

	var roleModel RoleModel
	err := exec.QueryRow(
		ctx,
		query,
		role.Name,
		role.Description,
		role.Permission,
	).Scan(
		&roleModel.ID,
		&roleModel.Name,
		&roleModel.Description,
		&roleModel.Permissions,
	)
	if err != nil {
		return &core_domain.Role{}, fmt.Errorf("seed default roles: %w", err)
	}
	roleDomain := core_domain.NewRole(
		roleModel.ID,
		roleModel.Name,
		roleModel.Description,
		roleModel.Permissions,
	)
	return roleDomain, nil
}
