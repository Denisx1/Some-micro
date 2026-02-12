import { ChatClient, PrismaService } from '@app/common/infrastructure';
import { Prisma } from '@app/common/infrastructure/prisma/generated/chat';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatOutboxRepository {
  constructor(private readonly prismaService: PrismaService<ChatClient>) {}
  async createEvent(
    payload: Prisma.ChatOutboxCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<void> {
    try {
      const client = tx?.chatOutbox ?? this.prismaService.prisma.chatOutbox;
      await client.create({ data: payload });
      return;
    } catch (error) {
      throw new DatabaseError('Chat outbox');
    }
  }
}
