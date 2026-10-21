package customer_transport_grpc

import (
	"context"
	core_logger "pkg/core/logger"
	grpc_server_response "pkg/grpc/server/response"
	customerv1 "pkg/pb/customer/v1"
)

func (h *CustomerGRPCHandler) CreateCustomer(
	ctx context.Context,
	req *customerv1.CreateCustomerRequest,
) (*customerv1.Customer, error) {
	log := core_logger.FromContext(ctx)
	log.Debug("Invoke create customer")
	responseHandler := grpc_server_response.NewGRPCResponseHandler(log)
	log.Debug("Invoke create user")
	customerDomain := toDomainCustomer(req)
	customerDomain, err := h.customerService.CreateCustomer(ctx, customerDomain)
	if err != nil {
		return nil, responseHandler.ErrorResponse(err, "failed to create customer")
	}

	return toProtoCustomer(customerDomain), nil
}
