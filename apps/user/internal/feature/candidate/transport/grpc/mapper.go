package grpc_transport_candidate

import (
	userv1 "pkg/pb/user/v1"

	core_domain "github.com/Denisx1/Some-micro/apps/user/internal/core/domain"
)

func toDomainCandidate(
	req *userv1.CreateRequest,
	traceId string,
) *core_domain.Candidate {
	return core_domain.NewCandidateUninitialized(
		req.Email,
		req.UserName,
		req.Password,
		req.Role,
		traceId,
	)
}
func toProtoCandidate(candidateId string) *userv1.ActionResponse {
	return &userv1.ActionResponse{
		Id: candidateId,
	}
}
