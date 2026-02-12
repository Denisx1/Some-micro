import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { AuthClient, PrismaService } from '@app/common/infrastructure';
import {
  AuthOutbox,
  AuthOutboxStatus,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/auth';
import { InfrastructureError } from '@app/common/system';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthOutboxRepository {
  constructor(private readonly prismaService: PrismaService<AuthClient>) {}

  async createEvent(
    payload: Prisma.AuthOutboxCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<AuthOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.authOutbox.create({ data: payload });
    } catch (error) {
      throw new InfrastructureError('Auth.outbox.repository.createEvent');
    }
  }
  async updateEvent(eventId: number, status: AuthOutboxStatus): Promise<void> {
    try {
      await this.prismaService.prisma.authOutbox.update({
        where: { id: eventId },
        data: { status },
      });
      return;
    } catch (error) {
      throw new InfrastructureError('Auth.outbox.repository.updateEvent');
    }
  }
  async findAllEvent(limit: number = 10): Promise<AuthOutbox[] | null> {
    try {
      const events = await this.prismaService.prisma.authOutbox.findMany({
        where: {
          status: AuthOutboxStatus.NEW,
        },
        orderBy: {
          createdAt: 'asc',
        },
        take: limit,
      });
      return events ?? null;
    } catch (error) {
      throw new InfrastructureError('Auth.outbox.repository.findAllEvent');
    }
  }
}
