package role_repository

import (
	"context"
	"fmt"
	core_repository "pkg/core/repository"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (r *RoleRepository) GetRoleByName(
	ctx context.Context,
	roleName string,
) (*core_domain.Role, error) {
	exec := core_repository.GetExecutor(ctx, r.pool)
	query := `
		SELECT id, name, description, permissions
		FROM "user".role
		WHERE name = $1;
	`
	row := exec.QueryRow(ctx, query, roleName)
	var roleModel RoleModel
	err := row.Scan(
		&roleModel.ID,
		&roleModel.Name,
		&roleModel.Description,
		&roleModel.Permissions,
	)
	if err != nil {
		return &core_domain.Role{}, fmt.Errorf("scan error: %w", err)
	}
	roleDomain := core_domain.NewRole(
		roleModel.ID,
		roleModel.Name,
		roleModel.Description,
		roleModel.Permissions,
	)
	return roleDomain, nil

}
