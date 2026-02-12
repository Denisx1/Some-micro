import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateCustomerService, GetCustomerService } from './use.cases';
import { CustomerFacade } from './customer.facade';
import { NotificationService } from './use.cases/noification.service';
import { HandleCustomerChat } from './use.cases/handle.chat';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    CreateCustomerService,
    CustomerFacade,
    GetCustomerService,
    NotificationService,
    HandleCustomerChat,
  ],
  exports: [CustomerFacade],
})
export class ApplicationModule {}
