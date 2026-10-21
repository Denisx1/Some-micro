package server_config

import (
	"fmt"
	"strconv"
	"time"

	"github.com/kelseyhightower/envconfig"
	"google.golang.org/grpc/keepalive"
)

// Значения по умолчанию лежат в тегах default: единственное место, где они описаны.
// required оставлен только у порта, остальное можно не задавать в окружении.
// Ноль в keepalive-полях означает "дефолт grpc-go" (например, 0 у MaxConnectionAge = без лимита).

type KeepaliveConfig struct {
	// ServerParameters
	MaxConnectionIdle     time.Duration `envconfig:"KEEPALIVE_MAX_CONNECTION_IDLE" default:"5m"`
	MaxConnectionAge      time.Duration `envconfig:"KEEPALIVE_MAX_CONNECTION_AGE" default:"30m"`
	MaxConnectionAgeGrace time.Duration `envconfig:"KEEPALIVE_MAX_CONNECTION_AGE_GRACE" default:"30s"`
	Time                  time.Duration `envconfig:"KEEPALIVE_TIME" default:"1m"`
	Timeout               time.Duration `envconfig:"KEEPALIVE_TIMEOUT" default:"20s"`

	// EnforcementPolicy
	MinTime             time.Duration `envconfig:"KEEPALIVE_MIN_TIME" default:"10s"`
	PermitWithoutStream bool          `envconfig:"KEEPALIVE_PERMIT_WITHOUT_STREAM" default:"true"`
}

type Config struct {
	Name            string        `envconfig:"NAME" required:"true"`
	Env             string        `envconfig:"ENV" required:"true"`
	TimeZone        string        `envconfig:"TIMEZONE" required:"true"`
	Port            string        `envconfig:"PORT" required:"true"`
	ShutdownTimeout time.Duration `envconfig:"SHUTDOWN_TIMEOUT" default:"15s"`

	MaxRecvMsgSize int `envconfig:"MAX_RECV_MSG_SIZE" default:"4194304"` // 4 MiB
	MaxSendMsgSize int `envconfig:"MAX_SEND_MSG_SIZE" default:"4194304"` // 4 MiB

	Keepalive KeepaliveConfig
}

func NewServerConfig() (Config, error) {
	var cfg Config

	if err := envconfig.Process("GRPC", &cfg); err != nil {
		return Config{}, fmt.Errorf("process grpc config: %w", err)
	}

	if err := cfg.Validate(); err != nil {
		return Config{}, fmt.Errorf("validate grpc config: %w", err)
	}

	return cfg, nil
}

// ServerParameters преобразует конфиг в структуру grpc-go.
func (k KeepaliveConfig) ServerParameters() keepalive.ServerParameters {
	return keepalive.ServerParameters{
		MaxConnectionIdle:     k.MaxConnectionIdle,
		MaxConnectionAge:      k.MaxConnectionAge,
		MaxConnectionAgeGrace: k.MaxConnectionAgeGrace,
		Time:                  k.Time,
		Timeout:               k.Timeout,
	}
}

// EnforcementPolicy преобразует конфиг в политику grpc-go.
func (k KeepaliveConfig) EnforcementPolicy() keepalive.EnforcementPolicy {
	return keepalive.EnforcementPolicy{
		MinTime:             k.MinTime,
		PermitWithoutStream: k.PermitWithoutStream,
	}
}

// Validate ловит ошибки конфигурации при старте, а не в рантайме.
func (c Config) Validate() error {
	port, err := strconv.Atoi(c.Port)
	if err != nil || port < 0 || port > 65535 {
		return fmt.Errorf("GRPC_PORT: invalid port %q", c.Port)
	}
	if c.ShutdownTimeout <= 0 {
		return fmt.Errorf("GRPC_SHUTDOWN_TIMEOUT must be > 0, got %s", c.ShutdownTimeout)
	}
	if c.MaxRecvMsgSize < 0 {
		return fmt.Errorf("GRPC_MAX_RECV_MSG_SIZE must be >= 0, got %d", c.MaxRecvMsgSize)
	}
	if c.MaxSendMsgSize < 0 {
		return fmt.Errorf("GRPC_MAX_SEND_MSG_SIZE must be >= 0, got %d", c.MaxSendMsgSize)
	}

	durations := []struct {
		name  string
		value time.Duration
	}{
		{"GRPC_KEEPALIVE_MAX_CONNECTION_IDLE", c.Keepalive.MaxConnectionIdle},
		{"GRPC_KEEPALIVE_MAX_CONNECTION_AGE", c.Keepalive.MaxConnectionAge},
		{"GRPC_KEEPALIVE_MAX_CONNECTION_AGE_GRACE", c.Keepalive.MaxConnectionAgeGrace},
		{"GRPC_KEEPALIVE_TIME", c.Keepalive.Time},
		{"GRPC_KEEPALIVE_TIMEOUT", c.Keepalive.Timeout},
		{"GRPC_KEEPALIVE_MIN_TIME", c.Keepalive.MinTime},
	}
	for _, d := range durations {
		if d.value < 0 {
			return fmt.Errorf("%s must be >= 0, got %s", d.name, d.value)
		}
	}
	return nil
}
