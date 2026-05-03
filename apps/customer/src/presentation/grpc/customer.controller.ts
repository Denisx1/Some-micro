import { Controller, UseInterceptors } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { QueryBus } from "@nestjs/cqrs";
import {
  Customer,
  CustomerServiceController,
  GetCustomerRequest,
} from "@app/common";
import { GetCustomerQuery } from "@app/customer/domain/query";
import { GrpcClientInterceptor } from "@app/common/system/interceptor/common.interceptor";

@Controller()
@UseInterceptors(GrpcClientInterceptor)
export class CustomerGrpcController implements CustomerServiceController {
  constructor(private readonly queryBus: QueryBus) {}

  @GrpcMethod("CustomerService", "GetCustomer")
  async getCustomer(request: GetCustomerRequest): Promise<Customer> {
    return await this.queryBus.execute(new GetCustomerQuery(request));
  }
}
