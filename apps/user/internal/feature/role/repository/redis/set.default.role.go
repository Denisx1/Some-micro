package role_redis

import (
	"context"
	"fmt"
)

func (r *RoleRedisRepository) SetRole(
	ctx context.Context,
	id, name string,
) error {
	key := fmt.Sprintf("role:%s", name)

	// Вызываем .Err() на нашей обертке statusCMD!
	if err := r.cache.Set(ctx, key, id, 0).Err(); err != nil {
		return fmt.Errorf("set role cache key %s failed: %w", key, err)
	}

	return nil
}
