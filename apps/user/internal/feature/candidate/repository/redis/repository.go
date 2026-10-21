package candidate_redis

import (
	core_redis "pkg/redis"
)

const sessionKey = "registation:session"

type CandidateRedisRepository struct {
	cache      core_redis.Cache
	sessionKey string
}

func NewCandidateRedisRepository(
	cache core_redis.Cache) *CandidateRedisRepository {
	return &CandidateRedisRepository{
		cache:      cache,
		sessionKey: sessionKey,
	}
}
