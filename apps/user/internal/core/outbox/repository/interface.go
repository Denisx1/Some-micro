package user_outbox_repository

import (
	"context"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

type OutboxRepository interface {
	CreateEvent(
		ctx context.Context,
		event core_domain.OutboxEvent,
	) error
}
