package role_repository

import "time"

type RoleModel struct {
	ID          string
	Name        string
	Description string
	Permissions string
	CreatedAt   time.Time
	UpdatedAt   time.Time
}
