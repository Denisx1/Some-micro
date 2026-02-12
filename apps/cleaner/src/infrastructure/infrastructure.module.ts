import { Module } from '@nestjs/common';
import { CleanerOutboxRepository } from './repository.ts/cleaner.outbox.repository';
import {
  CleanerClient,
  KafkaModule,
  PrismaModule,
  RedisModule,
} from '@app/common/infrastructure';
import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import { ScheduleModule } from '@nestjs/schedule';
import { KafkaConsumerInterceptor } from '@app/common/system/interceptor/kafka.interceptor';
import { StreamService } from '@app/common/system/stream/stream.manager.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    KafkaModule.register(GRPC_PRISMA_SERVICES.ORDER),
    PrismaModule.forRoot(CleanerClient),
    RedisModule,
  ],
  controllers: [],
  providers: [CleanerOutboxRepository, KafkaConsumerInterceptor, StreamService],
  exports: [
    CleanerOutboxRepository,
    KafkaConsumerInterceptor,
    KafkaModule,
    StreamService,
    RedisModule,
  ],
})
export class InfrastructureModule {}
