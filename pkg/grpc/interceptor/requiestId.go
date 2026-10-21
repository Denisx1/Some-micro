package grpc_interceptor

import (
	"context"
	core_trace "pkg/core/trace"

	"github.com/google/uuid"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

func RequestId() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		var traceId string
		if md, ok := metadata.FromIncomingContext(ctx); ok {
			if values := md.Get(core_trace.RequestIdHeader); len(values) > 0 && values[0] != "" {
				traceId = values[0]
			}
		}
		if traceId == "" {
			traceId = uuid.NewString()
		}
		ctx = context.WithValue(ctx, core_trace.TraceIDKey{}, traceId)

		return handler(ctx, req)
	}
}
