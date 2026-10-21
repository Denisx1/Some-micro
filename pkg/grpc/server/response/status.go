package grpc_server_response

import (
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (h *GRPCResponseHandler) buildStatus(statusCode codes.Code, err error, msg string) error {
	if statusCode == codes.Internal {
		return status.Error(statusCode, "internal server error")
	}

	if msg != "" {
		return status.Errorf(statusCode, "%s: %v", msg, err.Error())
	}

	return status.Error(statusCode, err.Error())
}
