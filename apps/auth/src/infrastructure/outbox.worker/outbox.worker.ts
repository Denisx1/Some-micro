import { Injectable } from '@nestjs/common';
import { AuthKafkaService } from '../providers';
import { AuthOutboxRepository } from '../repositories/auth.outbox.repository';
import { Interval } from '@nestjs/schedule';
import {
  catchError,
  defaultIfEmpty,
  filter,
  from,
  lastValueFrom,
  mergeMap,
} from 'rxjs';
import {
  AuthOutbox,
  AuthOutboxStatus,
} from '@app/common/infrastructure/prisma/generated/auth';

@Injectable()
export class AuthOutboxWorker {
  constructor(
    private readonly authKafkaService: AuthKafkaService,
    private readonly authOutboxRepository: AuthOutboxRepository,
  ) {}

  @Interval(5_000)
  async handleNewEvents(): Promise<void> {
    return await lastValueFrom(
      from(this.authOutboxRepository.findAllEvent())
        .pipe(
          filter((events) => !!events && events.length > 0),
          mergeMap((events) => from(events)),
          mergeMap((event: AuthOutbox) => {
            return this.authKafkaService
              .kafkaEmit(event.topic, event.payload)
              .pipe(
                mergeMap(() => {
                  return from(
                    this.authOutboxRepository.updateEvent(
                      event.id,
                      AuthOutboxStatus.SENT,
                    ),
                  );
                }),
                catchError(() => {
                  return from(
                    this.authOutboxRepository.updateEvent(
                      event.id,
                      AuthOutboxStatus.ERROR,
                    ),
                  );
                }),
              );
          }),
        )
        .pipe(defaultIfEmpty(null)),
    );
  }
}
