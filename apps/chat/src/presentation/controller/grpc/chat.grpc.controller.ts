import { SendMessage } from '@app/common/domain/types/grpc.services.types/chat';
import { ChatMessage } from '@app/common/infrastructure/prisma/generated/chat';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandChatFacade } from 'apps/chat/src/application/chat.facade';
import { Observable } from 'rxjs';

@Controller()
export class ChatGrpcController {
  constructor(private readonly commandChatFacade: CommandChatFacade) {}

  @GrpcMethod('ChatService', 'SendMessage')
  sendMessage(request: SendMessage): Observable<ChatMessage> {
    return this.commandChatFacade.sendMessage(request);
  }
}
