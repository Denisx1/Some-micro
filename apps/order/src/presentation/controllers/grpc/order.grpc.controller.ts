import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrderQueryFacade } from 'apps/order/src/application/order.query.facade';
import { Observable, tap } from 'rxjs';
import {
  CreateOrder,
  GetOrderById,
  OrderServiceController,
} from '@app/common/domain/types/grpc.services.types/order';

import {
  Order,
  OrderOutbox,
} from '@app/common/infrastructure/prisma/generated/order';
import { OrderCommandFacade } from 'apps/order/src/application/order.command.facade';
import { OutboxArray } from '@app/common/domain/types/outbox.event';

@Controller()
export class OrderGrpcController implements OrderServiceController {
  constructor(
    private readonly orderQueryFacade: OrderQueryFacade,
    private readonly orderCommandFacade: OrderCommandFacade,
  ) {}

  @GrpcMethod('OrderService', 'CreateOrder')
  createOrder(request: CreateOrder): Observable<void> {
    return this.orderCommandFacade.createOrder(request);
  }

  @GrpcMethod('OrderService', 'GetOrderById')
  getOrderById(request: GetOrderById): Observable<Order> {
    return this.orderQueryFacade.getOrderById(request);
  }

  @GrpcMethod('OrderService', 'GetOrderHistory')
  getOrderHistory(request: GetOrderById): Observable<OutboxArray> {
    return this.orderQueryFacade.getOrderHistory(request);
  }
}
