import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { OrderCommandController } from './controllers/kafka/order.command.controller';
import { InfrastructureModule } from '../infrastructure/infrastruncture.module';
import { OrderGrpcController } from './controllers/grpc/order.grpc.controller';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [OrderGrpcController, OrderCommandController],
})
export class PresentationModule {}
