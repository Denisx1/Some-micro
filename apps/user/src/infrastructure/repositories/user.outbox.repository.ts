import { DatabaseError } from "@app/common/system";
import { UserPrismaService } from "@app/user";
import { Prisma, UserOutbox } from "@app/user/infrastructure/prisma/generated";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserOutboxRepository {
  constructor(private readonly prismaService: UserPrismaService) {}

  async createEvent(
    payload: Prisma.UserOutboxCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<UserOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.userOutbox.create({ data: payload });
    } catch (error) {
      console.log(error)
      throw new DatabaseError("UserOutboxRepository.createEvent");
    }
  }
}
