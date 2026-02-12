import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repository/order.repository';
import { KafkaTopics, SagaEvents } from '@app/common/domain';
import { OrderClient, PrismaService } from '@app/common/infrastructure';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';
import { from, Observable } from 'rxjs';
import { CreateOrder } from '@app/common/domain/types/grpc.services.types/order';

@Injectable()
export class CreateOrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly outboxRepository: OutboxRepository,
    private readonly prismaService: PrismaService<OrderClient>,
  ) {}

  execute(newOrder: CreateOrder): Observable<void> {
    return from(this.performCreateTransaction(newOrder));
  }

  private async performCreateTransaction(order: CreateOrder): Promise<void> {
    await this.prismaService.prisma.$transaction(async (tx) => {
      const newOrder = await this.orderRepository.createOrder(order, tx);

      await this.outboxRepository.createEvent(
        {
          aggregateId: newOrder.id,
          aggregateType: KafkaTopics.Events.ORDER,
          payload: {
            type: SagaEvents.ORDER_CREATED,
            payload: {
              id: newOrder.id,
              city: newOrder.city,
              zipCode: newOrder.zipCode,
              dayOfWeek: newOrder.dayOfWeek,
              fromTime: newOrder.fromTime,
              toTime: newOrder.toTime,
            },
          },
        },
        tx,
      );
    });
  }
}
