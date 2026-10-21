package grpc_server

import (
	"context"
	"errors"
	"fmt"
	"net"
	core_logger "pkg/core/logger"
	grpc_interceptor "pkg/grpc/interceptor"
	server_config "pkg/grpc/server/config" // путь поправьте под вашу структуру
	"strconv"
	"sync"
	"sync/atomic"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/reflection"
)

type Component interface {
	Ping(ctx context.Context) error
	Close() error
}

type ServiceRegistrar interface {
	RegisterService(desc any, impl any)
}

// Проверяем соответствие интерфейсам на этапе компиляции
var (
	_ Component             = (*serverWrapper)(nil)
	_ Server                = (*serverWrapper)(nil)
	_ grpc.ServiceRegistrar = (*serverWrapper)(nil)
)

type Server interface {
	Component
	grpc.ServiceRegistrar

	Start() error
	EnableReflection()
	SetServingStatus(service string, serving bool)
}

type serverWrapper struct {
	server   *grpc.Server
	health   *health.Server
	listener net.Listener
	logger   core_logger.Logger
	cfg      server_config.Config

	started   atomic.Bool
	closed    atomic.Bool
	closeOnce sync.Once
	closeErr  error
}

// NewServer создаёт сервер из конфигурации.
// opts применяются после дефолтных опций и могут их переопределить.
func NewServer(
	serverConfig server_config.Config,
	logger core_logger.Logger,
	opts ...grpc.ServerOption,
) (Server, error) {
	if err := serverConfig.Validate(); err != nil {
		return nil, fmt.Errorf("invalid grpc config: %w", err)
	}

	// Порт занимаем сразу: если он занят, узнаем об этом на старте, а не в горутине.
	lis, err := net.Listen("tcp", ":"+serverConfig.Port)
	if err != nil {
		return nil, fmt.Errorf("failed to listen port %s: %w", serverConfig.Port, err)
	}

	baseOpts := []grpc.ServerOption{
		grpc.ChainUnaryInterceptor(
			grpc_interceptor.RequestId(),
			grpc_interceptor.Logger(logger),
			grpc_interceptor.Trace(),
			grpc_interceptor.Panic(),
		),
		grpc.KeepaliveParams(serverConfig.Keepalive.ServerParameters()),
		grpc.KeepaliveEnforcementPolicy(serverConfig.Keepalive.EnforcementPolicy()),
	}
	// Нулевой лимит в grpc означал бы "отвергать все сообщения", поэтому добавляем только > 0.
	if serverConfig.MaxRecvMsgSize > 0 {
		baseOpts = append(baseOpts, grpc.MaxRecvMsgSize(serverConfig.MaxRecvMsgSize))
	}
	if serverConfig.MaxSendMsgSize > 0 {
		baseOpts = append(baseOpts, grpc.MaxSendMsgSize(serverConfig.MaxSendMsgSize))
	}

	srv := grpc.NewServer(append(baseOpts, opts...)...)

	// Стандартный grpc.health.v1: для Kubernetes probes, grpc_health_probe, балансировщиков.
	hs := health.NewServer()
	hs.SetServingStatus("", grpc_health_v1.HealthCheckResponse_NOT_SERVING) // пока не стартовали
	grpc_health_v1.RegisterHealthServer(srv, hs)

	return &serverWrapper{
		server:   srv,
		health:   hs,
		listener: lis,
		logger:   logger,
		cfg:      serverConfig,
	}, nil
}

// EnableReflection включает gRPC Reflection для дебага через Postman/grpcurl.
// В production лучше включать только по флагу конфигурации.
func (s *serverWrapper) EnableReflection() {
	reflection.Register(s.server)
}

// RegisterService позволяет передавать serverWrapper как grpc.ServiceRegistrar.
func (s *serverWrapper) RegisterService(desc *grpc.ServiceDesc, impl any) {
	s.server.RegisterService(desc, impl)
}

// SetServingStatus задаёт health-статус конкретного сервиса
// (например "user.v1.UserService"). Пустая строка означает сервер целиком.
func (s *serverWrapper) SetServingStatus(service string, serving bool) {
	status := grpc_health_v1.HealthCheckResponse_NOT_SERVING
	if serving {
		status = grpc_health_v1.HealthCheckResponse_SERVING
	}
	s.health.SetServingStatus(service, status)
}

// Addr возвращает реальный адрес listener (полезно в тестах с портом "0").
func (s *serverWrapper) Addr() net.Addr {
	return s.listener.Addr()
}

// Start блокируется, пока сервер не остановят. После штатного Close возвращает nil.
func (s *serverWrapper) Start() error {
	if !s.started.CompareAndSwap(false, true) {
		return errors.New("grpc server: already started")
	}

	s.health.SetServingStatus("", grpc_health_v1.HealthCheckResponse_SERVING)

	err := s.server.Serve(s.listener)
	if err == nil || errors.Is(err, grpc.ErrServerStopped) {
		return nil
	}
	return fmt.Errorf("grpc serve: %w", err)
}

// Ping реально подключается к порту, а не просто проверяет, что listener не nil.
func (s *serverWrapper) Ping(ctx context.Context) error {
	if s.listener == nil {
		return errors.New("listener is nil")
	}
	if s.closed.Load() {
		return errors.New("grpc server is closed")
	}

	dialer := net.Dialer{Timeout: 2 * time.Second}
	conn, err := dialer.DialContext(ctx, "tcp", net.JoinHostPort("127.0.0.1", s.port()))
	if err != nil {
		return fmt.Errorf("ping grpc listener: %w", err)
	}
	return conn.Close()
}

// Close: сначала health -> NOT_SERVING, затем GracefulStop.
// Если за ShutdownTimeout запросы не завершились, сервер останавливается принудительно.
// Повторные вызовы безопасны и возвращают тот же результат.
func (s *serverWrapper) Close() error {
	s.closeOnce.Do(func() {
		s.closed.Store(true)
		s.health.Shutdown() // все сервисы NOT_SERVING, дальнейшие обновления игнорируются

		done := make(chan struct{})
		go func() {
			s.server.GracefulStop()
			close(done)
		}()

		timer := time.NewTimer(s.cfg.ShutdownTimeout)
		defer timer.Stop()

		select {
		case <-done:
		case <-timer.C:
			s.logger.Debug("graceful stop timed out, forcing stop", "timeout", s.cfg.ShutdownTimeout.String())
			s.server.Stop() // обрывает соединения; GracefulStop после этого завершается
			<-done
			s.closeErr = fmt.Errorf(
				"graceful stop exceeded %s, server was stopped forcibly",
				s.cfg.ShutdownTimeout,
			)
		}

		// Если Start не вызывали, listener сам не закроется.
		_ = s.listener.Close()
	})
	return s.closeErr
}

func (s *serverWrapper) port() string {
	if addr, ok := s.listener.Addr().(*net.TCPAddr); ok {
		return strconv.Itoa(addr.Port)
	}
	return s.cfg.Port
}
