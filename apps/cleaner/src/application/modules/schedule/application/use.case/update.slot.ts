// import { Injectable } from '@nestjs/common';
// import { ScheduleRespoitory } from '../../infrastructure/repository/schedule.repository';
// import { UpdateScheduleSlot } from '@app/common/domain/types/grpc.services.types/cleaner';
// import { from, map, Observable } from 'rxjs';
// import { CleanerScheduleSlot } from '@app/common/infrastructure/prisma/generated/cleaner';
// import { NotFoundError } from '@app/common/system';

// @Injectable()
// export class UpdateSlotService {
//   constructor(private readonly scheduleRespoitory: ScheduleRespoitory) {}
//   execute(payload: UpdateScheduleSlot): Observable<CleanerScheduleSlot> {
//     return this.updateSlot(payload);
//   }
//   private updateSlot(
//     payload: UpdateScheduleSlot,
//   ): Observable<CleanerScheduleSlot> {
//     return from(this.scheduleRespoitory.updateSlot(payload)).pipe(
//       map((slot: CleanerScheduleSlot) => {
//         if (!slot) throw new NotFoundError('Clener.schedule.slot');
//         return slot;
//       }),
//     );
//   }
// }
