package kafka_consumer

import (
	"context"
	core_logger "pkg/core/logger"
	kafka_connect "pkg/kafka"
	"sync"
	"time"

	"github.com/segmentio/kafka-go"
)

type Consumer struct {
	cfg         KafkaConfig
	logger      core_logger.Logger
	middlewares []kafka_connect.Middleware
	readers     []*kafka.Reader
	wg          sync.WaitGroup
	mu          sync.Mutex
}

func NewConsumer(
	cfg KafkaConfig,
	logger core_logger.Logger,
	middlewares ...kafka_connect.Middleware,
) *Consumer {
	if cfg.MinBytes == 0 {
		cfg.MinBytes = 10 * 1024
	}
	if cfg.MaxBytes == 0 {
		cfg.MaxBytes = 10 * 1024 * 1024 // 10MB
	}

	return &Consumer{
		cfg:         cfg,
		logger:      logger,
		middlewares: middlewares,
	}
}

func (c *Consumer) Subscribe(
	ctx context.Context,
	topic string,
	handler kafka_connect.Handler,

) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers:  c.cfg.Brockers,
		GroupID:  c.cfg.GroupID,
		Topic:    topic,
		MinBytes: int(c.cfg.MinBytes),
		MaxBytes: int(c.cfg.MaxBytes),
	})
	c.readers = append(c.readers, reader)
	finalHandler := handler
	for i := len(c.middlewares) - 1; i >= 0; i-- {
		finalHandler = c.middlewares[i](finalHandler)
	}
	c.wg.Add(1)
	go c.startListening(
		ctx,
		reader,
		topic,
		finalHandler,
	)
	c.logger.Info(
		"Subscribed to Kafka topic successfully",
		"topic", topic,
		"group_id", c.cfg.GroupID,
	)
	return nil
}

func (c *Consumer) startListening(
	ctx context.Context,
	reader *kafka.Reader,
	topic string,
	handler kafka_connect.Handler,
) {
	defer c.wg.Done()
	defer reader.Close()
	for {
		select {
		case <-ctx.Done():
			c.logger.Info("Stopping consumer for topic", "topic", topic)
			return
		default:
			kafkaMsg, err := reader.FetchMessage(ctx)
			if err != nil {
				if ctx.Err() != nil {
					return
				}
				c.logger.Error(
					"Error fetching message from Kafka",
					"topic", topic,
					"error", err,
				)
				time.Sleep(500 * time.Millisecond) // Задержка перед повторной попыткой
				continue
			}
			headers := make(map[string]string, len(kafkaMsg.Headers))
			for _, h := range kafkaMsg.Headers {
				headers[h.Key] = string(h.Value)
			}
			msg := kafka_connect.Message{
				Topic:     kafkaMsg.Topic,
				Key:       kafkaMsg.Key,
				Value:     kafkaMsg.Value,
				Headers:   headers,
				Partition: int32(kafkaMsg.Partition),
				Offset:    kafkaMsg.Offset,
			}
			if err := handler(ctx, msg); err != nil {
				c.logger.Error("Failed to process Kafka message, offset NOT committed",
					"topic", topic,
					"offset", msg.Offset,
					"error", err,
				)
				// В случае ошибки оффсет НЕ коммитится, Kafka вернет сообщение при рестарте
				continue
			}
			if err := reader.CommitMessages(ctx, kafkaMsg); err != nil {
				c.logger.Error("Failed to commit Kafka offset",
					"topic", topic,
					"offset", msg.Offset,
					"error", err,
				)
			}
		}

	}
}

func (c *Consumer) Close() error {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.wg.Wait()
	c.logger.Info("All Kafka readers closed gracefully")
	return nil
}
