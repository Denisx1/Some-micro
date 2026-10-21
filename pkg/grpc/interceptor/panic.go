package grpc_interceptor

import (
	"context"
	core_logger "pkg/core/logger"
	grpc_server_response "pkg/grpc/server/response"

	"google.golang.org/grpc"
)

func Panic() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		log := core_logger.FromContext(ctx)
		responseHandler := grpc_server_response.NewGRPCResponseHandler(log)
		defer func() {
			if p := recover(); p != nil {
				responseHandler.PanicResponse(p, "During handle Grpc request got unexpected panic ")
			}
		}()
		return handler(ctx, req)
	}
}
