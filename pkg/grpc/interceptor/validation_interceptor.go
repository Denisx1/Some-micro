package grpc_interceptor

import (
	"context"
	"fmt"

	"buf.build/go/protovalidate"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
)

// ValidationUnaryInterceptor автоматически проверяет каждый входящий gRPC-запрос
func ValidationUnary() (grpc.UnaryServerInterceptor, error) {
	validator, err := protovalidate.New()
	if err != nil {
		return nil, fmt.Errorf("failed to initialize protovalidate: %w", err)
	}

	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		// Проверяем, реализует ли структура Protobuf-интерфейс
		if msg, ok := req.(proto.Message); ok {
			if err := validator.Validate(msg); err != nil {
				// Если валидация не прошла — сразу отбиваем запрос с кодом InvalidArgument
				return nil, status.Errorf(codes.InvalidArgument, "validation error: %v", err)
			}
		}

		return handler(ctx, req)
	}, nil
}
