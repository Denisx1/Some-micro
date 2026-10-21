package user_outbox_repository

import (
	"context"
	core_repository "pkg/core/repository"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func (r *UserOutboxRepository) CreateEvent(
	ctx context.Context,
	event core_domain.OutboxEvent,
) error {
	exec := core_repository.GetExecutor(ctx, r.pool)

	query := `
		INSERT INTO "user".outbox (aggregate_type, aggregate_id, payload, trace_id)
		VALUES ($1, $2, $3, $4)
	`
	_, err := exec.Exec(
		ctx,
		query,
		event.AggregateType,
		event.AggregateID,
		event.Payload,
		event.TraceID,
	)
	return err
}
