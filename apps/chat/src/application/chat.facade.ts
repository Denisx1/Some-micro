import { Injectable } from '@nestjs/common';
import { CreateChatService } from './use.cases/command.use.case/create.chat';

import { Observable } from 'rxjs';
import { ChatCommand } from '@app/common/domain/types/grpc.services.types/order';
import { SagaCommands } from '@app/common/domain';

@Injectable()
export class CommandChatFacade {
  constructor(private readonly createChatService: CreateChatService) {}

  handle(payload: ChatCommand): Observable<void> {
    switch (payload.type) {
      case SagaCommands.CREATE_CHAT:
        return this.createChatService.execute(payload.payload);
    }
  }
}
