// import { Injectable } from '@nestjs/common';
// import { UserOutboxRepository } from '../repositories/user.outbox.repository';
// import { Interval } from '@nestjs/schedule';
// import {
//   catchError,
//   concatMap,
//   defaultIfEmpty,
//   from,
//   lastValueFrom,
//   switchMap,
// } from 'rxjs';
// import {
//   UserOutbox,
//   UsertOutboxStatus,
// } from '@app/common/infrastructure/prisma/generated/user';

// import { KafkaService } from '@app/common/infrastructure';
// import { RecordMetadata } from 'kafkajs';
// @Injectable()
// export class OutboxCleanerWorker {
//   private isProcessing = false;
//   constructor(
//     private readonly userOutboxRepository: UserOutboxRepository,
//     private readonly kafkaClient: KafkaService,
//   ) {}

//   @Interval(10_000) // Проверка каждые 5 секунд
//   async handleOutbox(): Promise<void> {
//     if (this.isProcessing) return;
//     this.isProcessing = true;
//     try {
//       const events = await this.userOutboxRepository.findAllEvent();
//       if (events.length === 0) return;
//       const handleEvent$ = from(events).pipe(
//         concatMap((event: UserOutbox) => {
//           return this.kafkaClient
//             .emit2(event.topic, event.id, event.payload)
//             .pipe(
//               switchMap((kafkaData: RecordMetadata[]) => {
//                 const meta = kafkaData[0];
//                 return from(
//                   this.userOutboxRepository.updateEvent(
//                     event.id,
//                     {
//                       status: UsertOutboxStatus.SENT,
//                       partition: meta.partition,
//                       offset: meta.baseOffset,
//                     },
//                     event.topic,
//                   ),
//                 );
//               }),
//               catchError((err) => {
//                 // ТРЕТИЙ RETURN: возвращаем поток обновления при ошибке
//                 return from(
//                   this.userOutboxRepository.updateEvent(event.id, {
//                     status: UsertOutboxStatus.ERROR,
//                   }),
//                 );
//               }),
//             );
//         }),
//       );
//       await lastValueFrom(handleEvent$.pipe(defaultIfEmpty(null)));
//     } finally {
//       this.isProcessing = false;
//     }
//   }
// }
