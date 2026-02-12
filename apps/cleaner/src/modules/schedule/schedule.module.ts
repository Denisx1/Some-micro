import { Module } from '@nestjs/common';
import { ScheduleFacade } from './application/schedule.facade';

import { CreateScheduleService } from './application/use.case/create.schedule';
import { ScheduleRespoitory } from './infrastructure/repository/schedule.repository';
import { GetFullScheduleService } from './application/use.case/get.schedule';

import { UpdateSlotService } from './application/use.case/update.slot';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    ScheduleFacade,
    CreateScheduleService,
    ScheduleRespoitory,
    GetFullScheduleService,
    UpdateSlotService,
  ],
  exports: [ScheduleFacade],
})
export class ScheduleCleanerModule {}
