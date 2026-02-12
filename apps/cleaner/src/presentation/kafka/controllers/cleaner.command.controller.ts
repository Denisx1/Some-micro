import { KafkaTopics, SagaCommands } from '@app/common/domain';
import { Controller, UseInterceptors, UsePipes } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';

import { GlobalValidationPipe } from '@app/common/system';
import { CleanerCommand } from '@app/common/domain/types/grpc.services.types/order';
import { ProfileCommandDispatcherFacade } from 'apps/cleaner/src/modules/profile/application/profile.command.dispatcher';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Controller()
@UsePipes(GlobalValidationPipe)
@UseInterceptors(KafkaConsumerInterceptor)
export class CleanerCommandController {
  constructor(
    private readonly profileCommandDispatcherFacade: ProfileCommandDispatcherFacade,
    private readonly srteamService: StreamService,
  ) {}

  @EventPattern(KafkaTopics.Commands.CLEANER)
  handleAssignCleaner(@Payload() message: CleanerCommand): Observable<void> {
    return this.profileCommandDispatcherFacade.dispatch(message);
  }

  @EventPattern(KafkaTopics.Commands.MATCH_USERS)
  handleChat(@Payload() message: CleanerCommand): Observable<void> {
    if (message.type === SagaCommands.MATCH_USERS) {
      console.log(message);
      const { cleanerId, customerId, roomId, orderId } = message.payload;
      this.srteamService.sendToUser(cleanerId, {
        type: 'CHAT_CREATED',
        data: { roomId, orderId, customerId, cleanerId },
      });
    }
    return;
  }
}
