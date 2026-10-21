package grpc_transport_candidate

import (
	grpc_server_response "pkg/grpc/server/response"
	userv1 "pkg/pb/user/v1"

	"github.com/Denisx1/Some-micro/apps/user/internal/feature/candidate/transport"
)

type CandidateGRPCHandler struct {
	candidateService transport.CandidateService
	response         *grpc_server_response.GRPCResponseHandler
	userv1.UnimplementedCandidateServiceServer
}

func NewUserGRPCHandler(
	candidateService transport.CandidateService,
	response *grpc_server_response.GRPCResponseHandler,
) *CandidateGRPCHandler {
	return &CandidateGRPCHandler{
		candidateService: candidateService,
		response:         response,
	}
}
