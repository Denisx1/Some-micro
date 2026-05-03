// import { CreatedChatEvent, MatchChatUsersCommand } from "@app/common";
// import { ServiceEvent } from "@app/common/cqrs/base.event";

// import { GrpcClientsService } from "@app/common/infrastructure";
// import { Injectable } from "@nestjs/common";
// import { ICommand, Saga } from "@nestjs/cqrs";
// import {
//   filter,
//   forkJoin,
//   map,
//   mergeMap,
//   Observable,
//   of,
//   switchMap,
// } from "rxjs";

// @Injectable()
// export class ChatSaga {
//   constructor(private readonly grpcClientsService: GrpcClientsService) {}
//   @Saga()
//   chatServiceSaga = (
//     events$: Observable<ServiceEvent>
//   ): Observable<ICommand> => {
//     return events$.pipe(
//       filter((event) => event instanceof ServiceEvent),
//       mergeMap((event) => {
//         if (event instanceof CreatedChatEvent) {
//           return this.handleCreatedChat(event);
//         }
//       })
//     );
//   };
//   private handleCreatedChat(event: CreatedChatEvent): Observable<ICommand> {
//     return of(event).pipe(
//       switchMap((ev) =>
//         forkJoin({
//           ev: of(ev),
//           customer: this.grpcClientsService.customer.getCustomer({
//             id: ev.payload.customerId,
//           }),
//           cleaner: this.grpcClientsService.cleaner.getProfile({
//             id: ev.payload.cleanerId,
//           }),
//         })
//       ),

//       switchMap(({ ev, customer, cleaner }) =>
//         forkJoin({
//           customerUser: this.grpcClientsService.user.getUserPublic({
//             id: customer.userId,
//           }),
//           cleanerUser: this.grpcClientsService.user.getUserPublic({
//             id: cleaner.userId,
//           }),
//           customer: of(customer),
//           cleaner: of(cleaner),
//           ev: of(ev),
//         })
//       ),
//       map(({ ev, customer, cleaner, customerUser, cleanerUser }) => {
//         return new MatchChatUsersCommand({
//           orderId: ev.payload.orderId,
//           roomId: ev.payload.roomId,
//           customer,
//           cleaner,
//           customerUser,
//           cleanerUser,
//         });
//       })
//     );
//   }
// }
