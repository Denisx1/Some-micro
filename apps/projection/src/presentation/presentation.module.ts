import { Module } from '@nestjs/common';
import { ProjectionKafkaController } from './kafka/kafka.controlle';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  providers: [],
  controllers: [ProjectionKafkaController],
  exports: [],
})
export class PresentationModule {}
