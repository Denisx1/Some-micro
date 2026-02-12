import { Injectable } from '@nestjs/common';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';
import { CleanerEvent } from '@app/common/domain/types/grpc.services.types/order';
import { KafkaTopics, SagaCommands, SagaEvents } from '@app/common/domain';
import { from, Observable } from 'rxjs';

@Injectable()
export class CleanerSagaHandler {
  constructor(private readonly orderOutbox: OutboxRepository) {}
  handle(message: CleanerEvent): Observable<void> {
    switch (message.type) {
      case SagaEvents.CLEANERS_INVITED:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.orderId,
            aggregateType: KafkaTopics.Commands.ORDER,
            payload: {
              type: SagaCommands.INVITED_CLEANERS,
              payload: message.payload,
              comment: message.comment,
            },
          }),
        );
      case SagaEvents.CLEANER_NOT_FOUND:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.orderId,
            aggregateType: KafkaTopics.Commands.ORDER,
            payload: {
              type: SagaCommands.CLEANER_NOT_FOUND,
              payload: message.payload,
              comment: message.comment,
            },
          }),
        );
      case SagaEvents.CLEANER_ACCEPTED:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.orderId,
            aggregateType: KafkaTopics.Commands.ORDER,
            payload: {
              type: SagaCommands.CLEANER_ACCEPTED,
              payload: message.payload,
              comment: message.comment,
            },
          }),
        );
    }
  }
}
