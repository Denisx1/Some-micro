import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { OrderKafkaController } from './controller/kafka/command.kafka.controller';

@Module({
  imports: [ApplicationModule],
  providers: [],
  controllers: [OrderKafkaController],
  exports: [],
})
export class PresentationModule {}
