import { Injectable } from '@nestjs/common';
import { CleanerJobRepository } from '../../repository/job.repository';
import { UpdateJob } from '@app/common/domain/types/grpc.services.types/cleaner';
import { JobStatus } from '@app/common/infrastructure/prisma/generated/cleaner';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
import { KafkaTopics, SagaEvents } from '@app/common/domain';
import { from, Observable } from 'rxjs';

@Injectable()
export class DeclineJobService {
  constructor(
    private readonly jobRepository: CleanerJobRepository,
    private readonly prismaService: PrismaService<CleanerClient>,
    private readonly outboxRepository: CleanerOutboxRepository,
  ) {}
  public execute(payload: UpdateJob): Observable<void> {
    return from(this.declineJob(payload));
  }
  private async declineJob(payload: UpdateJob): Promise<void> {
    return this.prismaService.prisma.$transaction(async (tx) => {
      const declinedJob = await this.jobRepository.updateJob(
        payload,
        JobStatus.DECLINED,
        tx,
      );

      const activeJobsCount = await tx.cleanerJob.count({
        where: {
          orderId: declinedJob.orderId,
          status: JobStatus.INVITED,
        },
      });
      if (activeJobsCount === 0) {
        await this.outboxRepository.createEvent(
          {
            aggregateId: declinedJob.orderId,
            aggregateType: KafkaTopics.Events.CLEANER,
            payload: {
              type: SagaEvents.ALL_CLEANERS_DECLINED,
              payload: {
                orderId: declinedJob.orderId,
                cleanerId: declinedJob.cleanerProfileId,
              },
              comment: `All cleanrs declined invitation`,
            },
          },
          tx,
        );
      }
      await this.outboxRepository.createEvent(
        {
          aggregateId: declinedJob.orderId,
          aggregateType: KafkaTopics.CLEANER_DECLINE,
          payload: {
            type: SagaEvents.CLEANER_DECLINED,
            payload: {
              orderId: declinedJob.orderId,
              cleanerId: declinedJob.cleanerProfileId,
            },
            comment: `cleaner ${declinedJob.cleanerProfileId} declined invitation`,
          },
        },
        tx,
      );
    });
  }
}
