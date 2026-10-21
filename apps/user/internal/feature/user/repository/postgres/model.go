package user_repository

import "time"

type UserProfile struct {
	ID              string
	Version         string
	Email           string
	UserName        string
	Password        string
	IsEmailVerified bool
	IsActive        bool
	CreatedAt       time.Time
	UpdatedAt       *time.Time
	TokenVersion    int32
	PhoneNumber     *string
	RoleId          string
	TraceId         string
}
