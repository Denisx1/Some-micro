package core_redis

import (
	"context"
	"errors"
	"fmt"
	"net"
	"strings"

	"github.com/redis/go-redis/v9"
)

var (
	ErrNotFound          = errors.New("not found")
	ErrUnavailable       = errors.New("unavailable")
	ErrInvalidArgument   = errors.New("invalid argument")
	ErrResourceExhausted = errors.New("resource exhaused")
	ErrUnknown           = errors.New("unknown error")
)

func mapErrors(err error) error {
	if err == nil {
		return nil
	}

	// 1. Ключ не найден (основной кейс при Get)
	if errors.Is(err, redis.Nil) {
		return ErrNotFound
	}

	// 2. Таймаут операции или отмена контекста
	if errors.Is(err, context.DeadlineExceeded) || errors.Is(err, context.Canceled) {
		return err
	}

	// 3. Проблемы с сетью или подключением к Redis
	var netErr net.Error
	if errors.As(err, &netErr) {
		return fmt.Errorf("%v: %w", err, ErrUnavailable)
	}

	// 4. Закончилась память в Redis при записи (Set)
	if strings.HasPrefix(err.Error(), "OOM") {
		return fmt.Errorf("%v: %w", err, ErrResourceExhausted)
	}

	// 5. Все остальные непредвиденные ошибки
	return fmt.Errorf("%w: %v", ErrUnknown, err)
}
