package candidate_redis

import (
	"context"
	"errors"
	"fmt"
	core_redis "pkg/redis"
)

func (c *CandidateRedisRepository) HasSession(
	ctx context.Context,
	userName string,
) (bool, error) {
	key := fmt.Sprintf("%s:%s", c.sessionKey, userName)

	err := c.cache.Get(ctx, key).Err()
	if errors.Is(err, core_redis.ErrNotFound) {
		return false, nil // Сессии НЕТ
	}
	if err != nil {
		return false, err // Ошибка подключения к Redis
	}

	return true, nil // Сессия ЕСТЬ
}
