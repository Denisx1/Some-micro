import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { CustomerGrpcController } from './grpc/customer.controller';
import { CutomerKafkaController } from './kafka/kafka.controller';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [CustomerGrpcController, CutomerKafkaController],
})
export class PresentationModule {}
