import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { GetawayRoleController } from './role.controller';
import { GetawayAuthController } from './auth.controller';
import { GetawayUserController } from './user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/gateway/.env`,
    }),
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            name: 'USER_SERVICE',
            transport: Transport.GRPC,
            options: {
              url: configService.get<string>('USER_SERVICE_URL'),
              package: 'user',
              protoPath:
                process.cwd() +
                configService.get<string>('USER_SERVICE_PROTO_PATH'),
            },
          };
        },
      },
      {
        name: 'AUTH_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: 'AUTH_SERVICE',
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('AUTH_SERVICE_URL'),
            package: 'auth',
            protoPath:
              process.cwd() +
              configService.get<string>('AUTH_SERVICE_PROTO_PATH'),
          },
        }),
      },
      {
        name: 'ROLE_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: 'ROLE_SERVICE',
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('ROLE_SERVICE_URL'),
            package: 'role',
            protoPath:
              process.cwd() +
              configService.get<string>('ROLE_SERVICE_PROTO_PATH'),
          },
        }),
      },
    ]),
  ],
  controllers: [
    GetawayAuthController,
    GetawayRoleController,
    GetawayUserController,
  ],
})
export class GetawayModule {}
