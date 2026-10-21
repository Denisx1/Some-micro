package transport

import (
	"context"
	core_logger "pkg/core/logger"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

type CandidateService interface {
	CreateCandidate(
		ctx context.Context,
		candidate *core_domain.Candidate,
		logger core_logger.Logger,
	) (string, error)
}
