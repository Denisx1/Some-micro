import { ICreateProfileContract } from "@app/common";

export class CreateCustomerCommand {
  constructor(public readonly payload: ICreateProfileContract) {}
}
