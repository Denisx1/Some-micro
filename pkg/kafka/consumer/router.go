package kafka_consumer

import (
	"context"
	"encoding/json"
	core_logger "pkg/core/logger"
	kafka_connect "pkg/kafka"
	"time"
)

type Envelope struct {
	ID            string          `json:"id"`             // UUID события (для проверки идемпотентности)
	Type          string          `json:"type"`           // Тип события/команды (ключ для мапы роутера)
	AggregateType string          `json:"aggregate_type"` // e.g. "candidate", "saga"
	AggregateID   string          `json:"aggregate_id"`   // ID сущности
	TraceID       string          `json:"trace_id"`       // Сквозной Trace ID для логов
	CreatedAt     time.Time       `json:"created_at"`
	Payload       json.RawMessage `json:"payload"` // Чистый DTO в формате JSON
}

type DomainHandler func(
	ctx context.Context,
	payload []byte,
) error

type EventRouter struct {
	handlers map[string]DomainHandler
	logger   core_logger.Logger
}

func NewEventRouter(logger core_logger.Logger) *EventRouter {
	return &EventRouter{
		handlers: make(map[string]DomainHandler),
		logger:   logger,
	}
}

func (r *EventRouter) Register(eventType string, handler DomainHandler) {
	r.handlers[eventType] = handler
}

func (r *EventRouter) Handle(
	ctx context.Context,
	msg kafka_connect.Message,
) error {
	// 1. Распаковываем Envelope из Value
	var env Envelope
	if err := json.Unmarshal(msg.Value, &env); err != nil {
		r.logger.Error("Failed to unmarshal kafka envelope",
			"topic", msg.Topic,
			"partition", msg.Partition,
			"offset", msg.Offset,
			"error", err,
		)
		// Возвращаем nil или специальную DDL error, чтобы не застревать на битых бинарниках
		return nil
	}

	// 2. Ищем хэндлер по event_type
	handler, exists := r.handlers[env.Type]
	if !exists {
		r.logger.Info("No handler registered for event type, skipping",
			"type", env.Type,
			"topic", msg.Topic,
		)
		return nil // Сообщение не для этого сервиса — пропускаем
	}

	// 3. Пробрасываем TraceID в контекст из Envelope (или из Headers)
	if env.TraceID != "" {
		// ctx = tracing.ContextWithTraceID(ctx, env.TraceID)
	}

	r.logger.Info("Routing message to domain handler",
		"event_type", env.Type,
		"event_id", env.ID,
	)

	// 4. Передаем чистый Payload в бизнес-хэндлер
	return handler(ctx, env.Payload)
}
