package kafka_connect

import "context"

type Message struct {
	Topic     string
	Key       []byte
	Value     []byte
	Headers   map[string]string
	Partition int32
	Offset    int64
}

type Handler func(ctx context.Context, msg Message) error

type Middleware func(next Handler) Handler
