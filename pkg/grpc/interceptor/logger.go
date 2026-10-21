package grpc_interceptor

import (
	"context"
	core_logger "pkg/core/logger"
	core_trace "pkg/core/trace"

	"google.golang.org/grpc"
)

func Logger(logger core_logger.Logger) grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		traceID := core_trace.GetTraceID(ctx)
		reqLogger := logger.With(
			"trace_id", traceID,
		)
		reqLogger.Debug(
			">>> Incoming GRPC request",
		)
		ctx = core_logger.ToContext(ctx, reqLogger)

		return handler(ctx, req)
	}
}
