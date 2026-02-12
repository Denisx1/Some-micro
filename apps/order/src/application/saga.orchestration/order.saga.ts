import { Injectable } from '@nestjs/common';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';
import { OrderEvent } from '../../../../../libs/common/src/domain/types/grpc.services.types/order';
import { KafkaTopics, SagaCommands, SagaEvents } from '@app/common/domain';
import { from, Observable } from 'rxjs';

@Injectable()
export class OrderSagaHandler {
  constructor(private readonly orderOutbox: OutboxRepository) {}
  handle(message: OrderEvent): Observable<void> {
    switch (message.type) {
      case SagaEvents.ORDER_CREATED:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.id,
            aggregateType: KafkaTopics.Commands.CLEANER,
            payload: {
              type: SagaCommands.INVITE_CLEANERS,
              payload: message.payload,
            },
          }),
        );
      case SagaEvents.CLEANER_BOUND_TO_ORDER:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.orderId,
            aggregateType: KafkaTopics.Commands.CHAT,
            payload: {
              type: SagaCommands.CREATE_CHAT,
              payload: message.payload,
              comment: `Create chat for order ${message.payload.orderId}`,
            },
          }),
        );
    }
  }
}
