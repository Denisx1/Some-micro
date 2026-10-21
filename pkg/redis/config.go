package core_redis

import (
	"fmt"
	"time"

	"github.com/kelseyhightower/envconfig"
)

const (
	defaultPoolSize        = 50 // Макс. кол-во сокетов в пуле
	defaultMaxIdleConns    = 20
	defaultMinIdleConns    = 10              // Готовые простаивающие соединения (для быстрой отдачи)
	defaultConnMaxIdleTime = 5 * time.Minute // Закрывать неиспользуемые сокеты через 5 мин
	defaultConnMaxLifetime = 30 * time.Minute
)

type RedisConfig struct {
	Host            string        `env:"HOST"`
	Port            string        `env:"PORT"`
	Password        string        `env:"PASSWORD"`
	DB              int           `env:"DB"`
	Timeout         time.Duration `env:"TIMEOUT"`
	PoolSize        int
	MinIdleConns    int
	MaxIdleConns    int
	ConnMaxLifetime time.Duration
	ConnMaxIdleTime time.Duration
}

func NewRedisConfig() (RedisConfig, error) {
	var config RedisConfig
	if err := envconfig.Process("REDIS", &config); err != nil {
		return RedisConfig{}, fmt.Errorf("process redis config: %w", err)
	}
	return RedisConfig{
		Host:            config.Host,
		Port:            config.Port,
		Password:        config.Password,
		DB:              config.DB,
		Timeout:         config.Timeout,
		PoolSize:        defaultPoolSize,
		MinIdleConns:    defaultMinIdleConns,
		MaxIdleConns:    defaultMaxIdleConns,
		ConnMaxLifetime: defaultConnMaxLifetime,
		ConnMaxIdleTime: defaultConnMaxIdleTime,
	}, nil
}

func NewRedisConfigMust() RedisConfig {
	config, err := NewRedisConfig()
	if err != nil {
		err = fmt.Errorf("get Redis connection pool: %w", err)
		panic(err)
	}
	return config
}
