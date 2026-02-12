import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastruncture.module';
import { OrderQueryFacade } from './order.query.facade';
import {
  CreateOrderService,
  GetOrderHostory,
  GetOrderService,
  UpdateOrderService,
} from './use.case';
import { OrderCommandFacade } from './order.command.facade';
import { OrderSagaHandler } from './saga.orchestration/order.saga';
import { CleanerSagaHandler } from './saga.orchestration/cleaner.saga';
import { ChatSagaHandler } from './saga.orchestration/chat.saga.handler';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    OrderCommandFacade,
    OrderQueryFacade,
    CreateOrderService,
    UpdateOrderService,
    GetOrderService,
    OrderSagaHandler,
    CleanerSagaHandler,
    GetOrderHostory,
    ChatSagaHandler,
  ],
  exports: [
    OrderCommandFacade,
    OrderQueryFacade,
    OrderSagaHandler,
    CleanerSagaHandler,
    ChatSagaHandler,
  ],
})
export class ApplicationModule {}
