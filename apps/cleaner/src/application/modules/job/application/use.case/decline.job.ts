// import { Injectable } from '@nestjs/common';
// import { CleanerJobRepository } from '../../repository/job.repository';
// import { UpdateJob } from '@app/common/domain/types/grpc.services.types/cleaner';
// import { JobStatus } from '@app/common/infrastructure/prisma/generated/cleaner';
// import { CleanerClient, PrismaService } from '@app/common/infrastructure';
// import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
// import { KafkaTopics } from '@app/common/domain';
// import { from, NotFoundError, Observable } from 'rxjs';
// import { SagaEvents } from '@app/common/domain/order/enum';

// @Injectable()
// export class DeclineJobService {
//   constructor(
//     private readonly jobRepository: CleanerJobRepository,
//     private readonly prismaService: PrismaService<CleanerClient>,
//     private readonly outboxRepository: CleanerOutboxRepository,
//   ) {}
//   public execute(payload: UpdateJob): Observable<void> {
//     return from(this.declineJob(payload));
//   }
//   private async declineJob(payload: UpdateJob): Promise<void> {
//     return this.prismaService.prisma.$transaction(async (tx) => {
//       const declined = await this.jobRepository.updateJob(
//         payload,
//         JobStatus.DECLINED,
//         tx,
//       );

//       if (!declined) throw new NotFoundError('Cleaner.job');

//       await this.outboxRepository.createEvent(
//         {
//           aggregateId: declined.orderId,
//           aggregateType: KafkaTopics.Events.CLEANER,
//           payload: {
//             type: SagaEvents.CleanerEvents.CLEANER_DECLINED,
//             payload: declined,
//             comment: `cleaner ${declined.cleanerProfileId} declined invitation`,
//           },
//         },
//         tx,
//       );
//     });
//   }
// }
