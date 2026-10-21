package role_service

import (
	"context"
	"fmt"
	core_logger "pkg/core/logger"

	user_config "github.com/Denisx1/Some-micro/apps/user/internal/core/config"
	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (s *RoleService) InitDefaultRoles(
	ctx context.Context,
	logger core_logger.Logger,
) error {
	cfg := user_config.NewRoleConfigMust()
	roles := s.getInitialRole(cfg)

	for _, role := range roles {
		// 1. Проверяем в Redis
		roleID, err := s.roleCacheRepository.GetRoleByName(ctx, role.Name)
		if err == nil && roleID != "" {
			// В Redis есть — пропускаем
			logger.Debug("role found in redis, skipping", "role", role.Name)
			continue
		}

		// 2. В Redis нет — проверяем в PostgreSQL
		dbRole, err := s.roleRepository.GetRoleByName(ctx, role.Name)
		if err == nil && dbRole != nil {
			// В БД есть, а в Redis не было — прогреваем Redis
			if err := s.roleCacheRepository.SetRole(ctx, dbRole.ID, dbRole.Name); err != nil {
				logger.Warn("failed to warm up redis cache", "role", dbRole.Name, "err", err)
			}
			continue
		}

		// 3. В БД тоже нет — создаем в PostgreSQL и пишем в Redis
		var createdRole *core_domain.Role
		createdRole, err = s.roleRepository.CreateRole(ctx, role)
		if err != nil {
			return fmt.Errorf("create role %s: %w", role.Name, err)
		}
		// Записываем только что созданную роль в Redis
		if err := s.roleCacheRepository.SetRole(ctx, createdRole.ID, createdRole.Name); err != nil {
			logger.Warn("failed to cache newly created role in redis", "role", createdRole.Name, "err", err)
		}
	}
	return nil
}

func (s *RoleService) getInitialRole(cfg user_config.RoleConfig) []*core_domain.Role {
	admin := core_domain.NewRoleUninitialized(cfg.Admin, cfg.AdminDescription, cfg.AdminPermission)
	cleaner := core_domain.NewRoleUninitialized(cfg.Cleaner, cfg.CleanerDescription, cfg.CleanerPermission)
	customer := core_domain.NewRoleUninitialized(cfg.Customer, cfg.CustomerDescription, cfg.CustomerPermission)

	return []*core_domain.Role{
		admin,
		cleaner,
		customer,
	}

}
