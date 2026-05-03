import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { ChatKafkaController } from './controller/kafka/command.kafka.controller';
import { ChatGrpcController } from './controller/grpc/chat.grpc.controller';

@Module({
  imports: [ApplicationModule],
  providers: [],
  controllers: [ChatKafkaController, ChatGrpcController],
  exports: [],
})
export class PresentationModule {}
