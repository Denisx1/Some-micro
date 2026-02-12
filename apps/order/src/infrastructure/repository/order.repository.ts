import { UpdateOrderType } from '@app/common/domain/types/grpc.services.types/order';
import { OrderClient, PrismaService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import {
  Order,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/order';
import { DatabaseError } from '@app/common/system';

@Injectable()
export class OrderRepository {
  constructor(private readonly prismaService: PrismaService<OrderClient>) {}
  async getOrder(id: number): Promise<Order | null> {
    try {
      const order = await this.prismaService.prisma.order.findFirst({
        where: { id },
      });
      return order ?? null;
    } catch (error) {
      throw new DatabaseError('OrderRepository.getOrder');
    }
  }
  async findUnique(
    orderId: number,
    cleanerId: number,
    tx?: Prisma.TransactionClient,
  ): Promise<Order | null> {
    try {
      const client = tx?.order ?? this.prismaService.prisma.order;
      const existind = await client.findUnique({
        where: { id: orderId, cleanerId },
      });
      return existind ?? null;
    } catch (error) {
      throw new DatabaseError('OrderRepository.createOrder');
    }
  }
  async createOrder(
    newOrder: Prisma.OrderCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Order> {
    try {
      return await tx.order.create({
        data: newOrder,
      });
    } catch (error) {
      throw new DatabaseError('OrderRepository.createOrder');
    }
  }
  async updateOrder(
    orderId: number,
    payload: UpdateOrderType,
    tx?: Prisma.TransactionClient,
  ): Promise<Order> {
    try {
      const client = tx?.order ?? this.prismaService.prisma.order;
      return await client.update({
        where: { id: orderId },
        data: payload,
      });
    } catch (error) {
      throw new DatabaseError('OrderRepository.updateOrder');
    }
  }
}
