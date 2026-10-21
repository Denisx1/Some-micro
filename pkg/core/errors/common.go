package core_errors

import "errors"

var (
	ErrNotFound        = errors.New("not found")
	ErrInvalidArgument = errors.New("Invalid argument")
	ErrConflict        = errors.New("Conflict")
	ErrUnknown         = errors.New("Unknown error")
	ErrSyntax          = errors.New("Syntax error")
	ErrAlreadyExist    = errors.New("Already exist")
)
