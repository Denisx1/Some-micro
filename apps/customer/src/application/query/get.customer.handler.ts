import { GetCustomerQuery } from "@app/customer/domain/query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CustomerRepository } from "../../infrastructure/repository/customer.repository";
import { Customer, NotFoundError } from "@app/common";

@QueryHandler(GetCustomerQuery)
export class GetCustomerHandler implements IQueryHandler<GetCustomerQuery> {
  constructor(private readonly customerRepository: CustomerRepository) {}
  async execute(query: GetCustomerQuery): Promise<Customer> {
    const customer = await this.customerRepository.getCustomer(query.payload);
    if (!customer) throw new NotFoundError("Customer");
    return customer;
  }
}
