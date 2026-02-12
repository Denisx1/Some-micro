import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AdminStartup } from './admin.startup';

@Module({
  imports: [ScheduleModule.forRoot(), InfrastructureModule],
  controllers: [],
  providers: [AdminStartup],
})
export class StartUpModule {}
