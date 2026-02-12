import { Module } from '@nestjs/common';
import { CleanerGrpcController } from './grpc/cleaner.controller';
import {
  JobModule,
  ProfileModule,
  ReviewModule,
  ScheduleCleanerModule,
} from '../modules';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CleanerCommandController } from './kafka/controllers/cleaner.command.controller';
import { CleanerKafkaController } from './kafka/controllers/cleaner.kafka.controller';

@Module({
  imports: [
    JobModule,
    ProfileModule,
    ScheduleCleanerModule,
    ReviewModule,
    InfrastructureModule,
  ],
  controllers: [
    CleanerGrpcController,
    CleanerCommandController,
    CleanerKafkaController,
  ],
  providers: [],
  exports: [],
})
export class PresentationModule {}
