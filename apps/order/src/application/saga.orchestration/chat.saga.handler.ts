import { Injectable } from '@nestjs/common';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';
import { ChatEvent } from '@app/common/domain/types/grpc.services.types/order';
import { KafkaTopics, SagaCommands, SagaEvents } from '@app/common/domain';
import { from, Observable } from 'rxjs';

@Injectable()
export class ChatSagaHandler {
  constructor(private readonly orderOutbox: OutboxRepository) {}
  handle(message: ChatEvent): Observable<void> {
    switch (message.type) {
      case SagaEvents.CHAT_CREATED:
        return from(
          this.orderOutbox.createEvent({
            aggregateId: message.payload.orderId,
            aggregateType: KafkaTopics.Commands.MATCH_USERS,
            payload: {
              type: SagaCommands.MATCH_USERS,
              payload: {
                orderId: message.payload.orderId,
                roomId: message.payload.roomId,
                cleanerId: message.payload.cleanerId,
                customerId: message.payload.customerId,
              },
              comment: 'Order.created',
            },
          }),
        );
    }
  }
}
