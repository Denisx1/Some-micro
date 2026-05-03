// import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
// import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
// import { KafkaTopics } from "@app/common/domain";
// import { ChatCommands, CreateChatCommand } from "@app/common";

// @CommandHandler(CreateChatCommand)
// export class CreateChatHandler implements ICommandHandler<CreateChatCommand> {
//   constructor(private readonly outboxRepository: OutboxRepository) {}
//   async execute(command: CreateChatCommand) {
//     await this.outboxRepository.createEvent({
//       aggregateId: command.payload.orderId,
//       aggregateType: KafkaTopics.Commands.CHAT,
//       payload: {
//         type: ChatCommands.CREATE_CHAT,
//         payload: {
//           customerId: command.payload.customerId,
//           cleanerId: command.payload.cleanerId,
//           orderId: command.payload.orderId,
//         },
//         message: `Create chat for order ${command.payload.orderId}`,
//       },
//     });
//   }
// }
