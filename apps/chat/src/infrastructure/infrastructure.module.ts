import { ChatClient, PrismaModule } from '@app/common/infrastructure';
import { Module } from '@nestjs/common';
import { ChatOutboxRepository } from './repositories/chat.outbox.repository';
import { ChatMessageRepository } from './repositories/chat.message.repository';
import { ChatRepository } from './repositories/chat.repository';

@Module({
  imports: [PrismaModule.forRoot(ChatClient)],
  providers: [ChatRepository, ChatMessageRepository, ChatOutboxRepository],
  exports: [ChatRepository, ChatMessageRepository, ChatOutboxRepository],
})
export class InfrastructureModule {}
