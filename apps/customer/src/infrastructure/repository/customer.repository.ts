import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { CustomerClient, PrismaService } from '@app/common/infrastructure';
import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: PrismaService<CustomerClient>) {}

  async createCustomer(userId: number): Promise<void> {
    try {
      await this.prismaService.prisma.customer.upsert({
        where: { userId },
        update: {},
        create: { userId },
      });

      return;
    } catch (error) {
      throw new DatabaseError('CustomerRepository.createCustomer');
    }
  }
  async getCustomer(userId: number): Promise<Customer | null> {
    try {
      return (
        (await this.prismaService.prisma.customer.findFirst({
          where: { userId },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError('CustomerRepository.getCustomer');
    }
  }
}
