import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
import { Injectable } from '@nestjs/common';
import { MatchOrderData } from '@app/common/domain/types/grpc.services.types/order';
import { KafkaTopics, SagaEvents } from '@app/common/domain';
import { CleanerOutboxRepository } from 'apps/cleaner/src/infrastructure/repository.ts/cleaner.outbox.repository';
import { JobFacade } from '../../../job/application/job.facade';
import {
  defaultIfEmpty,
  EMPTY,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';
import { CleanerProfile } from '@app/common/infrastructure/prisma/generated/cleaner';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';

@Injectable()
export class GetAvailableCleanersService {
  constructor(
    private readonly profileRepo: ProfileRepository,
    private readonly cleanerOutboxRepository: CleanerOutboxRepository,
    private readonly jobFacade: JobFacade,
    private readonly prismaService: PrismaService<CleanerClient>,
  ) {}
  execute(payload: MatchOrderData): Observable<void> {
    return from(this.handleCleaners(payload)).pipe(
      // Вместо mergeMap(from) используем switchMap для ветвления
      switchMap((cleaners) => {
        // ПУТЬ А: Никого не нашли
        if (!cleaners || cleaners.length === 0) {
          // Возвращаем Observable, который просто завершается успешно.
          // Это даст NestJS понять, что всё ОК, и офсет сдвинется.
          return of(undefined);
        }

        // ПУТЬ Б: Клинеры есть
        return from(cleaners).pipe(
          map((profile: CleanerProfile) => ({
            cleanerProfileId: profile.id,
            orderId: payload.id,
          })),
          toArray(),
          mergeMap((allJobs) => this.jobFacade.createJob(allJobs)),
        );
      }),
      // Финальный штрих: превращаем любой результат в void
      map(() => void 0),
    );
  }

  private async handleCleaners(
    payload: MatchOrderData,
  ): Promise<CleanerProfile[]> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const availableCleaners = await this.profileRepo.getAvaulableCleaners(
        payload,
        tx,
      );

      if (availableCleaners.length === 0) {
        await this.cleanerOutboxRepository.createEvent(
          {
            aggregateId: payload.id,
            aggregateType: KafkaTopics.Events.CLEANER,
            payload: {
              type: SagaEvents.CLEANER_NOT_FOUND,
              payload: { orderId: payload.id },
              comment: `Cleaners not found`,
            },
          },
          tx,
        );
        return []; // Завершаем выполнение успешно
      }
      return availableCleaners;
    });
  }
}
