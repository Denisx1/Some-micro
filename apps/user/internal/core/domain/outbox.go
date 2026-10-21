package core_domain

type OutboxEvent struct {
	ID            string
	AggregateType string
	AggregateID   string
	Payload       any
	TraceID       string
}

func NewOutboxEvent(
	id string,
	aggregateType string,
	aggregateId string,
	payload any,
	traceId string,
) OutboxEvent {
	return OutboxEvent{
		ID:            id,
		AggregateType: aggregateType,
		AggregateID:   aggregateId,
		Payload:       payload,
		TraceID:       traceId,
	}
}

func NewOutboxUninitialized(
	aggregateId string,
	aggregateType string,
	payload any,
	traceId string,
) OutboxEvent {
	return NewOutboxEvent(
		UninitializedID,
		aggregateType,
		aggregateId,
		payload,
		traceId,
	)
}
