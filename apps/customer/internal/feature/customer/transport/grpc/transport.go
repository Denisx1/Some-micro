package customer_transport_grpc

import (
	"context"
	core_domain "customer/internal/core/domain"

	customerv1 "pkg/pb/customer/v1"

	"google.golang.org/grpc"
)

type CustomerGRPCHandler struct {
	customerService CustomerService
	customerv1.UnimplementedCustomerServiceServer
}
type CustomerService interface {
	CreateCustomer(
		ctx context.Context,
		customer core_domain.Customer,
	) (core_domain.Customer, error)
	GetCustomer(
		ctx context.Context,
		selector core_domain.FindSelector,
	) (core_domain.Customer, error)
}

func NewCustomerGRPCHandler(
	customerService CustomerService,
) *CustomerGRPCHandler {
	return &CustomerGRPCHandler{
		customerService: customerService,
	}
}
func (h *CustomerGRPCHandler) Register(server *grpc.Server) {
	customerv1.RegisterCustomerServiceServer(server, h)
}
