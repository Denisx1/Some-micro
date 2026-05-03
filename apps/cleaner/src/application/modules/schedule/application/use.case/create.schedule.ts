// import { CreationSchedule } from '@app/common/domain/types/grpc.services.types/cleaner';
// import { Injectable } from '@nestjs/common';
// import { ScheduleRespoitory } from '../../infrastructure/repository/schedule.repository';
// import { from, map, Observable } from 'rxjs';
// import { CleanerScheduleDay } from '@app/common/infrastructure/prisma/generated/cleaner';
// import { NotFoundError } from '@app/common/system';

// @Injectable()
// export class CreateScheduleService {
//   constructor(private readonly scheduleRespoitory: ScheduleRespoitory) {}

//   public execute(dto: CreationSchedule): Observable<CleanerScheduleDay> {
//     return from(this.scheduleRespoitory.createFullDay(dto)).pipe(
//       map((schedule: CleanerScheduleDay) => {
//         if (!schedule) throw new NotFoundError('Cleaner.schedule');
//         return schedule;
//       }),
//     );
//   }
// }
