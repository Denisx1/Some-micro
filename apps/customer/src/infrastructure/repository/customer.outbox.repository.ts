import { DatabaseError } from "@app/common/system";
import { CustomerPrismaService } from "@app/customer/infrastructure/prisma/prisma.customer.service";
import { Injectable } from "@nestjs/common";
import {
  Prisma,
  CustomerOutbox,
} from "@app/customer/infrastructure/prisma/generated";

@Injectable()
export class CustomerOutboxRepository {
  constructor(private readonly prismaService: CustomerPrismaService) {}
  async createEvent(
    payload: Prisma.CustomerOutboxCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<CustomerOutbox> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.customerOutbox.create({ data: payload });
    } catch (error) {
      console.log(error);
      throw new DatabaseError("UserOutboxRepository.createEvent");
    }
  }
}
