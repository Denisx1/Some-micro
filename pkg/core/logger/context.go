package core_logger

import (
	"context"
)

type loggerContextKey struct{}

var loggerKey = loggerContextKey{}

func ToContext(ctx context.Context, logger Logger) context.Context {
	return context.WithValue(
		ctx,
		loggerKey,
		logger)
}

func FromContext(ctx context.Context) Logger {
	log, ok := ctx.Value(loggerKey).(Logger)
	if !ok {
		panic("logger not found in context")
	}
	return log
}

// var defaultLogger Logger = &noopLogger{}

// type noopLogger struct{}

// func (n *noopLogger) Debug(msg string, args ...any) {}
// func (n *noopLogger) Info(msg string, args ...any)  {}
// func (n *noopLogger) Warn(msg string, args ...any)  {}
// func (n *noopLogger) Error(msg string, args ...any) {}
// func (n *noopLogger) With(args ...any) Logger       { return n }
// func (n *noopLogger) Sync() error                   { return nil }
// func (n *noopLogger) Close() error                  { return nil }
// func (n *noopLogger) Fatal(msg string, args ...any) {}
