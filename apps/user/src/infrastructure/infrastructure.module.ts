import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import {
  GrpcModule,
  HashModule,
  KafkaModule,
  PrismaModule,
  RedisModule,
  UserClient,
} from '@app/common/infrastructure';
import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UserCasheService } from './cashe/user.cache.service';
import { UserOutboxRepository } from './repositories/user.outbox.repository';
import { UserRoleCashService } from './cashe/role.cashe';
import { GrpcClientsService } from '../../../../libs/common/src/infrastructure/grpc/grpc-clients.service';

@Module({
  imports: [
    GrpcModule.register([GRPC_PRISMA_SERVICES.ROLE]),
    PrismaModule.forRoot(UserClient),
    HashModule,
    RedisModule,
  ],
  controllers: [],
  providers: [
    UserRepository,
    UserRoleCashService,
    UserCasheService,
    UserOutboxRepository,
    GrpcClientsService,
  ],
  exports: [
    HashModule,
    RedisModule,
    GrpcClientsService,
    UserRepository,
    UserRoleCashService,
    UserCasheService,
    UserOutboxRepository,
  ],
})
export class InfrastructureModule {}
