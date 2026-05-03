// import { Injectable } from '@nestjs/common';
// import { SendnotificationService } from './use.case/send.email.notification';
// import { from, Observable } from 'rxjs';
// import {
//   BaseNotification,
//   NotificationEvent,
// } from '@app/common/domain/types/grpc.services.types/order';
// import { NotificationRequest } from '@app/common/domain';
// import { SubScribeNotificationService } from './use.case/subscribe.notification';
// import { GrpcStrategy } from './strategy/grpc.strategy';

// @Injectable()
// export class NotificationFacade {
//   constructor(
//     private readonly sendNotificationService: SendnotificationService,
//     private readonly subScribeNotificationService: SubScribeNotificationService,
//     private readonly grpcStrategy: GrpcStrategy,
//   ) {}
//   handleNotification(payload: NotificationEvent): Observable<void> {
//     return this.sendNotificationService.execute(payload);
//   }
//   subscribeStream(payload: NotificationRequest): Observable<any> {
//     return this.subScribeNotificationService.subscribe(payload);
//   }
//   handleIncomingEvent(payload: BaseNotification): Observable<void> {
//     return this.grpcStrategy.send(payload);
//   }
// }
