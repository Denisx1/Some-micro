package core_config

import (
	"fmt"
	"os"
	pkg_core_database_postgres "pkg/core/database/postgres"
	"time"
)

type Config struct {
	TimeZone *time.Location
	Env      string                            `envconfig:"ENV" default:"local"`
	Port     int                               `envconfig:"PORT" default:"8080"`
	Postgres pkg_core_database_postgres.Config // Встраиваем конфиг БД из core!
}

func NewConfig() (*Config, error) {
	tz := os.Getenv("TIME_ZONE")
	if tz == "" {
		tz = "UTC"
	}
	zone, err := time.LoadLocation(tz)
	if err != nil {
		return nil, fmt.Errorf(
			"load timezone: %s: %w",
			tz,
			err)
	}
	return &Config{
		TimeZone: zone,
	}, nil
}

func NewConfigMust() *Config {
	config, err := NewConfig()
	if err != nil {
		err = fmt.Errorf("get core config: %w", err)
		panic(err)
	}
	return config
}
