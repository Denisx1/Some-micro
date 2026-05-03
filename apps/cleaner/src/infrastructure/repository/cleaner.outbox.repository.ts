import {
  CleanerOutbox,
  Prisma,
} from "@app/cleaner/infrastructure/prisma/generated/client";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { DatabaseError } from "@app/common/system";

import { Injectable } from "@nestjs/common";

@Injectable()
export class CleanerOutboxRepository {
  constructor(private readonly prismaService: CleanerPrismaService) {}

  async createEvent(
    payload: Prisma.CleanerOutboxCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.cleanerOutbox.create({ data: payload });
    } catch (error) {
      throw new DatabaseError("cleaner outbox");
    }
  }
}
