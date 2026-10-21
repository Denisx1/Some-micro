package core_domain

import "time"

type Role struct {
	ID          string
	Name        string
	Description string     `json:"description,omitempty"` // Пропустит, если ""
	Permission  string     `json:"permission,omitempty"`  // Пропустит, если ""
	CreatedAt   time.Time  `json:"created_at,omitempty"`  // Пропустит, если zero time
	UpdatedAt   *time.Time `json:"updated_at,omitempty"`
}

func NewRole(
	id string,
	name string,
	description string,
	permission string,
) *Role {
	return &Role{
		ID:          id,
		Name:        name,
		Description: description,
		Permission:  permission,
	}
}
func NewRoleUninitialized(
	name string,
	description string,
	permission string,
) *Role {
	return NewRole(
		UninitializedID,
		name,
		description,
		permission,
	)
}
