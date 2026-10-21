package grpc_server_response

import (
	"errors"
	"fmt"
	core_errors "pkg/core/errors"
	core_logger "pkg/core/logger"

	"go.uber.org/zap"

	"google.golang.org/grpc/codes"
)

type GRPCResponseHandler struct {
	log core_logger.Logger
}

func NewGRPCResponseHandler(log core_logger.Logger) *GRPCResponseHandler {
	return &GRPCResponseHandler{
		log: log,
	}
}

func (h *GRPCResponseHandler) Error(
	err error,
	msg string,
) error {
	if err == nil {
		return nil
	}

	var (
		statusCode codes.Code
	)
	// Один switch определяет и gRPC-статус, и функцию логирования
	switch {
	case errors.Is(err, core_errors.ErrInvalidArgument):
		statusCode = codes.InvalidArgument

	case errors.Is(err, core_errors.ErrNotFound):
		statusCode = codes.NotFound

	case errors.Is(err, core_errors.ErrConflict):
		statusCode = codes.AlreadyExists

	case errors.Is(err, core_errors.ErrSyntax):
		statusCode = codes.InvalidArgument
	default:
		statusCode = codes.Internal

	}

	// 2. Формируем и возвращаем gRPC status error
	return h.buildStatus(statusCode, err, msg)
}

func (h *GRPCResponseHandler) PanicResponse(p any, msg string) error {
	statusCode := codes.Internal
	err := fmt.Errorf("unexpected panic: %v", p)

	h.log.Error(msg, zap.Error(err))

	return h.buildStatus(statusCode, err, msg)
}
