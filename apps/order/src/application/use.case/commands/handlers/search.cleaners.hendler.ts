import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { OrderPrismaService } from "@app/order";
import { SearchCleanerCommand } from "@app/order/domain/command";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { CleanerCommands } from "@app/common";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(SearchCleanerCommand)
export class SearchCleanersHandler
  implements ICommandHandler<SearchCleanerCommand>
{
  constructor(
    private readonly orderOutbox: OutboxRepository,
    private readonly prismaService: OrderPrismaService
  ) {}
  async execute(command: SearchCleanerCommand): Promise<void> {
    await this.prismaService.prisma.$transaction(async (tx) => {
      await this.orderOutbox.createEvent(
        {
          aggregateId: command.payload.orderId,
          aggregateType: KafkaTopics.Commands.CLEANER,
          payload: {
            type: CleanerCommands.RESERV_CLEANERS,
            payload: command.payload,
          },
        },
        tx
      );
      await this.orderOutbox.createEvent(
        {
          aggregateId: command.payload.orderId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.ORDER_PROCESS,
            payload: {
              targetId: [command.payload.customerId],
              payload: {
                step: "SEARCHING_CLEANERS",
                progress: 20,
                order: {
                  orderId: command.payload.orderId,
                },

                message: `We are looking for cleaners for order ${command.payload.orderId}`,
              },
            },
          },
        },
        tx
      );
    });
  }
}
