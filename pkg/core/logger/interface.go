package core_logger

type Logger interface {
	Debug(msg string, args ...any)
	Info(msg string, args ...any)
	Warn(msg string, args ...any)
	Error(msg string, args ...any)
	// With создает дочерний логгер с контекстными полями ("key", "value")
	With(args ...any) Logger
	Sync() error
	Close() error
}
