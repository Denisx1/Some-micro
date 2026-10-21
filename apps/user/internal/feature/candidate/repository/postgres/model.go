package candidate_repository

import (
	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

type CandidateModel struct {
	ID          string  `db:"id"`
	Version     int32   `db:"version"`
	Email       string  `db:"email"`
	UserName    string  `db:"user_name"`
	Password    string  `db:"password"`
	ActionToken *string `db:"action_token"`

	// Плоские поля роли вместо импорта core_domain.Role
	RoleID   string `db:"role_id"`
	RoleName string `db:"role_name"`

	TraceID string `db:"trace_id"`
}

// ToDomain переводит модель репозитория в чистую доменную сущность
func (m CandidateModel) ToDomain() *core_domain.Candidate {
	return core_domain.NewCandidate(
		m.ID,
		m.Version,
		m.Email,
		m.UserName,
		m.Password,
		m.ActionToken,
		m.RoleID,
		m.RoleName,
		m.TraceID,
	)
}
