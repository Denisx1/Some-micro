package core_domain

import (
	"errors"

	"github.com/google/uuid"
)

var ErrEmptySelector = errors.New("selector must contain either id or user_id")

type FindSelector struct {
	ID     *uuid.UUID
	UserID *uuid.UUID
}

func (s FindSelector) Validate() error {
	if s.ID == nil && s.UserID == nil {
		return ErrEmptySelector
	}
	return nil
}
