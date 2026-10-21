package grpc_transport_user

import (
	userv1 "pkg/pb/user/v1"

	"github.com/Denisx1/Some-micro/apps/user/internal/feature/user/transport"
)

type UserGRPCHandler struct {
	userService transport.UserService
	userv1.UnimplementedUserServiceServer
}

func NewUserGRPCHandler(userService transport.UserService) *UserGRPCHandler {
	return &UserGRPCHandler{
		userService: userService,
	}
}
