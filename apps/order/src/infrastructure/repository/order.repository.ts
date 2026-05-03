import { Injectable } from "@nestjs/common";
import { DatabaseError } from "@app/common/system";
import {
  Order,
  Prisma,
} from "libs/order/src/infrastructure/prisma/generated/client";
import { OrderPrismaService } from "libs/order/src";

@Injectable()
export class OrderRepository {
  constructor(private readonly prismaService: OrderPrismaService) {}
  async getOrder(
    id: number,
    tx?: Prisma.TransactionClient
  ): Promise<Order | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      const order = await client.order.findFirst({
        where: { id },
      });

      return order ?? null;
    } catch (error) {
      throw new DatabaseError("OrderRepository.getOrder");
    }
  }
  async findUnique(
    orderId: number,
    cleanerId: number,
    tx?: Prisma.TransactionClient
  ): Promise<Order | null> {
    try {
      const client = tx?.order ?? this.prismaService.prisma.order;
      const existind = await client.findUnique({
        where: { id: orderId, cleanerId },
      });
      return existind ?? null;
    } catch (error) {
      throw new DatabaseError("OrderRepository.createOrder");
    }
  }
  async createOrder(
    newOrder: Prisma.OrderCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<Order> {
    try {
      return await tx.order.create({
        data: newOrder,
      });
    } catch (error) {
      throw new DatabaseError("OrderRepository.createOrder");
    }
  }
  // async updateOrder(
  //   orderId: number,
  //   payload: IUpdateOrder,
  //   tx?: Prisma.TransactionClient
  // ): Promise<Order> {
  //   try {
  //     const client = tx?.order ?? this.prismaService.prisma.order;
  //     return await client.update({
  //       where: { id: orderId },
  //       data: payload,
  //     });
  //   } catch (error) {
  //     throw new DatabaseError("OrderRepository.updateOrder");
  //   }
  // }
}
