package core_logger

import (
	"fmt"

	"github.com/kelseyhightower/envconfig"
)

type LoggerConfig struct {
	Level  string `envconfig:"LEVEL" default:"DEBUG"`
	Format string `envconfig:"FORMAT" default:"JSON"`
	Folder string `envconfig:"FOLDER" required:"true"`
	// Type        string `envconfig:"TYPE" required:"true"`
	ServiceName string `envconfig:"NAME" required:"true"`
}

func NewLoggerConfig() (LoggerConfig, error) {
	var config LoggerConfig
	if err := envconfig.Process("LOGGER", &config); err != nil {
		return LoggerConfig{}, fmt.Errorf("process logger config: %w", err)
	}
	return LoggerConfig{
		Level:       config.Level,
		Format:      config.Format,
		Folder:      config.Folder,
		ServiceName: config.ServiceName,
	}, nil
}
func NewLoggerConfigMust() LoggerConfig {
	config, err := NewLoggerConfig()
	if err != nil {
		err = fmt.Errorf("get logger config: %w", err)
		fmt.Println(err)
		panic(err)
	}
	return config
}
