import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repository/order.repository';
import { KafkaTopics, SagaCommands, SagaEvents } from '@app/common/domain';
import {
  Order,
  OrderStatus,
} from '@app/common/infrastructure/prisma/generated/order';
import { OrdertCommand } from '@app/common/domain/types/grpc.services.types/order';
import { from, map, Observable, of } from 'rxjs';
import { AlreadyExistError, ParseError } from '@app/common/system';
import { OrderClient, PrismaService } from '@app/common/infrastructure';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';

@Injectable()
export class UpdateOrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly prismaService: PrismaService<OrderClient>,
    private readonly outboxRepository: OutboxRepository,
  ) {}
  public execute(command: OrdertCommand): Observable<void> {
    return from(this.getPayloadByTopic(command));
  }
  private async handleTransaction(
    orderId: number,
    cleanerId: number,
  ): Promise<void> {
    return await this.prismaService.prisma.$transaction(async (tx) => {
      const existingBound = await this.orderRepository.findUnique(
        orderId,
        cleanerId,
        tx,
      );
      if (existingBound) throw new AlreadyExistError('Order already bounded');
      const updatedOrder = await this.orderRepository.updateOrder(
        orderId,
        {
          cleanerId,
          status: OrderStatus.IN_PROGRESS,
        },
        tx,
      );
      await this.outboxRepository.createEvent({
        aggregateId: orderId,
        aggregateType: KafkaTopics.Events.ORDER,
        payload: {
          type: SagaEvents.CLEANER_BOUND_TO_ORDER,
          payload: { orderId, cleanerId, customerId: updatedOrder.customerId },
          comment: `Order bounded with cleaner`,
        },
      });
    });
  }
  private getPayloadByTopic(command: OrdertCommand): Observable<void> {
    switch (command.type) {
      case SagaCommands.CLEANER_NOT_FOUND:
        return from(
          this.orderRepository.updateOrder(command.payload.orderId, {
            status: OrderStatus.WAITING_FRO_CLEANER,
          }),
        ).pipe(map(() => undefined));

      case SagaCommands.INVITED_CLEANERS:
        return from(
          this.orderRepository.updateOrder(command.payload.orderId, {
            status: OrderStatus.INVITED,
          }),
        ).pipe(map(() => undefined));

      case SagaCommands.CLEANER_ACCEPTED:
        return from(
          this.handleTransaction(
            command.payload.orderId,
            command.payload.cleanerId,
          ),
        ).pipe(map(() => undefined));

      default:
        // Всегда возвращай что-то, чтобы поток не "повис"
        return of(undefined);
    }
  }
}
