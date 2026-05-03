// import { CommandHandler } from "@nestjs/cqrs";
// import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";
// import { OrderInvitationRepository } from "apps/order/src/infrastructure/repository/order.invitation.repository";
// import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
// import { AlreadyExistError } from "@app/common/system";

// import { KafkaTopics } from "@app/common/domain";
// import { AcceptOrderCommand } from "@app/common";
// import { OrderPrismaService } from "@app/order";
// import {
//   InvitationStatus,
//   OrderStatus,
// } from "@app/order/infrastructure/prisma/generated";
// import { OrderEvents } from "@app/common/contracts/order/enum";

// @CommandHandler(AcceptOrderCommand)
// export class CleanerAcceptedHandler {
//   constructor(
//     private readonly orderRepository: OrderRepository,
//     private readonly orderInvitationRepository: OrderInvitationRepository,
//     private readonly prismaService: OrderPrismaService,
//     private readonly outboxRepository: OutboxRepository
//   ) {}
//   async execute(command: AcceptOrderCommand): Promise<void> {
//     return await this.prismaService.prisma.$transaction(async (tx) => {
//       const existingBound = await this.orderRepository.findUnique(
//         command.payload.orderId,
//         command.payload.cleanerProfileId,
//         tx
//       );
//       if (existingBound) throw new AlreadyExistError("Order already bounded");
//       await this.orderInvitationRepository.updateInvitation(
//         command.payload.cleanerProfileId,
//         {
//           status: InvitationStatus.ACCEPTED,
//           orderId: command.payload.orderId,
//         },
//         tx
//       );
//       const updatedOrder = await this.orderRepository.updateOrder(
//         command.payload.orderId,
//         {
//           cleanerId: command.payload.cleanerProfileId,
//           status: OrderStatus.IN_PROGRESS,
//         },
//         tx
//       );
//       await this.outboxRepository.createEvent(
//         {
//           aggregateId: command.payload.orderId,
//           aggregateType: KafkaTopics.Events.ORDER,
//           payload: {
//             type: OrderEvents.CLEANER_BOUND_TO_ORDER,
//             payload: {
//               orderId: command.payload.orderId,
//               cleanerId: command.payload.cleanerProfileId,
//               customerId: updatedOrder.customerId,
//             },
//             comment: `Order bounded with cleaner`,
//           },
//         },
//         tx
//       );
//       await this.outboxRepository.createEvent(
//         {
//           aggregateId: command.payload.orderId,
//           aggregateType: KafkaTopics.Commands.NOTIFICATION,
//           payload: {
//             type: "NOTIFICATION",
//             status: "JOB_UPDATED",
//             subType: "UI_UPDATE",
//             targetId: [command.payload.cleanerProfileId],
//             payload: { cleaner: { newJob: { ...command.payload } } },
//             message: `You have been marked with this order`,
//           },
//         },
//         tx
//       );
//       await this.outboxRepository.createEvent({
//         aggregateId: command.payload.orderId,
//         aggregateType: KafkaTopics.Commands.NOTIFICATION,
//         payload: {
//           type: "NOTIFICATION",
//           status: "INVITATION_ACCEPTED",
//           subType: "UI_UPDATE",
//           targetId: [updatedOrder.customerId],
//           message: `Cleaner accepted the invitation`,
//         },
//       });
//     });
//   }
// }
