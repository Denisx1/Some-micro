package core_trace

import "context"

type TraceIDKey struct{}

const RequestIdHeader = "x-trace-id"

func GetTraceID(ctx context.Context) string {
	if traceID, ok := ctx.Value(TraceIDKey{}).(string); ok {
		return traceID
	}
	return ""
}
