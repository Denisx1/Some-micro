import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";
import { NotFoundError } from "rxjs";
import { OrderInvitationRepository } from "apps/order/src/infrastructure/repository/order.invitation.repository";
import { OrderPrismaService } from "@app/order";
import {
  CustomerDecision,
  InvitationStatus,
} from "@app/order/infrastructure/prisma/generated";
import { OrderEvents } from "@app/common/contracts/order/enum";
import { SelectCleanerCommand } from "@app/order/domain/command";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";

@CommandHandler(SelectCleanerCommand)
export class SelectCleanerHandler
  implements ICommandHandler<SelectCleanerCommand>
{
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly outboxRepository: OutboxRepository,
    private readonly orderInvitationRepository: OrderInvitationRepository,
    private readonly prismaService: OrderPrismaService
  ) {}
  async execute(command: SelectCleanerCommand): Promise<number> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const order = await this.orderRepository.getOrder(
        command.payload.orderId,
        tx
      );
      if (!order || order.customerId !== command.payload.customerId) {
        throw new NotFoundError("Order");
      }
      // await this.orderInvitationRepository.updateInvitation(
      //   command.payload.cleanerProfileId,
      //   {
      //     status: InvitationStatus.INVITED,
      //     orderId: command.payload.orderId,
      //     customer_decision: CustomerDecision.SELECTED,
      //   },
      //   tx
      // );
      await this.outboxRepository.createEvent(
        {
          aggregateId: command.payload.orderId,
          aggregateType: KafkaTopics.Events.ORDER,
          payload: {
            type: OrderEvents.CLEANER_SELECTED,
            payload: {
              orderId: command.payload.orderId,
              cleanerProfileId: command.payload.cleanerProfileId,
              customerId: command.payload.customerId,
            },
            message: `You have been invited to clean order ${command.payload.orderId}`,
          },
        },
        tx
      );
      return order.id;
    });
  }
}
