package grpc_interceptor

import (
	"context"
	core_logger "pkg/core/logger"
	"time"

	"google.golang.org/grpc"
)

func Trace() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		before := time.Now()
		reqLogger := core_logger.FromContext(ctx)

		resp, err := handler(ctx, req)
		duration := time.Since(before)

		if err != nil {
			reqLogger.Error("gRPC request failed",
				"duration_ms", duration,
				"err", err,
			)
		} else {
			reqLogger.Debug("<<< gRPC completed successfully",
				"duration", duration,
			)
		}

		return resp, err
	}
}
