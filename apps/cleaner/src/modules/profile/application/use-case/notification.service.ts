import {
  CleanerClient,
  PrismaService,
  RedisService,
} from '@app/common/infrastructure';
import { JobFacade } from '../../../job/application/job.facade';
import { Injectable } from '@nestjs/common';
import { StreamService } from '@app/common/system/stream/stream.manager.service';
import {
  concatMap,
  filter,
  finalize,
  from,
  last,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { JobStatus } from '@app/common/infrastructure/prisma/generated/cleaner';
import { ServiceStreamResponce } from '@app/common/domain/types/grpc.services.types/cleaner';

@Injectable()
export class CleaneNotificationService {
  constructor(
    private readonly jobFacade: JobFacade,
    private readonly prismaService: PrismaService<CleanerClient>,
    private readonly streamService: StreamService,
    private readonly redisService: RedisService,
  ) {}

  getCleanerStream(cleanerId: number): Observable<ServiceStreamResponce> {
    const personalStream$ = new Subject<any>();
    this.streamService.registerUser(cleanerId, personalStream$);

    // Объединяем три потока в один "провод"
    return merge(
      this.getSummary(cleanerId),
      this.getLiveEvents(personalStream$),
      // this.getPersonalNotifications(personalStream$),
    ).pipe(
      // Когда клиент отключается — удаляем его из Map, чтобы не было утечки памяти!
      finalize(() => this.streamService.unregisterUser(cleanerId)),
    );
  }

  private getLiveEvents(
    personalStream$: Subject<any>,
  ): Observable<ServiceStreamResponce> {
    return personalStream$.pipe(
      map((event) => {
        // Здесь мы обрабатываем и "тяжелые" данные, и "сигналы"
        if (event.type === 'UPDATE_JOB_COUNTER') {
          console.log(event);
          return {
            type: event.type,
            summaryData: event.summaryData.missedInvitesCount,
          }; // Просто пробрасываем как есть (там уже summaryData)
        }

        if (event.type === 'JOB_DATA_SYNC') {
          return {
            type: 'JOB_DATA_SYNC', // Фоновое наполнение
            jobData: event.jobData,
          };
        }

        // Старая логика для чатов и новых работ
        if (event.type === 'CHAT_CREATED') {
          return { type: 'CHAT_CREATED', chatData: event.data };
        }

        if (event.type === 'NEW_JOB') {
          return { type: 'NEW_JOB', jobData: event.data };
        }

        return null;
      }),
      filter((val) => !!val), // Убираем пустые события
    );
  }
  private getjobs(profileId: number): Observable<ServiceStreamResponce> {
    return this.jobFacade.getJobs({ cleanerProfileId: profileId }).pipe(
      filter((jobValue) => !!jobValue),
      map((jobValue) => ({
        type: jobValue.status === JobStatus.INVITED ? 'NEW_JOB' : 'JOB',
        jobData: jobValue,
      })),
    );
  }

  private getSummary(cleanerId: number): Observable<ServiceStreamResponce> {
    const inviteKey = `invites_count:cleaner:${cleanerId}`;
    let localCount = 0;
    return from(this.redisService.get(inviteKey)).pipe(
      switchMap((count) => {
        if (count !== null) {
          return of({
            type: 'UPDATE_COUNTER',
            summaryData: count,
          });
        }
        return this.jobFacade
          .getJobs({ cleanerProfileId: cleanerId }, JobStatus.INVITED)
          .pipe(
            filter((jobValue) => !!jobValue),
            tap(() => {
              // Инкрементируем при каждом объекте, который проходит через поток
              localCount++;
            }),
            map((jobValue) => ({
              type: jobValue.status === JobStatus.INVITED ? 'NEW_JOB' : 'JOB',
              jobData: jobValue,
            })),
            finalize(() => {
              if (localCount > 0) {
                const inviteKey = `invites_count:cleaner:${cleanerId}`;
                // Записываем итоговое число в Redis один раз
                this.redisService.set(inviteKey, localCount.toString(), 259200);
                console.log(
                  `Sync complete. Redis updated with total: ${localCount}`,
                );
              }
            }),
          );
      }),
    );
  }

  // private getPersonalNotifications(personalStream$: Subject<any>) {
  //   return personalStream$.pipe(
  //     tap((event) => console.log(event)),
  //     map((event) => event),
  //   );
  // }
}
