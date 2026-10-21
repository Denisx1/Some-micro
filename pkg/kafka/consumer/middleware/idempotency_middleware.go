package kafka_middleware

import (
	"context"
	"encoding/json"
	"fmt"
	core_logger "pkg/core/logger"
	kafka_connect "pkg/kafka"
)

type IdempotencyStore interface {
	IsProcessed(
		ctx context.Context,
		eventID string,
	) (bool, error)
	MarkProcessed(
		ctx context.Context,
		eventID string,
	) error
}

func NewIdempotencyMiddleware(
	store IdempotencyStore,
	logger core_logger.Logger,
) kafka_connect.Middleware {
	return func(next kafka_connect.Handler) kafka_connect.Handler {
		return func(ctx context.Context, msg kafka_connect.Message) error {
			var header struct {
				ID string `json:"id"`
			}
			if err := json.Unmarshal(msg.Value, &header); err != nil || header.ID == "" {
				// Если это не Envelope или нет ID, передаем дальше
				return next(ctx, msg)
			}
			processed, err := store.IsProcessed(ctx, header.ID)
			if err != nil {
				return fmt.Errorf("idempotency check failed: %w", err)
			}
			if processed {
				logger.Info("Message already processed, skipping", "event_id", header.ID)
				return nil // Возвращаем nil -> Консьюмер закоммитит оффсет
			}
			// 2. Выполняем цепочку (Router -> Domain Handler)
			if err := next(ctx, msg); err != nil {
				return err // В случае ошибки оффсет НЕ коммитится
			}
			// 3. Помечаем как успешно обработанное
			if err := store.MarkProcessed(ctx, header.ID); err != nil {
				logger.Error("Failed to mark message as processed", "event_id", header.ID, "error", err)
				return err
			}
			return nil
		}
	}
}
