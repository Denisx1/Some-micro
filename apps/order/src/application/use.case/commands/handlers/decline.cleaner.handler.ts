// import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
// import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";
// import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
// import { OrderInvitationRepository } from "apps/order/src/infrastructure/repository/order.invitation.repository";
// import { KafkaTopics } from "@app/common/domain";
// import { DeclineCleanerCommand } from "@app/common";
// import { OrderPrismaService } from "@app/order";
// import { InvitationStatus } from "@app/order/infrastructure/prisma/generated";

// @CommandHandler(DeclineCleanerCommand)
// export class DeclineCleanerHandler
//   implements ICommandHandler<DeclineCleanerCommand>
// {
//   constructor(
//     private readonly orderRepository: OrderRepository,
//     private readonly orderOutbox: OutboxRepository,
//     private readonly orderInvitationRepository: OrderInvitationRepository,
//     private readonly prismaService: OrderPrismaService
//   ) {}
//   async execute(command: DeclineCleanerCommand): Promise<void> {
//     return await this.prismaService.prisma.$transaction(async (tx) => {
//       const order = await this.orderRepository.getOrder(
//         command.payload.orderId,
//         tx
//       );
//       await this.orderInvitationRepository.updateInvitation(
//         command.payload.cleanerProfileId,
//         {
//           orderId: command.payload.orderId,
//           status: InvitationStatus.REJECTED,
//         }
//       );
//       const remainingInvitations =
//         await this.orderInvitationRepository.getInvitation(
//           command.payload.orderId
//         );
//       await this.orderOutbox.createEvent(
//         {
//           aggregateId: command.payload.orderId,
//           aggregateType: KafkaTopics.Commands.NOTIFICATION,
//           payload: {
//             type: "NOTIFICATION",
//             status: "CANDIDATES_READY",
//             subType: "UI_UPDATE",
//             orderId: order.id,
//             targetId: [order.customerId],
//             payload: {
//               customer: {
//                 candidates: { list: remainingInvitations },
//               },
//             },
//             message: `Cleaner Declined an invitation and you can choose another for order ${order.id}`,
//           },
//         },
//         tx
//       );
//       await this.orderOutbox.createEvent(
//         {
//           aggregateId: command.payload.orderId,
//           aggregateType: KafkaTopics.Commands.NOTIFICATION,
//           payload: {
//             type: "NOTIFICATION",
//             status: "INVITATION_REJECTED",
//             subType: "UI_UPDATE",
//             orderId: command.payload.orderId,
//             targetId: [command.payload.cleanerProfileId],
//             payload: { cleaner: { newJob: { ...command.payload } } },
//             message: `You have rejected an invitation for order ${order.id}`,
//           },
//         },
//         tx
//       );
//     });
//   }
// }
