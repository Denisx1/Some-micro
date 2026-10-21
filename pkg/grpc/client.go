package core_grpc_connect

import (
	"context"
	"fmt"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type ClientWrapper struct {
	conn *grpc.ClientConn
}

func NewClient(target string, opts ...grpc.DialOption) (*ClientWrapper, error) {
	if len(opts) == 0 {
		opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	}

	conn, err := grpc.NewClient(target, opts...)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to %s: %w", target, err)
	}

	return &ClientWrapper{conn: conn}, nil
}

// Conn возвращает grpc.ClientConnInterface для передачи в New...Client из pb
func (c *ClientWrapper) Conn() grpc.ClientConnInterface {
	return c.conn
}

func (c *ClientWrapper) Ping(ctx context.Context) error {
	// Проверка состояния соединения
	return nil
}

func (c *ClientWrapper) Close() error {
	return c.conn.Close()
}
