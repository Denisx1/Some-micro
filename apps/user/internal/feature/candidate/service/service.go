package candidate_service

import (
	"context"
	core_repository "pkg/core/repository"
	core_hasher "pkg/hasher"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

type CandidateService struct {
	candidateRepository CandidateRepository
	outboxRepository    OutboxRepository
	roleRepository      RoleRepository
	roleCacheRepository RoleCacheRepository
	cacheRepository     CandidateCacheRepository
	hasher              core_hasher.PasswordHasher
	txManager           core_repository.Transactor
}

type CandidateRepository interface {
	CreateCandidate(
		ctx context.Context,
		candidate *core_domain.Candidate,
	) (*core_domain.Candidate, error)
	HasCandidate(
		ctx context.Context,
		userName string,
	) error
}
type RoleRepository interface {
	GetRoleByName(
		ctx context.Context,
		roleName string,
	) (*core_domain.Role, error)
}
type OutboxRepository interface {
	CreateEvent(
		ctx context.Context,
		event core_domain.OutboxEvent,
	) error
}
type CandidateCacheRepository interface {
	HasSession(
		ctx context.Context,
		userName string,
	) (bool, error)
	SetSession(
		ctx context.Context,
		candidate *core_domain.CandidateCacheType,
	) error
}
type RoleCacheRepository interface {
	GetRoleByName(
		ctx context.Context,
		roleName string,
	) (string, error)
	SetRole(
		ctx context.Context,
		id, name string,
	) error
}

func NewCandidateService(
	candidateRepository CandidateRepository,
	outboxRepository OutboxRepository,
	roleRepository RoleRepository,
	roleCacheRepository RoleCacheRepository,
	cacheRepository CandidateCacheRepository,
	hasher core_hasher.PasswordHasher,
	txManager core_repository.Transactor,
) *CandidateService {
	return &CandidateService{
		candidateRepository: candidateRepository,
		outboxRepository:    outboxRepository,
		roleRepository:      roleRepository,
		roleCacheRepository: roleCacheRepository,
		cacheRepository:     cacheRepository,
		hasher:              hasher,
		txManager:           txManager,
	}
}
