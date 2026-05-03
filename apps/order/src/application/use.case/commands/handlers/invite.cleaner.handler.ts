import { CleanerCommands } from "@app/common";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { OrderPrismaService } from "@app/order";
import { InviteCleanerCommand } from "@app/order/domain/command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";

@CommandHandler(InviteCleanerCommand)
export class InviteCleanerHandler
  implements ICommandHandler<InviteCleanerCommand>
{
  constructor(
    private readonly orderOutbox: OutboxRepository,
    private readonly prismaService: OrderPrismaService
  ) {}

  async execute(command: InviteCleanerCommand): Promise<void> {
    await this.prismaService.prisma.$transaction(async (tx) => {
      await this.orderOutbox.createEvent(
        {
          aggregateId: command.payload.orderId,
          aggregateType: KafkaTopics.Commands.CLEANER,
          payload: {
            type: CleanerCommands.INVITE_CLEANER,
            payload: {
              customerId: command.payload.customerId,
              orderId: command.payload.orderId,
              cleanerProfileId: command.payload.cleanerProfileId,
            },
          },
        },
        tx
      );
      await this.orderOutbox.createEvent({
        aggregateId: command.payload.orderId,
        aggregateType: KafkaTopics.Commands.NOTIFICATION,
        payload: {
          type: NotificationTransport.GRPC,
          subType: NotificationSubType.ORDER_PROCESS,
          payload: {
            targetId: [command.payload.customerId],
            payload: {
              step: "INVITETION_SENT",
              orderId: command.payload.orderId,
              message: `Cleaner will receive invitation soon `,
            },
          },
        },
      });
    });
  }
}
