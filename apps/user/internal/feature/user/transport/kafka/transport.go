package kafka_transport_user

import (
	"github.com/Denisx1/Some-micro/apps/user/internal/feature/user/transport"
)

type UserConsumer struct {
	userService transport.UserService
}

func NewUserKafkaConsumer(userService transport.UserService) *UserConsumer {
	return &UserConsumer{
		userService: userService,
	}
}
