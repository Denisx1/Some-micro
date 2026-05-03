import { Injectable } from '@nestjs/common';
import { ChatOutboxRepository } from '../../../infrastructure/repositories/chat.outbox.repository';
import { ChatRepository } from '../../../infrastructure/repositories/chat.repository';
import { ChatClient, PrismaService } from '@app/common/infrastructure';
import { AlreadyExistError } from '@app/common/system';
import { KafkaTopics, SagaEvents } from '@app/common/domain';
import { from, Observable } from 'rxjs';
import { Prisma } from '@app/common/infrastructure/prisma/generated/chat';

@Injectable()
export class CreateChatService {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly chatOutboxRepository: ChatOutboxRepository,
    private readonly prismaService: PrismaService<ChatClient>,
  ) {}
  execute(payload: Prisma.ChatRoomCreateInput): Observable<void> {
    return from(this.handleTransaction(payload));
  }
  private async handleTransaction(
    payload: Prisma.ChatRoomCreateInput,
  ): Promise<void> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const existingChat = await this.chatRepository.findUnique(
        payload.orderId,
      );

      if (existingChat) throw new AlreadyExistError('chat');

      const newChat = await this.chatRepository.createRoom(payload, tx);

      await this.chatOutboxRepository.createEvent(
        {
          aggregateId: payload.orderId,
          aggregateType: KafkaTopics.Events.CHAT,
          payload: {
            type: SagaEvents.CHAT_CREATED,
            payload: {
              roomId: newChat.id,
              orderId: newChat.orderId,
              cleanerId: newChat.cleanerId,
              customerId: newChat.customerId,
            },
            comment: `Chat for order: ${newChat.orderId} created`,
          },
        },
        tx,
      );
    });
  }
}
