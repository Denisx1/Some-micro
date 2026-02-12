import { Module } from '@nestjs/common';
import { OrderGrpcController } from './controllers';
import { ApplicationModule } from '../application/application.module';
import { OrderCommandController } from './controllers/kafka/order.command.controller';
import { OrderKafkaController } from './controllers/kafka/order.kafka.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [
    OrderGrpcController,
    OrderCommandController,
    OrderKafkaController,
  ],
})
export class PresentationModule {}
