import { Module } from "@nestjs/common";
import { AuthOutboxRepository } from "./repositories/auth.outbox.repository";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaModule } from "@app/common";
import { PrismaClient as AuthClient, AuthPrismaService } from "@app/auth";
import { RedisModule } from "@app/common/infrastructure/redis/redis.module";
import { TokenService } from "./token/token.service";
import { AuthCacheService } from "./cashe/auth.cache.service";
import { AuthRepository } from "./repositories/auth.repository";
import { GrpcModule } from "@app/auth/infrastructure/grpc/grpc.module";
import { USER_SERVICE_NAME } from "@app/common/contracts/user/user.grpc.types";
import { EGrpcService } from "@app/common/contracts/types";
import { GrpcClientsService } from "@app/auth/infrastructure/grpc/grpc.service";
import { grpcHandler } from "./grpc";
import { authRepository } from "./repositories";
import { HashModule } from "@app/common/infrastructure/hash/hash.module";
import { HashService } from "@app/common/infrastructure/hash/hash.service";
@Module({
  imports: [
    PrismaModule.forRoot(AuthClient),
    GrpcModule.register(),
    RedisModule,
    HashModule,
    // TokenModule,
    CqrsModule,
  ],
  controllers: [],
  providers: [
    ...grpcHandler,
    ...authRepository,
    AuthPrismaService,
    TokenService,
    AuthCacheService,
    AuthRepository,
    GrpcClientsService,
    HashService,
  ],

  exports: [
    ...grpcHandler,
    ...authRepository,
    RedisModule,
    TokenService,
    HashService,
    CqrsModule,
    AuthPrismaService,
    AuthCacheService,

    GrpcClientsService,
  ],
})
export class InfrastructureModule {}
