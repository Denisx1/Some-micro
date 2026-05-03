import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CommandChatFacade } from './chat.facade';
import { CreateChatService } from './use.cases/command.use.case/create.chat';
import { SendMessageService } from './use.cases/command.use.case/send.message';

@Module({
  imports: [InfrastructureModule],
  providers: [CommandChatFacade, CreateChatService, SendMessageService],
  exports: [CommandChatFacade],
})
export class ApplicationModule {}
