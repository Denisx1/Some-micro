package grpc_transport_candidate

import (
	"context"
	core_logger "pkg/core/logger"
	core_trace "pkg/core/trace"
	userv1 "pkg/pb/user/v1"
)

func (h *CandidateGRPCHandler) CreateCandidate(
	ctx context.Context,
	req *userv1.CreateRequest,
) (*userv1.ActionResponse, error) {

	log := core_logger.FromContext(ctx)

	log.Debug("Invoke create candidate")
	traceID := core_trace.GetTraceID(ctx)
	candidateDomain := toDomainCandidate(req, traceID)

	candidateID, err := h.candidateService.CreateCandidate(ctx, candidateDomain, log)
	if err != nil {
		return nil, h.response.Error(err, "failed registed")
	}

	return toProtoCandidate(candidateID), nil
}
