package main

import (
	"context"
	core_config "customer/internal/core/config"
	"fmt"
	"net"
	"os"
	"os/signal"
	pkg_core_database_postgres "pkg/core/database/postgres"
	"syscall"
	"time"

	"google.golang.org/grpc"
)

const (
	grpcPort = 50051 // Или читай из конфига/окружения
)

func main() {
	cfg := core_config.NewConfigMust()
	time.Local = cfg.TimeZone

	ctx, cancel := signal.NotifyContext(
		context.Background(),
		syscall.SIGINT, syscall.SIGTERM,
	)
	defer cancel()

	pool, err := pkg_core_database_postgres.NewPool(
		ctx, pkg_core_database_postgres.NewConfigMust(),
	)
	if err != nil {
		panic(err)
	}
	defer pool.Close()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", grpcPort))
	if err != nil {
		os.Exit(1)
	}
	grpcServer := grpc.NewServer()

	// TODO: Регистрируем твой сгенерированный сервис
	// customerService := delivery.NewCustomerHandler(pgPool)
	// pb.RegisterCustomerServiceServer(grpcServer, customerService)

	// 7. Запускаем gRPC-сервер в отдельной горутине, чтобы не блокировать main
	go func() {
		if err := grpcServer.Serve(lis); err != nil && err != grpc.ErrServerStopped {
			os.Exit(1) // Останавливаем приложение при сбое сервера
		}
	}()

	// 8. Ожидаем сигнал остановки (SIGINT / SIGTERM / Ctrl+C)
	<-ctx.Done()
	// 9. Плавная остановка gRPC-сервера (дожидается завершения активных RPC-запросов)
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	stopped := make(chan struct{})
	go func() {
		grpcServer.GracefulStop()
		close(stopped)
	}()

	select {
	case <-stopped:
	case <-shutdownCtx.Done():
		grpcServer.Stop()
	}
}
