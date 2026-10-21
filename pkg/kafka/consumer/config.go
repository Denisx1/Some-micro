package kafka_consumer

import "time"

type KafkaConfig struct {
	Brockers       []string
	GroupID        string
	MinBytes       int32
	MaxBytes       int32
	CommitInterval time.Duration
}
