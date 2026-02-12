import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CommandChatFacade } from './chat.facade';
import { CreateChatService } from './use.cases/command.use.case/create.chat';

@Module({
  imports: [InfrastructureModule],
  providers: [CommandChatFacade, CreateChatService],
  exports: [CommandChatFacade],
})
export class ApplicationModule {}
