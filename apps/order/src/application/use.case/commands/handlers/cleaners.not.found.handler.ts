// import { CleanerNotFoundCommand } from "@app/common";
// import { OrderStatus } from "@app/order/infrastructure/prisma/generated";
// import { CommandHandler } from "@nestjs/cqrs";
// import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";

// @CommandHandler(CleanerNotFoundCommand)
// export class CleanerNotFoundHandler {
//   constructor(private readonly orderRepository: OrderRepository) {}
//   async execute(command: CleanerNotFoundCommand): Promise<void> {
//     await this.orderRepository.updateOrder(command.orderId, {
//       status: OrderStatus.WAITING_FRO_CLEANER,
//     });
//   }
// }
