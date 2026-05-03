import { ChatClient, PrismaService } from '@app/common/infrastructure';
import {
  ChatRoom,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/chat';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepository {
  constructor(private readonly prismaService: PrismaService<ChatClient>) {}
  async findUnique(
    orderId: number,
    tx?: Prisma.TransactionClient,
  ): Promise<ChatRoom | null> {
    try {
      const client = tx?.chatRoom ?? this.prismaService.prisma.chatRoom;
      const existingRoom = await client.findUnique({ where: { orderId } });
      return existingRoom ?? null;
    } catch (error) {
      throw new DatabaseError('Chat');
    }
  }
  async getChatById(
    roomId: string,
    tx?: Prisma.TransactionClient,
  ): Promise<ChatRoom | null> {
    try {
      const client = tx?.chatRoom ?? this.prismaService.prisma.chatRoom;
      const existingRoom = await client.findUnique({ where: { id: roomId } });
      return existingRoom ?? null;
    } catch (error) {
      throw new DatabaseError('Chat');
    }
  }

  async createRoom(
    newRoom: Prisma.ChatRoomCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<ChatRoom> {
    try {
      const client = tx?.chatRoom ?? this.prismaService.prisma.chatRoom;
      return await client.create({ data: newRoom });
    } catch (error) {
      throw new DatabaseError('Chat');
    }
  }
}
