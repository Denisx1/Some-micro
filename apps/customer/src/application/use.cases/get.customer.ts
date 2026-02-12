import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../infrastructure/repository/customer.repository';
import { from, map, Observable } from 'rxjs';
import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class GetCustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  execute(userId: number): Observable<Customer> {
    return this.getCustomer(userId);
  }
  private getCustomer(userId: number): Observable<Customer> {
    return from(this.customerRepository.getCustomer(userId)).pipe(
      map((customer: Customer) => {
        if (!customer) throw new NotFoundError('Customer');
        return customer;
      }),
    );
  }
  
}
