import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { OrderPrismaService } from "@app/order";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { NotifyInvitationsCommand } from "@app/order/domain/command";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(NotifyInvitationsCommand)
export class NotifyInvitationsHandler
  implements ICommandHandler<NotifyInvitationsCommand>
{
  constructor(
    private readonly orderOutbox: OutboxRepository,
    private readonly prismaService: OrderPrismaService
  ) {}

  async execute(command: NotifyInvitationsCommand) {
    await this.prismaService.prisma.$transaction(async (tx) => {
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
                step: "CLEANER_INVITED",
                orderId: command.payload.orderId,
                message: `Cleaner Invited`,
              },
            },
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
              targetId: [command.payload.cleanerProfileId],
              payload: {
                step: "INVITATION_CREATED",
                orderId: command.payload.orderId,
                message: `You have received an invitation`,
                order: { newJob: { ...command.payload } },
              },
            },
          },
        },
        tx
      );
    });
  }
}
