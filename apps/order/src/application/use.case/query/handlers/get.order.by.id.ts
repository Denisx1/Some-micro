import { OrderRepository } from "apps/order/src/infrastructure/repository/order.repository";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetOrderByIdQuery } from "../implementation/order.query";
import { Order } from "@app/order/infrastructure/prisma/generated";

@QueryHandler(GetOrderByIdQuery)
export class GetOrderHandler implements IQueryHandler<GetOrderByIdQuery> {
  constructor(private readonly orderRepository: OrderRepository) {}
  async execute(payload: GetOrderByIdQuery): Promise<Order> {
    return await this.orderRepository.getOrder(payload.orderId);
  }
}
