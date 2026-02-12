import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { RoleStartup } from './role.startup';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), InfrastructureModule],
  controllers: [],
  providers: [RoleStartup],
  exports: [],
})
export class StartUpModule {}
