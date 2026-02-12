import { Injectable } from '@nestjs/common';
import { CreateCustomerService } from './use.cases/create.custome';
import { GetCustomerService } from './use.cases/get.customer';
import { Observable } from 'rxjs';
import { Customer } from '@app/common/infrastructure/prisma/generated/customer';
import { NotificationService } from './use.cases';
import { CustomerCommand } from '@app/common/domain/types/grpc.services.types/order';
import { ChatData } from '@app/common/domain/types/grpc.services.types/chat';
import { HandleCustomerChat } from './use.cases/handle.chat';

@Injectable()
export class CustomerFacade {
  constructor(
    private readonly createCustomerService: CreateCustomerService,
    private readonly getCustomerService: GetCustomerService,
    private readonly notificationService: NotificationService,
    private readonly handleCustomerChat: HandleCustomerChat,
  ) {}
  createCustomer(message: { userId: number }): Observable<void> {
    return this.createCustomerService.execute(message);
  }
  getCustomer(userId: number): Observable<Customer> {
    return this.getCustomerService.execute(userId);
  }
  notifyCustomer(customerId: number): Observable<any> {
    return this.notificationService.getCustomerStream(customerId);
  }
  handleChat(message: ChatData): Observable<any> {
    return this.handleCustomerChat.execute(message);
  }
}
