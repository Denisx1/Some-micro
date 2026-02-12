import {
  CreateCustomerType,
  KafkaTopics,
  SagaCommands,
  SagaEvents,
} from '@app/common/domain';
import { Controller, UseInterceptors, UsePipes } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CustomerFacade } from '../../application/customer.facade';
import { Observable } from 'rxjs';
import { GlobalValidationPipe } from '@app/common/system';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';
import {
  ChatEvent,
  CustomerCommand,
} from '@app/common/domain/types/grpc.services.types/order';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Controller()
@UsePipes(GlobalValidationPipe)
@UseInterceptors(KafkaConsumerInterceptor)
export class CutomerKafkaController {
  constructor(
    private readonly customerFacade: CustomerFacade,
    private readonly streamService: StreamService,
  ) {}

  @EventPattern(KafkaTopics.Commands.CUSTOMER)
  createCustomer(@Payload() message: CustomerCommand): Observable<void> {
    if (message.type === SagaCommands.CREATE_CUSTOMER) {
      return this.customerFacade.createCustomer(message.payload);
    }
  }

  @EventPattern(KafkaTopics.Commands.MATCH_USERS)
  handleChat(@Payload() message: CustomerCommand): Observable<void> {
    if (message.type === SagaCommands.MATCH_USERS) {
      return this.customerFacade.handleChat(message.payload);
    }
    //   const { cleanerId, roomId, orderId, customerId } = message.payload;
    //   const eventPayload = {
    //     type: 'CHAT_CREATED',
    //     data: {
    //       roomId,
    //       orderId,
    //       cleanerId,
    //     },
    //   };
    //   const isDelivered = this.streamService.sendToUser(
    //     cleanerId,
    //     eventPayload,
    //   );

    //   if(!isDelivered){

    //   }
    //   console.log(`[Kafka] Sending to Customer ${customerId}: Room ${roomId}`);

    //   this.streamService.sendToUser(customerId, {
    //     type: 'CHAT_CREATED',
    //     data: { roomId, orderId, cleanerId },
    //   });
    //   return;
    // }
  }
}
