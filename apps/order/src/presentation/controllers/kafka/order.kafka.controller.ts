import { KafkaTopics } from '@app/common/domain';
import { OrdertCommand } from '@app/common/domain/types/grpc.services.types/order';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderCommandFacade } from 'apps/order/src/application/order.command.facade';
import { Observable } from 'rxjs';

@Controller()
export class OrderKafkaController {
  constructor(private readonly orderCommandFacade: OrderCommandFacade) {}

  @EventPattern(KafkaTopics.Commands.ORDER)
  orderhandler(@Payload() message: OrdertCommand): Observable<void> {
    return this.orderCommandFacade.updateOrder(message);
  }
}
