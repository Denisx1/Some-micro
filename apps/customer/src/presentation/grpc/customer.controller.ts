import { Controller } from '@nestjs/common';
import { CustomerFacade } from '../../application/customer.facade';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomerServiceController, GetCustomer } from '@app/common/domain';
import { Observable } from 'rxjs';

import { Customer } from '@app/common/infrastructure/prisma/generated/customer';

@Controller()
export class CustomerGrpcController implements CustomerServiceController {
  constructor(private readonly customerFacade: CustomerFacade) {}

  @GrpcMethod('CustomerService', 'GetCustomer')
  getCustomer(request: GetCustomer): Observable<Customer> {
    return this.customerFacade.getCustomer(request.userId);
  }
  @GrpcMethod('CustomerService', 'SubscribeNotifications')
  subscribe(data: { customerId: number }) {
    console.log(data)
    return this.customerFacade.notifyCustomer(data.customerId);
  }
}
