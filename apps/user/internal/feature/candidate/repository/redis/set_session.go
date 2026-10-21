package candidate_redis

import (
	"context"
	"fmt"
	"time"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (c *CandidateRedisRepository) SetSession(
	ctx context.Context,
	candidate *core_domain.CandidateCacheType,
) error {
	key := fmt.Sprintf("%s:%s", c.sessionKey, candidate.Candidate.UserName)

	ttl := 7 * 24 * time.Hour
	err := c.cache.Set(ctx, key, candidate, ttl).Err()
	if err != nil {
		return fmt.Errorf("failed to check session existence: %w", err)
	}

	return nil
}
