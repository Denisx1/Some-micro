package core_config

import (
	"fmt"
	"time"

	"github.com/kelseyhightower/envconfig"
)

type AppConfig struct {
	Name            string        `envconfig:"NAME" required:"true"`
	Env             string        `envconfig:"ENV" required:"true"`
	TimeZone        string        `envconfig:"TIMEZONE" required:"true"`
	ShutdownTimeout time.Duration `envconfig:"SHUTDOWN_TIMEOUT" required:"true"`
	Grpc            string        `envconfig:"GRPC" required:"true"`
}

func NewAppConfig() (AppConfig, error) {
	var appCfg AppConfig
	if err := envconfig.Process("APP", &appCfg); err != nil {
		return AppConfig{}, fmt.Errorf("process app config error: %w", err)
	}
	return appCfg, nil
}
func NewAppConfigMust() AppConfig {
	appCfg, err := NewAppConfig()
	if err != nil {
		err = fmt.Errorf("get app config: %w", err)
		fmt.Println(err)
		panic(err)
	}
	return appCfg
}
