package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	core_repository "pkg/core/repository"
	grpc_server "pkg/grpc/server"
	server_config "pkg/grpc/server/config"
	grpc_server_response "pkg/grpc/server/response"
	core_hasher "pkg/hasher"
	core_logger "pkg/logger"
	userv1 "pkg/pb/user/v1"
	core_pgx_pool "pkg/postgres/pgx"
	core_redis "pkg/redis"

	"syscall"

	user_outbox_repository "github.com/Denisx1/Some-micro/apps/user/internal/core/outbox/repository"
	candidate_repository "github.com/Denisx1/Some-micro/apps/user/internal/feature/candidate/repository/postgres"
	candidate_redis "github.com/Denisx1/Some-micro/apps/user/internal/feature/candidate/repository/redis"
	candidate_service "github.com/Denisx1/Some-micro/apps/user/internal/feature/candidate/service"
	grpc_transport_candidate "github.com/Denisx1/Some-micro/apps/user/internal/feature/candidate/transport/grpc"
	role_repository "github.com/Denisx1/Some-micro/apps/user/internal/feature/role/repository/postgres"
	role_redis "github.com/Denisx1/Some-micro/apps/user/internal/feature/role/repository/redis"
	role_service "github.com/Denisx1/Some-micro/apps/user/internal/feature/role/service"
	user_repository "github.com/Denisx1/Some-micro/apps/user/internal/feature/user/repository/postgres"
	user_service "github.com/Denisx1/Some-micro/apps/user/internal/feature/user/service"
	grpc_transport_user "github.com/Denisx1/Some-micro/apps/user/internal/feature/user/transport/grpc"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, "application error:", err)
		os.Exit(1)
	}
}

// run собирает приложение и запускает его. Любая ошибка возвращается наверх,
// поэтому все defer (pool, redis, logger) гарантированно выполняются.
func run() error {
	fmt.Println("GRPC_NAME =", os.Getenv("GRPC_NAME"))
	fmt.Println("POSTGRES_HOST =", os.Getenv("POSTGRES_HOST"))
	grpcCfg, err := server_config.NewServerConfig()
	fmt.Println(grpcCfg)
	if err != nil {
		return fmt.Errorf("init grpc config: %w", err)
	}

	// Единственный источник сигналов завершения: ctx отменяется по SIGINT/SIGTERM.
	ctx, stop := signal.NotifyContext(
		context.Background(),
		syscall.SIGINT, syscall.SIGTERM,
	)
	defer stop()

	logger, err := core_logger.NewLogger(core_logger.NewLoggerConfigMust())
	if err != nil {
		return fmt.Errorf("init application logger: %w", err)
	}
	defer logger.Close()

	logger.Debug("Application time zone", "zone", grpcCfg.TimeZone)

	logger.Debug("initializing postgres connection pool")
	pool, err := core_pgx_pool.NewPool(
		ctx,
		core_pgx_pool.NewPostgresConfigMust(),
	)
	if err != nil {
		return fmt.Errorf("init postgres connection pool: %w", err)
	}
	defer pool.Close()
	logger.Debug("Database successfully connected")

	logger.Debug("initializing redis connection pool")
	cache, err := core_redis.NewClient(
		ctx,
		core_redis.NewRedisConfigMust(),
	)
	if err != nil {
		return fmt.Errorf("init redis connection pool: %w", err)
	}
	defer cache.Close()
	logger.Debug("Redis successfully connected")

	outboxRepository := user_outbox_repository.NewUserOutboxRepository(pool)

	logger.Debug("initializing feature role")
	roleRepository := role_repository.NewRoleRepository(pool)
	roleCacheRepository := role_redis.NewRoleRedisRepository(cache)
	roleService := role_service.NewRoleService(
		roleRepository,
		roleCacheRepository,
		core_repository.Transactor(pool),
	)
	if err := roleService.InitDefaultRoles(ctx, logger); err != nil {
		return fmt.Errorf("load default roles: %w", err)
	}

	logger.Debug("initializing feature user")
	userRepository := user_repository.NewUserRepository(pool)
	userService := user_service.NewUserService(userRepository)
	userTransport := grpc_transport_user.NewUserGRPCHandler(userService)

	logger.Debug("initializing feature candidate")
	candidateRepository := candidate_repository.NewCandidateRepository(pool)
	candidateCacheRepository := candidate_redis.NewCandidateRedisRepository(cache)
	candidateService := candidate_service.NewCandidateService(
		candidateRepository,
		outboxRepository,
		roleRepository,
		roleCacheRepository,
		candidateCacheRepository,
		core_hasher.NewBcryptHasher(10),
		core_repository.Transactor(pool),
	)
	candidateTransport := grpc_transport_candidate.NewUserGRPCHandler(
		candidateService,
		grpc_server_response.NewGRPCResponseHandler(logger),
	)

	grpcServer, err := grpc_server.NewServer(grpcCfg, logger)
	if err != nil {
		return fmt.Errorf("create grpc server: %w", err)
	}

	userv1.RegisterUserServiceServer(grpcServer, userTransport)
	userv1.RegisterCandidateServiceServer(grpcServer, candidateTransport)
	grpcServer.EnableReflection()

	// Буфер 1: горутина не зависнет, даже если main уже не читает канал.
	serverErr := make(chan error, 1)
	go func() {
		logger.Debug("gRPC Server is running", "port", grpcCfg.Port)
		serverErr <- grpcServer.Start()
	}()

	// Ждём либо сигнал завершения, либо падение сервера.
	select {
	case <-ctx.Done():
		logger.Debug("Shutting down gRPC server...")
	case err := <-serverErr:
		if err != nil {
			return fmt.Errorf("grpc server: %w", err)
		}
	}

	if err := grpcServer.Close(); err != nil {
		logger.Debug("error closing server", "err", err)
	}
	logger.Debug("Server stopped")

	return nil
}
