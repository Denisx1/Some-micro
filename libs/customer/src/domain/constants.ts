import { CustomerCommand } from "@app/common/contracts/customer/enum";
import { CreateCustomerCommand } from "@app/customer/domain/command";


export const CustomerCommandMap = {
  [CustomerCommand.CREATE_CUSTOMER]: CreateCustomerCommand,
};
