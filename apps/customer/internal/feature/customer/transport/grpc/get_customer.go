package customer_transport_grpc

import (
	"context"
	core_logger "pkg/core/logger"
	grpc_server_response "pkg/grpc/server/response"
	customerv1 "pkg/pb/customer/v1"
)

func (h *CustomerGRPCHandler) GetCustomer(
	ctx context.Context,
	req *customerv1.GetCustomerRequest,
) (*customerv1.Customer, error) {
	log := core_logger.FromContext(ctx)
	log.Debug("Invoke get customer")
	responseHandler := grpc_server_response.NewGRPCResponseHandler(log)
	customerDomain, err := ToDomainFindSelector(req)
	if err != nil {
		return nil, responseHandler.ErrorResponse(err, "failed to get id or userId value")
	}
	customer, err := h.customerService.GetCustomer(ctx, customerDomain)
	if err != nil {
		return nil, responseHandler.ErrorResponse(err, "failed to create customer")
	}

	return toProtoCustomer(customer), nil
}
