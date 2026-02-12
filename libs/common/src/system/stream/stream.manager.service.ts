import { CleanerJob } from '@app/common/infrastructure/prisma/generated/cleaner';
import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class StreamService {
  // Единый реестр активных gRPC стримов.
  // Мы храним тут Subject, в который можно "пушнуть" данные для конкретного профиля.
  private userStreams = new Map<number, Subject<any>>();

  // Регистрация при коннекте
  registerUser(profileId: number, stream: Subject<any>) {
    this.userStreams.set(profileId, stream);
    console.log(`[StreamService] Profile ${profileId} connected`);
  }

  // Удаление при дисконнекте
  unregisterUser(profileId: number) {
    this.userStreams.delete(profileId);
    console.log(`[StreamService] Profile ${profileId} disconnected`);
  }

  //метод из createJob
  publishJob(jobs: CleanerJob[]) {
    jobs.forEach((job) => {
      const stream = this.userStreams.get(job.cleanerProfileId);
      if (stream) {
        // Мы отправляем ОДИНОЧНУЮ работу в персональный стрим.
        // Там её поймает оператор scan и добавит в массив.
        stream.next({ type: 'NEW_JOB', data: job });
      }
    });
  }

  // Универсальный метод для чатов и прочего
  sendToUser(profileId: number, event: any): boolean {
    const stream = this.userStreams.get(profileId);
    if (stream) {
      stream.next(event);
      return true;
    }
    return false;
  }
}
