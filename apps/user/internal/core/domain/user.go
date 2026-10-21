package core_domain

import "time"

type User struct {
	ID              string
	Version         int32
	Email           string
	UserName        string
	Password        string
	IsEmailVerified bool
	IsActive        bool
	TokenVersion    int32
	PhoneNumber     *string
	CreatedAt       time.Time
	UpdatedAt       *time.Time
	RoleId          string
	TraceId         string
}

func NewUser(
	id string,
	version int32,
	email string,
	userName string,
	password string,
	isEmailVerified bool,
	isActive bool,
	tokenVersion int32,
	phoneNumber *string,
	creatredAt time.Time,
	updatedAt *time.Time,
	roleId string,
	traceId string,
) User {
	return User{
		ID:              id,
		Version:         version,
		Email:           email,
		UserName:        userName,
		Password:        password,
		IsEmailVerified: isEmailVerified,
		IsActive:        isActive,
		TokenVersion:    tokenVersion,
		PhoneNumber:     phoneNumber,
		CreatedAt:       creatredAt,
		UpdatedAt:       updatedAt,
		RoleId:          roleId,
		TraceId:         traceId,
	}
}

func NewUserUninitialized(
	email string,
	userName string,
	password string,
	roleId string,
	traceId string,
	phoneNumber *string,
) User {
	return NewUser(
		UninitializedID,
		int32(UninitializedVersion),
		email,
		userName,
		password,
		true,
		false,
		0,
		phoneNumber,
		time.Now(),
		nil,
		roleId,
		traceId,
	)
}
