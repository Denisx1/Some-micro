import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { OrderPrismaService } from "@app/order";
import { OrderEvents } from "@app/common/contracts/order/enum";
import { CreateOrderCommand } from "@app/order/domain/command";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import {
  NotificationSubType,
  NotificationTransport,
} from "@app/common/contracts/notification/enum";

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly outboxRepository: OutboxRepository,
    private readonly prismaService: OrderPrismaService
  ) {}
  async execute(command: CreateOrderCommand): Promise<number> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const newOrder = await this.orderRepository.createOrder(
        command.payload,
        tx
      );
      await this.outboxRepository.createEvent(
        {
          aggregateId: newOrder.id,
          aggregateType: KafkaTopics.Events.ORDER,
          payload: {
            type: OrderEvents.ORDER_CREATED,
            payload: {
              orderId: newOrder.id,
              city: newOrder.city,
              zipCode: newOrder.zipCode,
              dayOfWeek: newOrder.dayOfWeek,
              fromTime: newOrder.fromTime,
              toTime: newOrder.toTime,
              customerId: newOrder.customerId,
            },
          },
        },
        tx
      );
      await this.outboxRepository.createEvent(
        {
          aggregateId: newOrder.id,
          aggregateType: KafkaTopics.Commands.NOTIFICATION,
          payload: {
            type: NotificationTransport.GRPC,
            subType: NotificationSubType.ORDER_PROCESS,
            payload: {
              targetId: [command.payload.customerId],
              payload: {
                step: "ORDER_CREATED",
                progress: 10,
                order: { orderId: newOrder.id },
                message: `Order.created`,
              },
            },
          },
        },
        tx
      );
      return newOrder.id;
    });
  }
}
