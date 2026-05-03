// import { Injectable } from '@nestjs/common';
// import { CleanerJobRepository } from '../../repository/job.repository';
// import { UpdateJob } from '@app/common/domain/types/grpc.services.types/cleaner';

// import { KafkaTopics } from '@app/common/domain';
// import { CleanerClient, PrismaService } from '@app/common/infrastructure';
// import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
// import {
//   CleanerJob,
//   JobStatus,
// } from '@app/common/infrastructure/prisma/generated/cleaner';
// import { from, map, Observable, of } from 'rxjs';
// import { AlreadyExistError, NotFoundError } from '@app/common/system';
// import { StreamService } from '@app/common/system/stream/stream.manager.service';
// import { CleanerEvent } from '../../../../../../../../libs/common/src/domain/types/grpc.services.types/order';
// import { SagaEvents } from '@app/common/domain/order/enum';

// @Injectable()
// export class AcceptJobService {
//   constructor(
//     private readonly prismaService: PrismaService<CleanerClient>,
//     private readonly jobRepository: CleanerJobRepository,
//     private readonly cleanerOutboxRepository: CleanerOutboxRepository,
//     private readonly streamService: StreamService,
//   ) {}
//   execute(payload: UpdateJob): Observable<void> {
//     return from(this.assignCleaner(payload));
//   }

//   private assignCleaner(payload: UpdateJob): Observable<void> {
//     return from(
//       this.prismaService.prisma.$transaction(async (tx) => {
//         const currentJob = await this.jobRepository.findOneJob(
//           payload.jobId,
//           tx,
//         );
//         if (!currentJob || currentJob.status !== JobStatus.INVITED) {
//           throw new AlreadyExistError('already accepted');
//         }
//         const accepted = await this.jobRepository.updateJob(
//           payload,
//           JobStatus.ACCEPTED,
//           tx,
//         );
//         if (!accepted) throw new NotFoundError('Cleaner.job');

//         await this.cleanerOutboxRepository.createEvent(
//           {
//             aggregateId: accepted.orderId,
//             aggregateType: KafkaTopics.Events.CLEANER,
//             payload: {
//               type: SagaEvents.CleanerEvents.CLEANER_ACCEPTED,
//               payload: accepted,
//               comment: `Cleaner ${accepted.cleanerProfileId} accept invitation`,
//             },
//           },
//           tx,
//         );
//         return undefined;
//       }),
//     );
//   }
// }
