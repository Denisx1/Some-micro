import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { UserCasheService } from "./cashe/user.cache.service";
import { UserOutboxRepository } from "./repositories/user.outbox.repository";
import { UserRoleCashService } from "./cashe/role.cashe";
import { PrismaModule } from "@app/common";
import { UserRoleRepository } from "./repositories/user.role.repository";
import { RedisModule } from "@app/common/infrastructure/redis/redis.module";
import { UserPrismaService } from "@app/user";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaClient as UserClient } from "@app/user";
import { HashModule } from "@app/common/infrastructure/hash/hash.module";
import { HashService } from "@app/common/infrastructure/hash/hash.service";
import { userRedis } from "./cashe";
import { userRepositories } from "./repositories";

@Module({
  imports: [
    CqrsModule,
    PrismaModule.forRoot(UserClient),
    RedisModule,
    CqrsModule,
    HashModule,
  ],
  controllers: [],
  providers: [
    ...userRedis,
    ...userRepositories,
    UserPrismaService,
    HashService,
  ],
  exports: [
    UserPrismaService,
    CqrsModule,
    HashService,
    ...userRedis,
    ...userRepositories,
  ],
})
export class InfrastructureModule {}
