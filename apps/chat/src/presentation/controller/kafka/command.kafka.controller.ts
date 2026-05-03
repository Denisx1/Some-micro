import { KafkaTopics } from '@app/common/domain';
import { ChatCommand } from '@app/common/domain/types/grpc.services.types/order';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CommandChatFacade } from 'apps/chat/src/application/chat.facade';
import { Observable } from 'rxjs';

@Controller()
export class ChatKafkaController {
  constructor(private readonly commandChatFacade: CommandChatFacade) {}

  @EventPattern(KafkaTopics.Commands.CHAT)
  orderhandler(@Payload() message: ChatCommand): Observable<void> {
    return this.commandChatFacade.handle(message);
  }
}
