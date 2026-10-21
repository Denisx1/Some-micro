package candidate_repository

import (
	"context"
	"fmt"
	core_repository "pkg/core/repository"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (r *CandidateRepository) CreateCandidate(
	ctx context.Context,
	candidate *core_domain.Candidate,
) (*core_domain.Candidate, error) {
	exec := core_repository.GetExecutor(ctx, r.pool)
	query := `
		WITH inserted AS (
        	INSERT INTO "user".candidate (
           		email,
            	user_name,
            	password,
            	role_id,
            	trace_id
        	)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, version, role_id
    )
    	SELECT 
        	i.id, 
			i.version,
        	r.name AS role
    	FROM inserted i
    	JOIN "user".role r ON r.id = i.role_id;
	`
	var model CandidateModel
	err := exec.QueryRow(
		ctx,
		query,
		candidate.Email,
		candidate.UserName,
		candidate.Password,
		candidate.Role.ID,
		candidate.TraceId,
	).Scan(
		&model.ID,
		&model.Version,
		&model.RoleName,
	)

	if err != nil {
		return &core_domain.Candidate{}, fmt.Errorf("scan error: %w", err)
	}
	model.Email = candidate.Email
	model.UserName = candidate.UserName
	model.ActionToken = candidate.ActionToken
	model.RoleID = candidate.Role.ID
	model.TraceID = candidate.TraceId

	return model.ToDomain(), nil

	// candidateDomain := core_domain.NewCandidate(
	// 	model.ID,
	// 	model.Version,
	// 	candidate.Email,
	// 	candidate.UserName,
	// 	candidate.Password,
	// 	candidate.ActionToken,
	// 	candidate.Role.ID,
	// 	candidate.Role.Name,
	// 	candidate.TraceId,
	// 	model.CreatedAt,
	// 	model.UpdatedAt,
	// )

	// return candidateDomain, nil
}
