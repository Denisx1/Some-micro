import { DatabaseError } from "@app/common/system";
import { Injectable } from "@nestjs/common";
import {
  OrderOutbox,
  Prisma,
} from "libs/order/src/infrastructure/prisma/generated/client";
import { OrderPrismaService } from "libs/order/src/infrastructure/prisma/prisma.order.service";

@Injectable()
export class OutboxRepository {
  constructor(private readonly prismaService: OrderPrismaService) {}
  async createEvent(
    event: Prisma.OrderOutboxCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    try {
      const client = tx ?? this.prismaService.prisma;
      await client.orderOutbox.create({
        data: event,
      });
    } catch (error) {
      throw new DatabaseError("orderOutboxRepository.createEvent");
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
      throw new DatabaseError("orderOutboxRepository.createEvent");
    }
  }
  async *getHistoryStream(orderId: number) {
    let cursor: string | undefined;
    while (true) {
      const batch: OrderOutbox[] =
        await this.prismaService.prisma.orderOutbox.findMany({
          where: { aggregateId: orderId },
          take: 2, // Берем по 100 штук за раз
          skip: cursor ? 1 : 0,
          cursor: cursor ? { id: cursor } : undefined,
          orderBy: { id: "asc" },
        });

      if (batch.length === 0) break;

      for (const job of batch) {
        yield job; // <--- ВЫБРАСЫВАЕМ ПО ОДНОМУ
      }

      cursor = batch[batch.length - 1].id;
    }
  }
}
