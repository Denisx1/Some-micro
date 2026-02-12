import { OrderClient, PrismaService } from '@app/common/infrastructure';
import {
  OrderOutbox,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/order';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OutboxRepository {
  constructor(private readonly prismaService: PrismaService<OrderClient>) {}
  async createEvent(
    event: Prisma.OrderOutboxCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<void> {
    try {
      const client = tx ?? this.prismaService.prisma;
      await client.orderOutbox.create({
        data: event,
      });
    } catch (error) {
      throw new DatabaseError('orderOutboxRepository.createEvent');
    }
  }
  async getHistory(orderId: number): Promise<OrderOutbox[] | null> {
    try {
      return (
        (await this.prismaService.prisma.orderOutbox.findMany({
          where: { aggregateId: orderId },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError('orderOutboxRepository.createEvent');
    }
  }
}
