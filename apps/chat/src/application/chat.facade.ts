import { Injectable } from '@nestjs/common';
import { CreateChatService } from './use.cases/command.use.case/create.chat';

import { Observable } from 'rxjs';
import { ChatCommand } from '@app/common/domain/types/grpc.services.types/order';
import { SagaCommands } from '@app/common/domain';
import { SendMessage } from '@app/common/domain/types/grpc.services.types/chat';
import { ChatMessage } from '@app/common/infrastructure/prisma/generated/chat';
import { SendMessageService } from './use.cases/command.use.case/send.message';

@Injectable()
export class CommandChatFacade {
  constructor(
    private readonly createChatService: CreateChatService,
    private readonly sendMessageService: SendMessageService,
  ) {}

  handle(payload: ChatCommand): Observable<void> {
    switch (payload.type) {
      case SagaCommands.CREATE_CHAT:
        return this.createChatService.execute(payload.payload);
    }
  }
  sendMessage(payload: SendMessage): Observable<ChatMessage> {
    return this.sendMessageService.execute(payload);
  }
}
