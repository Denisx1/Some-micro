import { Module } from "@nestjs/common";

import { PrismaModule } from "@app/common";
import { RedisModule } from "@app/common/infrastructure/redis/redis.module";
import { CustomerRepositories } from "./repository";
import { CustomerPrismaService } from "@app/customer/infrastructure/prisma/prisma.customer.service";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaClient as CustomerClient } from '@app/customer/infrastructure/prisma/generated';

@Module({
  imports: [PrismaModule.forRoot(CustomerClient), RedisModule, CqrsModule],
  controllers: [],
  providers: [...CustomerRepositories, CustomerPrismaService],
  exports: [
    RedisModule,
    CustomerPrismaService,
    ...CustomerRepositories,
    CqrsModule,
  ],
})
export class InfrastructureModule {}
