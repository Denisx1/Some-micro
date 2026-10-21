package core_hasher

import (
	"context"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type BcryptHasher struct {
	cost int
}

func NewBcryptHasher(cost int) *BcryptHasher {
	if cost <= 0 {
		cost = bcrypt.DefaultCost // Значение по умолчанию (10)
	}
	return &BcryptHasher{cost: cost}
}

func (h *BcryptHasher) Hash(ctx context.Context, password string) (string, error) {
	// Проверяем контекст на таймаут/отмену
	if err := ctx.Err(); err != nil {
		return "", err
	}

	bytes, err := bcrypt.GenerateFromPassword([]byte(password), h.cost)
	if err != nil {
		return "", fmt.Errorf("bcrypt hash failed: %w", err)
	}

	return string(bytes), nil
}

func (h *BcryptHasher) Compare(ctx context.Context, hashedPassword, password string) bool {
	if ctx.Err() != nil {
		return false
	}

	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err == nil
}
