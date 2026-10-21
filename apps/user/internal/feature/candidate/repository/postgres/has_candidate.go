package candidate_repository

import (
	"context"
	"fmt"
	core_errors "pkg/core/errors"
	core_repository "pkg/core/repository"
)

func (r *CandidateRepository) HasCandidate(
	ctx context.Context,
	userName string,
) error {
	exec := core_repository.GetExecutor(ctx, r.pool)
	query := `
		SELECT EXISTS(
			SELECT 1 
			FROM "user".candidate 
			WHERE user_name = $1
		);
	`

	row := exec.QueryRow(ctx, query, userName)
	var exists bool
	err := row.Scan(&exists)
	if err != nil {
		return fmt.Errorf("check candidate existence failed (userName=%s): %w", userName, err)
	}
	if exists {
		return fmt.Errorf("candidate with username '%s' already exists: %w", userName, core_errors.ErrConflict)
	}

	return nil

}
