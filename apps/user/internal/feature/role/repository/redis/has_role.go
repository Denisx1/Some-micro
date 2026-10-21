package role_redis

import (
	"context"
	"errors"
	"fmt"
	core_redis "pkg/redis"
)

func (r *RoleRedisRepository) HasRole(
	ctx context.Context,
	roleName string,
) (bool, error) {
	key := fmt.Sprintf("role:%s", roleName)
	err := r.cache.Get(ctx, key).Err()
	if errors.Is(err, core_redis.ErrNotFound) {
		return false, nil // Ключа нет в кэше
	}
	if err != nil {
		return false, fmt.Errorf("failed to check session existence: %w", err)
	}
	return true, nil // Ключ существует
}
