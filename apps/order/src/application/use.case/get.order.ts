import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../infrastructure/repository/order.repository';
import { GetOrderById } from '@app/common/domain/types/grpc.services.types/order';
import { from, map, Observable } from 'rxjs';
import { Order } from '@app/common/infrastructure/prisma/generated/order';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class GetOrderService {
  constructor(private readonly orderRepository: OrderRepository) {}
  execute(payload: GetOrderById): Observable<Order> {
    return this.getOrderById(payload);
  }

  private getOrderById(payload: GetOrderById): Observable<Order> {
    return from(this.orderRepository.getOrder(payload.id)).pipe(
      map((order) => {
        if (!order) throw new NotFoundError('Order');
        return order;
      }),
    );
  }
}
