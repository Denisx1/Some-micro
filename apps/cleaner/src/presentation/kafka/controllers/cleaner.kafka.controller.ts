import { KafkaTopics, SagaCommands, SagaEvents } from '@app/common/domain';
import { Controller, UseInterceptors, UsePipes } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';

import { GlobalValidationPipe } from '@app/common/system';
import {
  ChatEvent,
  CleanerCommand,
} from '@app/common/domain/types/grpc.services.types/order';
import { StreamService } from '../../../../../../libs/common/src/system/stream/stream.manager.service';

@Controller()
@UsePipes(GlobalValidationPipe)
@UseInterceptors(KafkaConsumerInterceptor)
export class CleanerKafkaController {
  constructor(private readonly srteamService: StreamService) {}

  @EventPattern(KafkaTopics.Commands.MATCH_USERS)
  handleChat(@Payload() message: CleanerCommand): Observable<void> {
    if (message.type === SagaCommands.MATCH_USERS) {
      const { cleanerId, customerId, roomId, orderId } = message.payload;
      this.srteamService.sendToUser(cleanerId, {
        type: 'CHAT_CREATED',
        data: { roomId, orderId, customerId },
      });
    }
    return;
  }
}
