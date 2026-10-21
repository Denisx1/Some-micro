package core_logger

import (
	"fmt"
	"os"
	"path/filepath"
	core_logger "pkg/core/logger"
	"strings"
	"time"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type zapAdapter struct {
	logger *zap.SugaredLogger // Используем SugaredLogger для поддержки args ...any (Debugw, Infow)
	file   *os.File
}

func NewLogger(config LoggerConfig) (core_logger.Logger, error) {
	// 1. Уровень логирования
	zapLvl := zap.NewAtomicLevel()
	if err := zapLvl.UnmarshalText([]byte(config.Level)); err != nil {
		return nil, fmt.Errorf("unmarshal log level: %w", err)
	}

	// 2. Создание директории и файла для логов (если указана папка)
	var logFile *os.File
	var err error
	if config.Folder != "" {
		if err := os.MkdirAll(config.Folder, 0755); err != nil {
			return nil, fmt.Errorf("mkdir logFolder: %w", err)
		}

		timestamp := time.Now().UTC().Format("2006-01-02T15-04-05.000000")
		logFilePath := filepath.Join(
			config.Folder,
			fmt.Sprintf("%s.log", timestamp),
		)
		logFile, err = os.OpenFile(logFilePath, os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("open log file: %w", err)
		}
	}

	// 3. Выбор энкодера (JSON vs CONSOLE)
	var encoder zapcore.Encoder

	if strings.ToUpper(config.Format) == "JSON" {
		jsonConfig := zap.NewProductionEncoderConfig()
		jsonConfig.TimeKey = "timestamp"
		jsonConfig.EncodeTime = zapcore.ISO8601TimeEncoder

		encoder = zapcore.NewJSONEncoder(jsonConfig)
	} else {
		// Консольный формат: имя сервиса в начале строки
		consoleConfig := zap.NewDevelopmentEncoderConfig()
		servicePrefix := fmt.Sprintf("[%s]", strings.ToUpper(config.ServiceName))

		consoleConfig.EncodeTime = func(t time.Time, enc zapcore.PrimitiveArrayEncoder) {
			enc.AppendString(fmt.Sprintf("%s %s", servicePrefix, t.Format("2006-01-02T15:04:05.000000")))
		}

		encoder = zapcore.NewConsoleEncoder(consoleConfig)
	}

	// 4. Настройка приёмников вывода (stdout + файл)
	var cores []zapcore.Core
	cores = append(cores, zapcore.NewCore(encoder, zapcore.AddSync(os.Stdout), zapLvl))

	if logFile != nil {
		cores = append(cores, zapcore.NewCore(encoder, zapcore.AddSync(logFile), zapLvl))
	}

	core := zapcore.NewTee(cores...)

	// 5. Создание базвого логгера
	baseLogger := zap.New(core, zap.AddCaller(), zap.AddCallerSkip(1))

	// Если выбран JSON, добавляем имя сервиса как отдельное поле в JSON-структуру
	if strings.ToUpper(config.Format) == "JSON" {
		baseLogger = baseLogger.With(zap.String("service", config.ServiceName))
	}

	return &zapAdapter{
		logger: baseLogger.Sugar(),
		file:   logFile,
	}, nil
}
func (z *zapAdapter) Debug(msg string, args ...any) { z.logger.Debugw(msg, args...) }
func (z *zapAdapter) Info(msg string, args ...any)  { z.logger.Infow(msg, args...) }
func (z *zapAdapter) Warn(msg string, args ...any)  { z.logger.Warnw(msg, args...) }
func (z *zapAdapter) Error(msg string, args ...any) { z.logger.Errorw(msg, args...) }
func (z *zapAdapter) Fatal(msg string, args ...any) { z.logger.Fatalw(msg, args...) }

// Принимаем variadic args ...any и возвращаем интерфейс core_logger.Logger
func (z *zapAdapter) With(args ...any) core_logger.Logger {
	return &zapAdapter{
		logger: z.logger.With(args...),
		file:   z.file,
	}
}

func (z *zapAdapter) Sync() error {
	return z.logger.Sync()
}

func (z *zapAdapter) Close() error {
	_ = z.Sync()
	if z.file != nil {
		return z.file.Close()
	}
	return nil
}
