package role_redis

import (
	core_redis "pkg/redis"
)

type RoleRedisRepository struct {
	cache core_redis.Cache
}

func NewRoleRedisRepository(cache core_redis.Cache) *RoleRedisRepository {
	return &RoleRedisRepository{
		cache: cache,
	}
}
