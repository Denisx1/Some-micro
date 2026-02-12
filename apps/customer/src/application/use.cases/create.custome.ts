import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../infrastructure/repository/customer.repository';
import { from, Observable } from 'rxjs';
import { CreateCustomerType } from '@app/common/domain';

@Injectable()
export class CreateCustomerService {
  constructor(private readonly cusomerRepository: CustomerRepository) {}
  execute(message: { userId: number }): Observable<void> {
    return from(this.cusomerRepository.createCustomer(message.userId));
  }
}
