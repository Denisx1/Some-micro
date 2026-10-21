package candidate_service

import (
	"context"
	"fmt"
	core_errors "pkg/core/errors"
	core_logger "pkg/core/logger"
	"time"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (s *CandidateService) CreateCandidate(
	ctx context.Context,
	candidate *core_domain.Candidate,
	logger core_logger.Logger,
) (string, error) {

	if err := s.validateCandidate(ctx, candidate, logger); err != nil {
		return "", err
	}

	if err := s.hashCandidatePassword(ctx, candidate); err != nil {
		return "", err
	}

	createdCandidate, err := s.createCandidateWithOutbox(
		ctx,
		candidate,
	)
	if err != nil {
		return "", err
	}

	s.warmupCandidateSessionCache(
		ctx,
		createdCandidate,
		logger,
	)

	return createdCandidate.ID, nil
}

func (s *CandidateService) validateCandidate(
	ctx context.Context,
	candidate *core_domain.Candidate,
	logger core_logger.Logger,
) error {

	if err := s.checkRegistrationSession(ctx, candidate.UserName); err != nil {
		return err
	}

	if err := s.checkCandidateExists(ctx, candidate.UserName); err != nil {
		return err
	}

	if err := s.resolveCandidateRole(ctx, candidate, logger); err != nil {
		return err
	}

	return nil
}
func (s *CandidateService) warmupRoleCache(
	ctx context.Context,
	role *core_domain.Role,
	logger core_logger.Logger,
) {

	go func(roleID, roleName string) {

		asyncCtx, cancel := context.WithTimeout(
			context.WithoutCancel(ctx),
			3*time.Second,
		)
		defer cancel()

		defer func() {
			if r := recover(); r != nil {
				logger.Error(
					"panic recovered in role cache warmup",
					"panic", r,
				)
			}
		}()

		if err := s.roleCacheRepository.SetRole(
			asyncCtx,
			roleID,
			roleName,
		); err != nil {
			logger.Error(
				"failed to warm role cache",
				"error", err,
			)
		}

	}(role.ID, role.Name)
}

func (s *CandidateService) resolveCandidateRole(
	ctx context.Context,
	candidate *core_domain.Candidate,
	logger core_logger.Logger,
) error {

	roleID, err := s.roleCacheRepository.GetRoleByName(
		ctx,
		candidate.Role.Name,
	)

	if err == nil && roleID != "" {
		candidate.Role.ID = roleID
		return nil
	}

	role, err := s.roleRepository.GetRoleByName(
		ctx,
		candidate.Role.Name,
	)
	if err != nil {
		return fmt.Errorf(
			"get role %s: %w",
			candidate.Role.Name,
			err,
		)
	}

	candidate.Role.ID = role.ID

	s.warmupRoleCache(ctx, role, logger)

	return nil
}

func (s *CandidateService) checkCandidateExists(
	ctx context.Context,
	userName string,
) error {

	if err := s.candidateRepository.HasCandidate(ctx, userName); err != nil {
		return fmt.Errorf(
			"check candidate: %w",
			err,
		)
	}

	return nil
}

func (s *CandidateService) checkRegistrationSession(
	ctx context.Context,
	userName string,
) error {

	hasSession, err := s.cacheRepository.HasSession(
		ctx,
		userName,
	)
	if err != nil {
		return fmt.Errorf("check registration session: %w", err)
	}

	if hasSession {
		return fmt.Errorf(
			"active registration session already exists for user %s: %w",
			userName,
			core_errors.ErrConflict,
		)
	}

	return nil
}

func (s *CandidateService) warmupCandidateSessionCache(
	ctx context.Context,
	candidate *core_domain.Candidate,
	logger core_logger.Logger,
) {

	session := core_domain.NewCandidateSession(
		candidate.ID,
		candidate.UserName,
		candidate.Email,
		candidate.Role,
		candidate.TraceId,
		nil,
		"AWAITING_CONFIRMATION",
		10,
		"Waiting for email confirmation",
	)

	go func() {
		asyncCtx, cancel := context.WithTimeout(
			context.WithoutCancel(ctx),
			5*time.Second,
		)
		defer cancel()

		defer func() {
			if r := recover(); r != nil {
				logger.Error(
					"panic recovered in candidate session cache warmup",
					"panic", r,
				)
			}
		}()

		if err := s.cacheRepository.SetSession(
			asyncCtx,
			session,
		); err != nil {
			logger.Error(
				"failed to set candidate session cache",
				"error", err,
			)
		}
	}()
}

func (s *CandidateService) createCandidateWithOutbox(
	ctx context.Context,
	candidate *core_domain.Candidate,
) (*core_domain.Candidate, error) {

	var createdCandidate *core_domain.Candidate

	err := s.txManager.WithTx(ctx, func(txCtx context.Context) error {

		newCandidate, err := s.candidateRepository.CreateCandidate(
			txCtx,
			candidate,
		)
		if err != nil {
			return fmt.Errorf("create candidate: %w", err)
		}

		createdCandidate = newCandidate

		outboxEvent := core_domain.NewOutboxUninitialized(
			newCandidate.ID,
			"CandidateCreated",
			newCandidate,
			candidate.TraceId,
		)

		if err := s.outboxRepository.CreateEvent(
			txCtx,
			outboxEvent,
		); err != nil {
			return fmt.Errorf("create outbox event: %w", err)
		}

		return nil
	})

	if err != nil {
		return nil, fmt.Errorf("create candidate transaction: %w", err)
	}

	return createdCandidate, nil
}

func (s *CandidateService) hashCandidatePassword(
	ctx context.Context,
	candidate *core_domain.Candidate,
) error {

	hashedPassword, err := s.hasher.Hash(ctx, candidate.Password)
	if err != nil {
		return fmt.Errorf("hash password: %w", err)
	}

	candidate.Password = string(hashedPassword)

	return nil
}

// func (s *CandidateService) CreateCandidate(
// 	ctx context.Context,
// 	candidate *core_domain.Candidate,
// 	logger core_logger.Logger,
// ) (string, error) {

// 	if err := s.validateCandidate(ctx, candidate, logger); err != nil {
// 		return "", err
// 	}
// 	hashedPassword, hahsedErr := s.hasher.Hash(ctx, candidate.Password)
// 	if hahsedErr != nil {
// 		return "", fmt.Errorf("failed to hahs password: %w", hahsedErr)
// 	}
// 	candidate.Password = string(hashedPassword)
// 	var createdCandidate *core_domain.Candidate
// 	err := s.txManager.WithTx(ctx, func(txCtx context.Context) error {
// 		newCandidate, err := s.candidateRepository.CreateCandidate(txCtx, candidate)
// 		if err != nil {
// 			return fmt.Errorf("create candidate error: %w", err)
// 		}
// 		createdCandidate = newCandidate

// 		outboxEvent := core_domain.NewOutboxUninitialized(
// 			newCandidate.ID,
// 			"CandidateCreated",
// 			newCandidate,
// 			candidate.TraceId,
// 		)
// 		if err := s.outboxRepository.CreateEvent(txCtx, outboxEvent); err != nil {
// 			return fmt.Errorf("create outbox event error: %w", err)
// 		}

// 		return nil
// 	})
// 	if err != nil {
// 		return "", fmt.Errorf("create candidate: %w", err)
// 	}
// 	newRegSession := core_domain.NewCandidateSession(
// 		createdCandidate.ID,
// 		createdCandidate.UserName,
// 		createdCandidate.Email,
// 		createdCandidate.Role,
// 		createdCandidate.TraceId,
// 		nil,
// 		"AWAITING_CONFIRMATION",
// 		10,
// 		"Waiting for email confirmation",
// 	)
// 	go func() {
// 		asyncCtx, cancel := context.WithTimeout(context.WithoutCancel(ctx), 5*time.Second)
// 		defer cancel()

// 		defer func() {
// 			if r := recover(); r != nil {
// 				logger.Error("panic recovered in background goroutine", "panic", r)
// 			}
// 		}()

// 		if err := s.cacheRepository.SetSession(asyncCtx, newRegSession); err != nil {
// 			logger.Error("failed to async set session", "error", err)
// 		}
// 	}()

// 	return createdCandidate.ID, nil
// }

// func (s *CandidateService) validateCandidate(
// 	ctx context.Context,
// 	candidate *core_domain.Candidate,
// 	logger core_logger.Logger,
// ) error {

// 	// 1. Проверка сессии в Redis
// 	hasSession, err := s.cacheRepository.HasSession(ctx, candidate.UserName)
// 	if err != nil {
// 		return fmt.Errorf("failed to check session: %w", err)
// 	}
// 	if hasSession {
// 		return fmt.Errorf("active registration session already exists for user %s: %w", candidate.UserName, core_errors.ErrConflict)
// 	}
// 	if err := s.candidateRepository.HasCandidate(ctx, candidate.UserName); err != nil {
// 		return fmt.Errorf("failed to process candidate registration: %w", err)
// 	}
// 	roleID, redisErr := s.roleCacheRepository.GetRoleByName(ctx, candidate.Role.Name)
// 	if redisErr == nil && roleID != "" {
// 		candidate.Role.ID = roleID
// 	} else {
// 		dbRole, dbErr := s.roleRepository.GetRoleByName(ctx, candidate.Role.Name)
// 		if dbErr != nil {
// 			return fmt.Errorf("role %s not found: %w", candidate.Role.Name, dbErr)
// 		}
// 		candidate.Role.ID = dbRole.ID

// 		go func(rID, rName string) {
// 			asyncCtx, cancel := context.WithTimeout(context.WithoutCancel(ctx), 3*time.Second)
// 			defer cancel()

// 			defer func() {
// 				if r := recover(); r != nil {
// 					logger.Error("panic recovered in role cache warmup", "panic", r)
// 				}
// 			}()

// 			_ = s.roleCacheRepository.SetRole(asyncCtx, rID, rName)
// 		}(dbRole.ID, dbRole.Name)
// 	}

// 	return nil

// }
