import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  GrpcModule,
  RedisModule,
  TokenModule,
} from '@app/common/infrastructure';
import {
  GRPC_NON_PRISMA_SERVICES,
  GRPC_PRISMA_SERVICES,
} from '@app/common/domain';
import {
  AuthGatewayController,
  CustomerController,
} from './presentation/controllers/http2';

import { GetawayUserController } from './presentation/controllers/http2/user.controller';
import { CleanerController } from './presentation/controllers/http2/cleaner.controller';
import { OrderGatewayController } from './presentation/controllers/http2/order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/gateway/.env`,
    }),
    GrpcModule.register([
      GRPC_PRISMA_SERVICES.AUTH,
      GRPC_PRISMA_SERVICES.USER,
      GRPC_PRISMA_SERVICES.CLEANER,
      GRPC_PRISMA_SERVICES.ORDER,
      GRPC_NON_PRISMA_SERVICES.REGISTRATION,
    ]),
    RedisModule,
    TokenModule,
  ],
  controllers: [
    CustomerController,
    AuthGatewayController,
    GetawayUserController,
    CleanerController,
    OrderGatewayController,
  ],
  providers: [],
})
export class GetawayModule {}
