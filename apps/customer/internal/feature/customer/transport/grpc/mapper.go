package customer_transport_grpc

import (
	core_domain "customer/internal/core/domain"
	"fmt"
	customerv1 "pkg/pb/customer/v1"

	"github.com/google/uuid"
)

func toDomainCustomer(req *customerv1.CreateCustomerRequest) core_domain.Customer {
	return core_domain.NewCustomerUninitialized(
		req.UserId,
		req.FirstName,
		req.LastName,
	)
}
func toProtoCustomer(c core_domain.Customer) *customerv1.Customer {
	return &customerv1.Customer{
		Id:        c.ID,
		UserId:    c.UserId,
		Version:   int32(c.Version),
		FirstName: c.FirstName,
		LastName:  c.LastName,
	}
}

func ToDomainFindSelector(
	req *customerv1.GetCustomerRequest,
) (core_domain.FindSelector, error) {
	var sel core_domain.FindSelector

	// Если в gRPC передали id
	if req.GetId() != "" {
		id, err := uuid.Parse(req.GetId())
		if err != nil {
			return core_domain.FindSelector{}, fmt.Errorf("invalid customer id: %w", err)
		}
		sel.ID = &id
	}

	// Если в gRPC передали user_id
	if req.GetUserId() != "" {
		userID, err := uuid.Parse(req.GetUserId())
		if err != nil {
			return core_domain.FindSelector{}, fmt.Errorf("invalid user_id: %w", err)
		}
		sel.UserID = &userID
	}

	// Проверяем валидность доменной структуры
	if err := sel.Validate(); err != nil {
		return core_domain.FindSelector{}, err
	}

	return sel, nil
}
