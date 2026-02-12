import { Injectable } from '@nestjs/common';
import { GetOrderById } from '@app/common/domain/types/grpc.services.types/order';
import { GetOrderService } from './use.case/get.order';
import { Observable } from 'rxjs';
import {
  Order,
  OrderOutbox,
} from '@app/common/infrastructure/prisma/generated/order';
import { GetOrderHostory } from './use.case';
import { OutboxArray } from '@app/common/domain/types/outbox.event';

@Injectable()
export class OrderQueryFacade {
  constructor(
    private readonly getOrderHostory: GetOrderHostory,
    private readonly getOrderService: GetOrderService,
  ) {}

  getOrderById(request: GetOrderById): Observable<Order> {
    return this.getOrderService.execute(request);
  }
  getOrderHistory(request: GetOrderById): Observable<OutboxArray> {
    return this.getOrderHostory.execute(request);
  }
}
