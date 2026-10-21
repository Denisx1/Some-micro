package core_redis

import (
	"context"
	"fmt"

	"github.com/bytedance/sonic"
	"github.com/redis/go-redis/v9"
)

type IntResult interface {
	Result() (int64, error)
	Uint64() (uint64, error)
	Err() error
}

type StringResult interface {
	Result() (string, error)
	Bytes() ([]byte, error)
	Scan(dest any) error
	Err() error
}

type StatusResult interface {
	Result() (string, error)
	Err() error
}

type intCMD struct {
	cmd    *redis.IntCmd
	cancel context.CancelFunc
}

type statusCMD struct {
	status *redis.StatusCmd
	cancel context.CancelFunc
}

type stringCMD struct {
	cmd    *redis.StringCmd
	cancel context.CancelFunc
}

func (i intCMD) Result() (int64, error) {
	if i.cancel != nil {
		defer i.cancel()
	}
	val, err := i.cmd.Result()
	if err != nil {
		return 0, mapErrors(err)
	}
	return val, nil
}

func (i intCMD) Uint64() (uint64, error) {
	if i.cancel != nil {
		defer i.cancel()
	}
	val, err := i.cmd.Uint64()
	if err != nil {
		return 0, mapErrors(err)
	}
	return val, nil
}

func (i intCMD) Err() error {
	if i.cancel != nil {
		defer i.cancel()
	}
	return mapErrors(i.cmd.Err())
}

func (a statusCMD) Result() (string, error) {
	if a.cancel != nil {
		defer a.cancel()
	}
	data, err := a.status.Result()
	if err != nil {
		return "", mapErrors(err)
	}

	return data, nil
}

func (s stringCMD) Result() (string, error) {
	val, err := s.cmd.Result()
	if err != nil {
		return "", mapErrors(err)
	}
	return val, nil
}
func (s statusCMD) Err() error {
	if s.cancel != nil {
		defer s.cancel()
	}
	return mapErrors(s.status.Err())
}

func (s stringCMD) Bytes() ([]byte, error) {
	val, err := s.cmd.Bytes()
	if err != nil {
		return nil, mapErrors(err)
	}
	return val, nil
}

func (s stringCMD) Scan(dest any) error {
	bytes, err := s.Bytes()
	if err != nil {
		return mapErrors(err)
	}
	if err := sonic.Unmarshal(bytes, dest); err != nil {
		return fmt.Errorf("failed to scan redis payload: %w", err)
	}
	return nil
}

// Err проверяет наличие ошибки без получения значения
func (s stringCMD) Err() error {

	return mapErrors(s.cmd.Err())
}
