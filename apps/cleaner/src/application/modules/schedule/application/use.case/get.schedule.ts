// import {
//   CleanerFullSchedule,
//   CleanerScheduleDay,
//   GetSchedule,
//   ScheduleList,
// } from '@app/common/domain/types/grpc.services.types/cleaner';

// import { Injectable } from '@nestjs/common';

// import { ScheduleRespoitory } from '../../infrastructure/repository/schedule.repository';

// import { from, map, Observable } from 'rxjs';
// import { NotFoundError } from '@app/common/system';

// @Injectable()
// export class GetFullScheduleService {
//   constructor(private readonly scheduleRespoitory: ScheduleRespoitory) {}

//   public execute(dto: GetSchedule): Observable<ScheduleList> {
//     return from(this.geSchedule({ cleanerProfileId: dto.cleanerProfileId }));
//   }
//   private geSchedule(payload: GetSchedule): Observable<ScheduleList> {
//     return from(
//       this.scheduleRespoitory.getFullSchrdule(payload.cleanerProfileId),
//     ).pipe(
//       map((scheduleList: CleanerScheduleDay[]) => {
//         if (!scheduleList) throw new NotFoundError('Cleaner.schedule');
//         return { schedule: scheduleList };
//       }),
//     );
//   }
// }
