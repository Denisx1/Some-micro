// import { Injectable } from '@nestjs/common';
// import {
//   CreationSchedule,
//   GetSchedule,
//   ScheduleList,
//   UpdateScheduleSlot,
// } from '@app/common/domain/types/grpc.services.types/cleaner';

// import { CreateScheduleService } from './use.case/create.schedule';
// import { GetFullScheduleService } from './use.case/get.schedule';
// import { UpdateSlotService } from './use.case/update.slot';
// import { Observable } from 'rxjs';
// import {
//   CleanerScheduleDay,
//   CleanerScheduleSlot,
// } from '@app/common/infrastructure/prisma/generated/cleaner';

// @Injectable()
// export class ScheduleFacade {
//   constructor(
//     private readonly createScheduleService: CreateScheduleService,
//     private readonly updateSlotService: UpdateSlotService,
//     private readonly getFullScheduleService: GetFullScheduleService,
//   ) {}

//   getFullSchedule(payload: GetSchedule): Observable<ScheduleList> {
//     return this.getFullScheduleService.execute(payload);
//   }
//   updateSlot(payload: UpdateScheduleSlot): Observable<CleanerScheduleSlot> {
//     return this.updateSlotService.execute(payload);
//   }
//   createSchedule(payload: CreationSchedule): Observable<CleanerScheduleDay> {
//     return this.createScheduleService.execute(payload);
//   }
// }
