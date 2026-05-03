import { GetCustomerRequest } from "@app/common";

export class GetCustomerQuery {
  constructor(public readonly payload: GetCustomerRequest) {}
}
