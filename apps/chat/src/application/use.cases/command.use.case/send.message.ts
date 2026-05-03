import { SendMessage } from '@app/common/domain/types/grpc.services.types/chat';
import { ChatClient, PrismaService } from '@app/common/infrastructure';
import { ChatMessage } from '@app/common/infrastructure/prisma/generated/chat';
import { NotFoundError } from '@app/common/system';
import { Injectable } from '@nestjs/common';
import { ChatMessageRepository } from 'apps/chat/src/infrastructure/repositories/chat.message.repository';
import { ChatOutboxRepository } from 'apps/chat/src/infrastructure/repositories/chat.outbox.repository';
import { ChatRepository } from 'apps/chat/src/infrastructure/repositories/chat.repository';
import { from, Observable } from 'rxjs';
import { KafkaTopics } from '../../../../../../libs/common/src/domain/enums/kafka.topics';

@Injectable()
export class SendMessageService {
  constructor(
    private readonly prismaService: PrismaService<ChatClient>,
    private readonly chatMessageRepository: ChatMessageRepository,
    private readonly chatRepository: ChatRepository,
    private readonly chatOutboxRepository: ChatOutboxRepository,
  ) {}
  execute(payload: SendMessage): Observable<ChatMessage> {
    return this.handleTx(payload);
  }
  private handleTx(payload: SendMessage): Observable<ChatMessage> {
    return from(
      this.prismaService.prisma.$transaction(async (tx) => {
        const existingRoom = await this.chatRepository.getChatById(
          payload.roomId,
          tx,
        );
        if (!existingRoom) throw new NotFoundError('Chat room');
        const receiverId =
          payload.senderId === existingRoom.customerId
            ? existingRoom.cleanerId
            : existingRoom.customerId;
        const newMessage = await this.chatMessageRepository.createMessage(
          {
            senderId: payload.senderId,
            receiverId,
            roomId: payload.roomId,
            text: payload.text,
          },
          tx,
        );
        await this.chatOutboxRepository.createEvent(
          {
            aggregateId: existingRoom.orderId,
            aggregateType: KafkaTopics.Commands.NOTIFICATION,
            payload: {
              type: 'NEW_MESSAGE',
              status: 'Message_sent',
              subType: 'UI_UPDATE',
              message: `You have receied a message`,
              targetId: [receiverId],
              payload: {
                chat: {
                  roomId: payload.roomId,
                  message: {
                    text: newMessage.text,
                    createdAt: newMessage.createdAt.toString(),
                  },
                },
              },
            },
          },
          tx,
        );
        return newMessage;
      }),
    );
  }
}
