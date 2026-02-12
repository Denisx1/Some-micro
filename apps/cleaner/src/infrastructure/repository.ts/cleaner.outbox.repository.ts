import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import {
  CleanerOutbox,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { DatabaseError } from '@app/common/system';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CleanerOutboxRepository {
  constructor(private readonly prismaService: PrismaService<CleanerClient>) {}

  async createEvent(
    payload: Prisma.CleanerOutboxCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<CleanerOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.cleanerOutbox.create({ data: payload });
    } catch (error) {
      throw new DatabaseError('cleaner outbox');
    }
  }
}
