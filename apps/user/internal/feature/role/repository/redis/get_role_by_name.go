package role_redis

import (
	"context"
	"fmt"
)

func (r *RoleRedisRepository) GetRoleByName(
	ctx context.Context,
	roleName string,
) (string, error) {
	key := fmt.Sprintf("role:%s", roleName)
	role, err := r.cache.Get(ctx, key).Result()
	if err != nil {
		return "", fmt.Errorf("Key not founf")
	}
	return role, nil
}
