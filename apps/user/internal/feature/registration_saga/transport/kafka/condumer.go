package saga_kafka_transport

type SagaConsumer struct {
	orchestrator SagaOrchestrator
}
type SagaOrchestrator interface{}

func NewSaga(orchestrator SagaOrchestrator) *SagaConsumer {
	return &SagaConsumer{
		orchestrator: orchestrator,
	}
}
