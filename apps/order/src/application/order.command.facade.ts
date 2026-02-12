import { Injectable } from '@nestjs/common';
import { CreateOrderService, UpdateOrderService } from './use.case';
import {
  CreateOrder,
  OrdertCommand,
  UpdateOrderType,
} from '@app/common/domain/types/grpc.services.types/order';
import { Observable } from 'rxjs';

@Injectable()
export class OrderCommandFacade {
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly updateOrderService: UpdateOrderService,
  ) {}
  createOrder(request: CreateOrder): Observable<void> {
    return this.createOrderService.execute(request);
  }
  updateOrder(payload: OrdertCommand): Observable<void> {
    return this.updateOrderService.execute(payload);
  }
}
