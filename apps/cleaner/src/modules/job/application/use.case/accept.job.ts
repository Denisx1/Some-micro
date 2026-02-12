import { Injectable } from '@nestjs/common';
import { CleanerJobRepository } from '../../repository/job.repository';
import { UpdateJob } from '@app/common/domain/types/grpc.services.types/cleaner';

import {
  CleanerActions,
  KafkaTopics,
  OrderActions,
  SagaEvents,
} from '@app/common/domain';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
import {
  CleanerJob,
  JobStatus,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { from, Observable } from 'rxjs';
import { AlreadyExistError, NotFoundError } from '@app/common/system';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Injectable()
export class AcceptJobService {
  constructor(
    private readonly prismaService: PrismaService<CleanerClient>,
    private readonly jobRepository: CleanerJobRepository,
    private readonly cleanerOutboxRepository: CleanerOutboxRepository,
    private readonly streamService: StreamService,
  ) {}
  execute(payload: UpdateJob): Observable<CleanerJob> {
    return from(this.assignCleaner(payload));
  }

  private async assignCleaner(payload: UpdateJob): Promise<CleanerJob> {
    return this.prismaService.prisma.$transaction(async (tx) => {
      const currentJob = await this.jobRepository.findOneJob(payload.jobId, tx);
      if (!currentJob || currentJob.status !== JobStatus.INVITED) {
        throw new AlreadyExistError('already accepted');
      }
      const alreadyAccepted = await this.jobRepository.findFirst(
        currentJob.orderId,
        tx,
      );
      if (alreadyAccepted) {
        throw new AlreadyExistError('already accepted');
      }
      const updated = await this.jobRepository.updateJob(
        payload,
        JobStatus.ACCEPTED,
        tx,
      );
      if (!updated) throw new NotFoundError('Cleaner.job');
      const accepted = await this.jobRepository.findOneJob(updated.id, tx);
      await this.jobRepository.updateJobs(accepted.orderId, tx);
      const allJobsInOrder = await tx.cleanerJob.findMany({
        where: { orderId: accepted.orderId },
      });
      await this.cleanerOutboxRepository.createEvent(
        {
          aggregateId: updated.orderId,
          aggregateType: KafkaTopics.Events.CLEANER,
          payload: {
            type: SagaEvents.CLEANER_ACCEPTED,
            payload: {
              cleanerId: accepted.cleanerProfileId,
              orderId: accepted.orderId,
            },
            comment: `Cleaner ${updated.cleanerProfileId} accept invitation`,
          },
        },
        tx,
      );
      this.streamService.publishJob(allJobsInOrder);
      return accepted;
    });
  }
}
