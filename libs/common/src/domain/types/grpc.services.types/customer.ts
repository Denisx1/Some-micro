import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { Observable } from 'rxjs';
import { UserActions } from '../../constants';

export interface CustomerServiceController {
  getCustomer: (request: GetCustomer) => Observable<Customer>;
}

export type GetCustomer = Pick<Customer, 'userId'>;
export type CreateCustomerType = Pick<Customer, 'userId'>;
