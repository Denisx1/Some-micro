import { SendMessage } from '@app/common/domain/types/grpc.services.types/chat';
import { ChatClient, PrismaService } from '@app/common/infrastructure';
import { ChatMessage } from '@app/common/infrastructure/prisma/generated/chat';
import { Prisma } from '@app/common/infrastructure/prisma/generated/chat';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatMessageRepository {
  constructor(private readonly prismaService: PrismaService<ChatClient>) {}
  async createMessage(
    message: Prisma.ChatMessageCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<ChatMessage> {
    try {
      const client = tx.chatMessage ?? this.prismaService.prisma.chatMessage;
      return await client.create({ data: message });
    } catch (error) {
      throw new DatabaseError('ChatMessage');
    }
  }
}
