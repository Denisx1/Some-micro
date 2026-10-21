package main

import (
	"context"
	"log"
	grpc_server "pkg/grpc/server"
	customerv1 "pkg/pb/customer/v1"
	core_pgx_pool "pkg/postgres/pgx"
	core_zap_logger "pkg/zap"

	"fmt"
	"os"
	"os/signal"
	"syscall"

	core_config "customer/internal/core/config"
	customer_postgres_repository "customer/internal/feature/customer/repository"
	customer_service "customer/internal/feature/customer/service"
	customer_transport_grpc "customer/internal/feature/customer/transport/grpc"
)

func main() {
	appCfg := core_config.NewAppConfigMust()
	ctx, cancel := signal.NotifyContext(
		context.Background(),
		syscall.SIGINT, syscall.SIGTERM,
	)
	defer cancel()
	logger, err := core_zap_logger.NewZapLogger(core_zap_logger.NewLoggerConfigMust())
	if err != nil {
		fmt.Println("Failed to init application logger")
		os.Exit(1)
	}
	defer logger.Close()
	logger.Debug("Application time zone", "zone", appCfg.TimeZone)
	logger.Debug("initializing postgres connection pool")

	pool, err := core_pgx_pool.NewPool(
		ctx, core_pgx_pool.NewPostgresConfigMust(),
	)
	if err != nil {
		logger.Fatal("failed to init postgres connection pool", "err", err)
	}
	defer pool.Close()
	logger.Debug("Database succesfully connected")
	defer pool.Close()
	customerRepository := customer_postgres_repository.NewCustomerRepository(pool)
	customerService := customer_service.NewCustomerService(customerRepository)
	customerTransport := customer_transport_grpc.NewCustomerGRPCHandler(customerService)
	grpcServer, err := grpc_server.NewServer(
		appCfg.Grpc,
		logger,
	)
	if err != nil {
		logger.Fatal("failed to create grpc server: %v", err)
	}
	// 3. Включаем Reflection (для удобного тестирования)
	grpcServer.EnableReflection()
	customerv1.RegisterCustomerServiceServer(grpcServer, customerTransport)
	go func() {
		logger.Debug("gRPC Server is running", "port", appCfg.Grpc)
		if err := grpcServer.Start(); err != nil {
			log.Fatal("grpc server error", err)
			return
		}
		logger.Debug("gRPC Server strted", "port", appCfg.Grpc)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	log.Println("Shutting down gRPC server...")
	if err := grpcServer.Close(); err != nil {
		log.Printf("error closing server: %v", err)
	}
	log.Println("Server stopped")

}
