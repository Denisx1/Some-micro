import { Module } from "@nestjs/common";
import { OutboxRepository } from "./repository/order.outbox.repository";
import { OrderRepository } from "./repository/order.repository";

import { ScheduleModule } from "@nestjs/schedule";
import { OrderCasheService } from "./cashe/order.cashe";
import { OrderInvitationRepository } from "./repository/order.invitation.repository";

import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@app/common/infrastructure/database/prisma.module";
import { PrismaClient as OrderClient, OrderPrismaService } from "@app/order";
import { RedisModule } from "@app/common/infrastructure/redis/redis.module";
@Module({
  imports: [
    CqrsModule,

    ScheduleModule.forRoot(),
    PrismaModule.forRoot(OrderClient),
    RedisModule,
  ],
  controllers: [],
  providers: [
    OrderRepository,
    OutboxRepository,
    OrderCasheService,
    OrderInvitationRepository,
    OrderPrismaService,
  ],
  exports: [
    OrderRepository,
    OutboxRepository,
    OrderCasheService,
    OrderInvitationRepository,
    OrderPrismaService,
    CqrsModule,
  ],
})
export class InfrastructureModule {}
