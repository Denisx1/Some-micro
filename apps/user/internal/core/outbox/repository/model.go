package user_outbox_repository

import (
	"encoding/json"
	"time"
)

type UserOutboxModel struct {
	ID             string
	AggreagateType string
	AggregateId    string
	Payload        json.RawMessage
	Status         string
	TraceId        string
	CreatedAt      time.Time
}
