// import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
// import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
// import { OrderPrismaService } from "@app/order";

// @CommandHandler(MatchChatUsersCommand)
// export class NotifyChatCreatedHandler
//   implements ICommandHandler<MatchChatUsersCommand>
// {
//   constructor(
//     private readonly orderOutbox: OutboxRepository,
//     private readonly prismaService: OrderPrismaService
//   ) {}
//   async execute(command: MatchChatUsersCommand) {
//     await this.prismaService.prisma.$transaction(async (tx) => {
//       await this.orderOutbox.createEvent(
//         {
//           aggregateId: command.payload.orderId,
//           aggregateType: KafkaTopics.Commands.NOTIFICATION,
//           payload: {
//             type: "NOTIFICATION",
//             status: "CHAT CREATED",
//             targetId: [command.payload.customer.id],
//             orderId: command.payload.orderId,
//             payload: {
//               chat: {
//                 roomId: command.payload.roomId,
//                 partner: {
//                   id: command.payload.cleaner.id,
//                   firstName: command.payload.cleaner.firstName,
//                   lastName: command.payload.cleaner.lastName,
//                   rating: command.payload.cleaner.rating,
//                   phone: command.payload.cleanerUser.phoneNumber,
//                   isOnline: command.payload.cleanerUser.isActive,
//                 },
//               },
//             },
//             message: `You have a chat with ${
//               command.payload.cleaner.firstName ?? "Cleaner"
//             }`,
//           },
//         },
//         tx
//       );
//       await this.orderOutbox.createEvent({
//         aggregateId: command.payload.orderId,
//         aggregateType: KafkaTopics.Commands.NOTIFICATION,
//         payload: {
//           type: "NOTIFICATION",
//           status: "CHAT CREATED",

//           targetId: [command.payload.cleaner.id],
//           orderId: command.payload.orderId,
//           payload: {
//             chat: {
//               roomId: command.payload.roomId,
//               partner: {
//                 id: command.payload.customer.id,
//                 firstName: command.payload.customer.firstName,
//                 lastName: command.payload.customer.lastName,
//                 phone: command.payload.customerUser.phoneNumber,
//                 isOnline: command.payload.customerUser.isActive,
//               },
//             },
//           },
//           message: `You have a chat with ${
//             command.payload.cleaner.firstName ?? "Cleaner"
//           }`,
//         },
//       });
//     });
//   }
// }
