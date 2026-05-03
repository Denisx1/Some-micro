import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { from, mergeAll } from "rxjs";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import {
  GetOrderByIdQuery,
  GetOrderHistoryQuery,
} from "apps/order/src/application/use.case/query/implementation/order.query";
import {
  CreateNewOrderRequest,
  GetOrderRequest,
  InviteCleanerRequest,
} from "@app/common/contracts/order/order.grpc.types";
import {
  CreateOrderCommand,
  SelectCleanerCommand,
} from "libs/order/src/domain/command";

@Controller()
export class OrderGrpcController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @GrpcMethod("OrderService", "CreateOrder")
  async createOrder(request: CreateNewOrderRequest) {
    const createdId = await this.commandBus.execute(
      new CreateOrderCommand(request)
    );
    return { status: "Order was created successfully", id: createdId };
  }

  @GrpcMethod("OrderService", "GetOrderById")
  async getOrderById(request: GetOrderRequest) {
    const query = new GetOrderByIdQuery(request.id);
    return await this.queryBus.execute(query);
  }

  @GrpcMethod("OrderService", "GetOrderHistory")
  getOrderHistory(request: GetOrderRequest) {
    return from(
      this.queryBus.execute(new GetOrderHistoryQuery(request.id))
    ).pipe(mergeAll());
  }

  @GrpcMethod("OrderService", "SelectCleaner")
  async selectCleaner(request: InviteCleanerRequest) {
    const createdId = await this.commandBus.execute(
      new SelectCleanerCommand(request)
    );
    return { status: "Cleaner selected successfully", id: createdId };
  }
}
