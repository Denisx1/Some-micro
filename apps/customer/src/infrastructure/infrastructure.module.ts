import {
  CustomerClient,
  KafkaModule,
  PrismaModule,
  RedisModule,
  RedisService,
} from '@app/common/infrastructure';
import { Module } from '@nestjs/common';
import { CustomerRepository } from './repository/customer.repository';
import { StreamService } from '@app/common/system/stream/stream.manager.service';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';

@Module({
  imports: [
    PrismaModule.forRoot(CustomerClient),
    KafkaModule.register(GRPC_PRISMA_SERVICES.ORDER),
    RedisModule,
  ],
  controllers: [],
  providers: [CustomerRepository, StreamService, KafkaConsumerInterceptor],
  exports: [
    CustomerRepository,
    KafkaConsumerInterceptor,
    KafkaModule,
    StreamService,
    RedisModule,
  ],
})
export class InfrastructureModule {}
