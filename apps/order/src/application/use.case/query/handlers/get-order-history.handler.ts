import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { OutboxRepository } from "apps/order/src/infrastructure/repository/order.outbox.repository";
import { from, Observable, tap } from "rxjs";
import { GetOrderHistoryQuery } from "../implementation/order.query";
import { OrderOutbox } from "@app/order/infrastructure/prisma/generated";

@QueryHandler(GetOrderHistoryQuery)
export class GetOrderHistoryHandler
  implements IQueryHandler<GetOrderHistoryQuery, Observable<OrderOutbox>>
{
  constructor(private readonly outboxRepository: OutboxRepository) {}

  async execute(query: GetOrderHistoryQuery): Promise<Observable<OrderOutbox>> {
    return from(this.outboxRepository.getHistoryStream(query.orderId));
  }
}
