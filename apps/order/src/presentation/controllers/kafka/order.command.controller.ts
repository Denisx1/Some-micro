import { KafkaTopics } from '@app/common/domain';
import {
  ChatEvent,
  CleanerEvent,
  OrderEvent,
} from '@app/common/domain/types/grpc.services.types/order';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ChatSagaHandler } from 'apps/order/src/application/saga.orchestration/chat.saga.handler';
import { CleanerSagaHandler } from 'apps/order/src/application/saga.orchestration/cleaner.saga';
import { OrderSagaHandler } from 'apps/order/src/application/saga.orchestration/order.saga';
import { Observable } from 'rxjs';

@Controller()
export class OrderCommandController {
  constructor(
    private readonly orderSagaHandler: OrderSagaHandler,
    private readonly cleanerSagaHandler: CleanerSagaHandler,
    private readonly chatSagaHandler: ChatSagaHandler,
  ) {}

  @EventPattern(KafkaTopics.Events.ORDER)
  orderhandler(@Payload() message: OrderEvent): Observable<void> {
    return this.orderSagaHandler.handle(message);
  }

  @EventPattern(KafkaTopics.Events.CLEANER)
  cleanerHandler(@Payload() message: CleanerEvent): Observable<void> {
    return this.cleanerSagaHandler.handle(message);
  }

  @EventPattern(KafkaTopics.Events.CHAT)
  chatHandler(@Payload() message: ChatEvent): Observable<void> {
    return this.chatSagaHandler.handle(message);
  }
}
