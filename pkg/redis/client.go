package core_redis

import (
	"context"
	"fmt"
	"time"

	"github.com/bytedance/sonic"
	"github.com/redis/go-redis/v9"
)

type Cache interface {
	Set(
		ctx context.Context,
		key string,
		value any,
		expiration time.Duration,
	) StatusResult
	Get(ctx context.Context, key string) StringResult
	Delete(ctx context.Context, keys ...string) IntResult
}

type ComponentLifecycle interface {
	Ping(ctx context.Context) StatusResult
	Close() error
}
type Client interface {
	Cache
	ComponentLifecycle
}

type client struct {
	redisDb   *redis.Client
	opTimeout time.Duration
}

func NewClient(
	ctx context.Context,
	cfg RedisConfig,
) (Client, error) {
	redisDb := redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%s", cfg.Host, cfg.Port), // "host:port"
		Password: cfg.Password,
		DB:       cfg.DB,

		// --- НАСТРОЙКИ ПУЛА СОЕДИНЕНИЙ ---
		PoolSize:        cfg.PoolSize,        // Максимальное количество сокетов в пуле
		MinIdleConns:    cfg.MinIdleConns,    // Минимальное кол-во готовых/простаивающих соединений
		MaxIdleConns:    cfg.MaxIdleConns,    // Максимальное кол-во простаивающих соединений
		ConnMaxLifetime: cfg.ConnMaxLifetime, // Время жизни соединения до его пересоздания
		ConnMaxIdleTime: cfg.ConnMaxIdleTime, // Время жизни простаивающего соединения

		// Таймауты на операции и подключение
		DialTimeout:  cfg.Timeout,
		ReadTimeout:  cfg.Timeout,
		WriteTimeout: cfg.Timeout,
	})

	cache := &client{
		redisDb:   redisDb,
		opTimeout: cfg.Timeout,
	}
	connectCtx, cancel := context.WithTimeout(ctx, cfg.Timeout)
	defer cancel()

	if err := cache.Ping(connectCtx).Err(); err != nil {
		_ = redisDb.Close()
		return nil, fmt.Errorf("ping Redis server: %w", err)
	}
	return cache, nil
}

func (p *client) withTimeout(
	ctx context.Context,
) (context.Context, context.CancelFunc) {
	if p.opTimeout <= 0 {
		return ctx, func() {}
	}
	if deadline, ok := ctx.Deadline(); ok {
		if time.Until(deadline) < p.opTimeout {
			return ctx, func() {}
		}
	}
	return context.WithTimeout(ctx, p.opTimeout)
}

func (a *client) Ping(ctx context.Context) StatusResult {
	reqCtx, cancel := a.withTimeout(ctx)
	cmd := a.redisDb.Ping(reqCtx)
	return statusCMD{status: cmd, cancel: cancel}
}

func (c *client) Close() error {
	return mapErrors(c.redisDb.Close())
}
func (c *client) Set(
	ctx context.Context,
	key string,
	value any,
	expiration time.Duration,
) StatusResult {
	reqCtx, cancel := c.withTimeout(ctx)
	payload := value
	switch v := value.(type) {
	case string, []byte:
		payload = v
	default:
		bytes, err := sonic.Marshal(value)
		if err != nil {
			cmd := redis.NewStatusCmd(reqCtx)
			cmd.SetErr(err)
			return statusCMD{status: cmd, cancel: cancel}
		}
		payload = bytes
	}
	cmd := c.redisDb.Set(reqCtx, key, payload, expiration)

	return statusCMD{
		status: cmd,
		cancel: cancel,
	}
}

func (c *client) Get(
	ctx context.Context,
	key string,
) StringResult {
	reqCtx, cancel := c.withTimeout(ctx)
	cmd := c.redisDb.Get(reqCtx, key)

	return stringCMD{
		cmd:    cmd,
		cancel: cancel,
	}
}

func (c *client) Delete(
	ctx context.Context,
	keys ...string,
) IntResult {
	reqCtx, cancel := c.withTimeout(ctx)
	cmd := c.redisDb.Del(reqCtx, keys...)
	return intCMD{
		cmd:    cmd,
		cancel: cancel,
	}
}
