package pkg_core_database_postgres

import (
	"fmt"
	"time"

	"github.com/kelseyhightower/envconfig"
)

type Config struct {
	Host            string
	Port            int
	User            string
	Password        string
	DB              string
	SSLMode         string
	MaxConns        int32
	MinConns        int32
	MaxConnLifetime time.Duration
	OpTimeout       time.Duration
}

func NewConfig() (Config, error) {
	var config Config
	if err := envconfig.Process("POSTGRES", &config); err != nil {
		return Config{}, fmt.Errorf("process postgres config: %w", err)
	}
	return config, nil
}
func NewConfigMust() Config {
	config, err := NewConfig()
	if err != nil {
		err = fmt.Errorf("get Postgres connection pool: %w", err)
		fmt.Println(err)
		panic(err)
	}
	return config
}
