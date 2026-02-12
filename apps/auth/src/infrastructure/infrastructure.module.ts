import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import {
  AuthClient,
  GrpcClientsService,
  GrpcModule,
  HashModule,
  HashService,
  KafkaModule,
  PrismaModule,
  RedisModule,
  TokenModule,
  TokenService,
} from '@app/common/infrastructure';
import { Module } from '@nestjs/common';
import { AuthRepository } from './repositories/auth.repository';

import { AuthCacheService } from './cashe/auth.cache.service';
import { AuthOutboxRepository } from './repositories/auth.outbox.repository';
import { AuthOutboxWorker } from './outbox.worker/outbox.worker';
import { AuthKafkaService } from './providers';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    GrpcModule.register([
      GRPC_PRISMA_SERVICES.USER,
      GRPC_PRISMA_SERVICES.CLEANER,
      GRPC_PRISMA_SERVICES.CUSTOMER,
    ]),
    PrismaModule.forRoot(AuthClient),
    KafkaModule.register(GRPC_PRISMA_SERVICES.AUTH),
    RedisModule,
    HashModule,
    TokenModule,
  ],
  controllers: [],
  providers: [
    AuthCacheService,
    AuthRepository,
    AuthOutboxWorker,
    AuthOutboxRepository,
    HashService,
    TokenService,
    AuthKafkaService,
    GrpcClientsService,
  ],
  exports: [
    AuthCacheService,
    AuthRepository,
    RedisModule,
    TokenModule,
    HashService,
    TokenService,
    AuthOutboxRepository,
    AuthKafkaService,
    GrpcClientsService,
  ],
})
export class InfrastructureModule {}
