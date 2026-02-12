import { Injectable } from '@nestjs/common';
import { CleanerJobRepository } from '../../repository/job.repository';
import { CreateJobType } from '@app/common/domain/types/grpc.services.types/cleaner';
import {
  CleanerClient,
  PrismaService,
  RedisService,
} from '@app/common/infrastructure';
import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
import { KafkaTopics, SagaEvents } from '@app/common/domain';
import {
  concatMap,
  delay,
  from,
  last,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { StreamService } from '@app/common/system/stream/stream.manager.service';
import { CleanerJob } from '@app/common/infrastructure/prisma/generated/cleaner';
@Injectable()
export class CreateJobService {
  constructor(
    private readonly jobRepo: CleanerJobRepository,
    private readonly outboxRepository: CleanerOutboxRepository,
    private readonly prismaService: PrismaService<CleanerClient>,
    private readonly streamService: StreamService,
    private readonly redisService: RedisService,
  ) {}
  public execute(jobs: CreateJobType[]): Observable<void> {
    return from(this.createJobInDatabase(jobs)).pipe(
      mergeMap((createdJobs) => from(createdJobs)),
      concatMap((job) => this.notifyCleaner(job)),
      // Завершаем поток, когда все уведомления обработаны
      last(),
      map(() => undefined),
    );
  }
  private notifyCleaner(cleanerJob: CleanerJob): Observable<void> {
    const cleanerId = cleanerJob.cleanerProfileId;

    // Проверяем онлайн статус через StreamManager
    const isDelivered = this.streamService.sendToUser(cleanerId, {
      type: 'UPDATE_JOB_COUNTER',
      summaryData: { missedInvitesCount: 1 },
    });
    if (isDelivered) {
      // Если доставили сигнал, шлем данные вдогонку для фонового кэша
      return of(null).pipe(
        delay(1000),
        tap(() => {
          this.streamService.sendToUser(cleanerId, {
            type: 'JOB_DATA_SYNC',
            jobData: cleanerJob,
          });
        }),
      );
    }
    const key = `invites_count:cleaner:${cleanerId}`;
    return from(this.redisService.incr(key)).pipe(
      switchMap(() => from(this.redisService.expire(key, 259200))), // TTL 3 дня
      map(() => undefined),
    );
  }
  private async createJobInDatabase(
    jobs: CreateJobType[],
  ): Promise<CleanerJob[]> {
    const orderId = jobs.map((item) => item.orderId)[0];

    return await this.prismaService.prisma.$transaction(async (tx) => {
      const newJobs = await this.jobRepo.createJob(jobs);
      const cleanerIds = newJobs.map((job) => job.cleanerProfileId);
      await this.outboxRepository.createEvent(
        {
          aggregateId: orderId,
          aggregateType: KafkaTopics.Events.CLEANER,
          payload: {
            type: SagaEvents.CLEANERS_INVITED,
            payload: {
              cleanerIds,
              orderId,
            },
            comment: `Cleaners invited`,
          },
        },
        tx,
      );
      return newJobs;
    });
  }
}
