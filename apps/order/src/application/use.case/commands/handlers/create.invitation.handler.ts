import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OrderInvitationRepository } from "apps/order/src/infrastructure/repository/order.invitation.repository";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { OrderPrismaService } from "@app/order";
import { InvitationStatus } from "@app/order/infrastructure/prisma/generated";
import { CreateInvitationsCommand } from "@app/order/domain/command";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(CreateInvitationsCommand)
export class CreateInvitationsHandler
  implements ICommandHandler<CreateInvitationsCommand>
{
  constructor(
    private readonly repository: OrderInvitationRepository,
    private readonly prismaService: OrderPrismaService,
    private readonly orderOutbox: OutboxRepository
  ) {}

  async execute(command: CreateInvitationsCommand): Promise<void> {
    const count = command.payload?.candidates?.length || 0;
    const { orderId, candidates, customerId } = command.payload;
    await this.prismaService.prisma.$transaction(async (tx) => {
      // await this.repository.createInvitation(
      //   candidates.map((candidate) => ({
      //     cleanerName: candidate.firstName,
      //     cleanerProfileId: candidate.id,
      //     orderId: orderId,
      //     rating: candidate.rating,
      //     status: InvitationStatus.FOUND,
      //   })),
      //   tx
      // );
      await this.orderOutbox.createEvent(
        {
          aggregateId: command.payload.orderId,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.ORDER_PROCESS,
            payload: {
              targetId: [customerId],
              payload: {
                step: "CANDIDATES_READY",
                progress: 30,
                order: {
                  candidates: { list: command.payload.candidates as any },
                  orderId: command.payload.orderId,
                },
                message: `We found ${count} ${
                  count === 1 ? "cleaner" : "cleaners"
                } for your order`,
              },
            },
          },
        },
        tx
      );
    });
  }
}
