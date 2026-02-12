import {
  GRPC_NON_PRISMA_SERVICES,
  GRPC_PRISMA_SERVICES,
} from '@app/common/domain';
import {
  GrpcClientsService,
  GrpcModule,
  HashModule,
  HashService,
  KafkaModule,
  RedisModule,
  TokenModule,
  TokenService,
} from '@app/common/infrastructure';
import { Module } from '@nestjs/common';
import { RegistrationCasheService } from './cashe/registration.cashe';
import { RoleCasheService } from './cashe/role.cache';
import { RegKafkaProduser } from './kafka/reg.kafka.provider';

@Module({
  imports: [
    GrpcModule.register([GRPC_PRISMA_SERVICES.USER]),
    KafkaModule.register(GRPC_NON_PRISMA_SERVICES.REGISTRATION),
    HashModule,
    RedisModule,
    TokenModule,
  ],
  controllers: [],
  providers: [
    RegistrationCasheService,
    RoleCasheService,
    TokenService,
    HashService,
    RegKafkaProduser,
    GrpcClientsService,
  ],

  exports: [
    GrpcClientsService,
    RegKafkaProduser,
    RegistrationCasheService,
    RoleCasheService,
    HashService,
    TokenService,
  ],
})
export class InfrastructureModule {}
