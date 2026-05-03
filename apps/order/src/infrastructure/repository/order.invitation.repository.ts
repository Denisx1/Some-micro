import { DatabaseError } from "@app/common/system";
import { InvitationStatus, OrderInvitation, Prisma } from "@app/order";
import { Injectable } from "@nestjs/common";

import { OrderPrismaService } from "libs/order/src/infrastructure/prisma/prisma.order.service";

@Injectable()
export class OrderInvitationRepository {
  constructor(private readonly prismaService: OrderPrismaService) {}

  async createInvitation(
    invitations: Prisma.OrderInvitationCreateManyInput[],
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    try {
      const client = tx ?? this.prismaService.prisma;
      await client.orderInvitation.createMany({
        data: invitations,
      });
    } catch (error) {
      throw new DatabaseError("orderOutboxRepository.createInvitation");
    }
  }
  async getInvitation(
    orderId: number,
    tx?: Prisma.TransactionClient
  ): Promise<OrderInvitation[]> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return client.orderInvitation.findMany({
        where: {
          orderId: +orderId,
          status: { in: [InvitationStatus.FOUND] },
        },
      });
    } catch (error) {
      throw new DatabaseError("orderOutboxRepository.getInvitation");
    }
  }
  async updateInvitation(
    cleanerProfileId: number,
    payload: Prisma.OrderInvitationUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    try {
      const client = tx ?? this.prismaService.prisma;
      await client.orderInvitation.update({
        where: {
          orderId_cleanerProfileId: {
            orderId: +payload.orderId,
            cleanerProfileId,
          },
        },
        data: payload,
      });
    } catch (error) {
      throw new DatabaseError("orderOutboxRepository.updateInvitation");
    }
  }
}
