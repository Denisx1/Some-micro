package candidate_repository

import core_repository "pkg/core/repository"

type CandidateRepository struct {
	pool core_repository.Pool
}

func NewCandidateRepository(pool core_repository.Pool) *CandidateRepository {
	return &CandidateRepository{
		pool: pool,
	}
}
