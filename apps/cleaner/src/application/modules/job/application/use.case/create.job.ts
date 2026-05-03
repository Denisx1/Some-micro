// import { Injectable } from '@nestjs/common';
// import { CleanerJobRepository } from '../../repository/job.repository';

// import { from, map, Observable } from 'rxjs';

// import { CreateJobType } from '@app/common/domain/types/grpc.services.types/cleaner';
// import { CleanerClient, PrismaService } from '@app/common/infrastructure';
// import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
// import { KafkaTopics } from '@app/common/domain';
// import { SagaEvents } from '@app/common/domain/order/enum';
// @Injectable()
// export class CreateJobService {
//   constructor(
//     private readonly jobRepo: CleanerJobRepository,
//     private readonly prismaService: PrismaService<CleanerClient>,
//     private readonly cleanerOutboxRepository: CleanerOutboxRepository,
//   ) {}

//   public execute(job: CreateJobType, customerId: number): Observable<void> {
//     return from(this.handleTx(job, customerId));
//   }
//   private handleTx(job: CreateJobType, customerId: number): Observable<void> {
//     return from(
//       this.prismaService.prisma.$transaction(async (tx) => {
//         const newJob = await this.jobRepo.createJob(job, tx);
//         await this.cleanerOutboxRepository.createEvent(
//           {
//             aggregateId: job.orderId,
//             aggregateType: KafkaTopics.Events.CLEANER,
//             payload: {
//               type: SagaEvents.CleanerEvents.CLEANER_INVITED,
//               payload: { ...newJob, customerId },
//             },
//           },
//           tx,
//         );
//       }),
//     );
//   }
// }
