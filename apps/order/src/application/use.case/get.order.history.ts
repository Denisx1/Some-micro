import { Injectable } from '@nestjs/common';
import { GetOrderById } from '@app/common/domain/types/grpc.services.types/order';
import { from, map, Observable, tap } from 'rxjs';
import { NotFoundError } from '@app/common/system';
import { OutboxRepository } from '../../infrastructure/repository/order.outbox.repository';
import { OutboxArray } from '@app/common/domain/types/outbox.event';

@Injectable()
export class GetOrderHostory {
  constructor(private readonly outboxRepository: OutboxRepository) {}
  execute(payload: GetOrderById): Observable<OutboxArray> {
    return this.getOrderById(payload);
  }

  private getOrderById(payload: GetOrderById): Observable<OutboxArray> {
    return from(this.outboxRepository.getHistory(payload.id)).pipe(
      tap((history) => console.log(history)),
      map((order) => {
        if (!order) throw new NotFoundError('Order');
        return { orderHistory: order };
      }),
    );
  }
}
