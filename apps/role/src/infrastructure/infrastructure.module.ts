import { Module } from '@nestjs/common';
import { RoleRepository } from './repository/repository';
import { RoleCacheService } from './cashe/role.cashe.service';
import {
  PrismaModule,
  RedisModule,
  RoleClient,
} from '@app/common/infrastructure';

@Module({
  imports: [PrismaModule.forRoot(RoleClient), RedisModule],
  controllers: [],
  providers: [RoleRepository, RoleCacheService],
  exports: [RoleRepository, RoleCacheService],
})
export class InfrastructureModule {}
