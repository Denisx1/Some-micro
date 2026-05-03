import { GetCustomerRequest } from "@app/common";
import { DatabaseError } from "@app/common/system";
import {
  Customer,
  Prisma,
} from "@app/customer/infrastructure/prisma/generated";
import { CustomerPrismaService } from "@app/customer/infrastructure/prisma/prisma.customer.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: CustomerPrismaService) {}

  async createCustomer(
    userId: number,
    tx?: Prisma.TransactionClient
  ): Promise<Customer> {
    try {
      const client = tx.customer ?? this.prismaService.prisma.customer;
      return await client.upsert({
        where: { userId },
        update: {},
        create: { userId },
      });

      return;
    } catch (error) {
      throw new DatabaseError("CustomerRepository.createCustomer");
    }
  }
  async getCustomer(request: GetCustomerRequest): Promise<Customer | null> {
    try {
      return (
        (await this.prismaService.prisma.customer.findFirst({
          where: request,
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError("CustomerRepository.getCustomer");
    }
  }
}
