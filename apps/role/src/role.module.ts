import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { ConfigModule } from '@nestjs/config';
import { RoleRepository } from './repository';
import { PrismaService } from 'apps/role/src/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/role/.env`,
    }),
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository, PrismaService],
})
export class RoleModule {}
