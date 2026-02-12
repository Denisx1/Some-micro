import { Module } from '@nestjs/common';
import { OutboxRepository } from './repository/order.outbox.repository';
import { OrderRepository } from './repository/order.repository';
import { OrderClient, PrismaModule } from '@app/common/infrastructure';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), PrismaModule.forRoot(OrderClient)],
  controllers: [],
  providers: [OrderRepository, OutboxRepository],
  exports: [OrderRepository, OutboxRepository],
})
export class InfrastructureModule {}
