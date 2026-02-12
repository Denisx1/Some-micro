import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { PrismaService, UserClient } from '@app/common/infrastructure';
import {
  Prisma,
  UserOutbox,
  UsertOutboxStatus,
} from '@app/common/infrastructure/prisma/generated/user';
import { DatabaseError } from '@app/common/system';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserOutboxRepository {
  constructor(private readonly prismaService: PrismaService<UserClient>) {}

  async createEvent(
    payload: Prisma.UserOutboxCreateInput,
    tx?: Prisma.TransactionClient,
  ): Promise<UserOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.userOutbox.create({ data: payload });
    } catch (error) {
      throw new DatabaseError('UserOutboxRepository.createEvent');
    }
  }
}
