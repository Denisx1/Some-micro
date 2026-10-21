package core_pgx_pool

import (
	"fmt"
	"time"

	"github.com/kelseyhightower/envconfig"
)

type PostgresConfig struct {
	Host     string        `envconfig:"HOST"     required:"true"`
	Port     string        `envconfig:"PORT"     required:"true"`
	User     string        `envconfig:"USER"     required:"true"`
	Password string        `envconfig:"PASSWORD" required:"true"`
	Database string        `envconfig:"DB"       required:"true"`
	SSLMODE  string        `envconfig:"SSLMODE"       required:"true"`
	Timeout  time.Duration `envconfig:"TIMEOUT"  required:"true"`

	MaxConns        int32         `envconfig:"MAX_CONNS"          default:"15"`
	MinConns        int32         `envconfig:"MIN_CONNS"          default:"3"`
	MaxConnLifetime time.Duration `envconfig:"MAX_CONN_LIFETIME" default:"45m"`
	MaxConnIdleTime time.Duration `envconfig:"MAX_CONN_IDLE_TIME" default:"15m"`
}

func NewPostgresConfig() (PostgresConfig, error) {
	var config PostgresConfig
	if err := envconfig.Process("POSTGRES", &config); err != nil {
		return PostgresConfig{}, fmt.Errorf("process postgres config: %w", err)
	}
	return PostgresConfig{
		Host:     config.Host,
		Port:     config.Port,
		User:     config.User,
		Password: config.Password,
		Database: config.Database,
		Timeout:  config.Timeout,
	}, nil
}
func NewPostgresConfigMust() PostgresConfig {
	config, err := NewPostgresConfig()
	if err != nil {
		err = fmt.Errorf("get Postgres connection pool: %w", err)
		fmt.Println(err)
		panic(err)
	}
	return config
}
