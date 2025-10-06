import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ROLE_SERVICE } from '@app/common/types/role';
import { PrismaService } from 'apps/user/src/services/prisma.service';
import { UserRepository } from './user.repository';
import { CandidateUserService } from './services/candidate.user.service';
import { GetUserService } from './services/get.user.service';
import { PasswordService } from '@app/common/system/password.service';
import { RedisModule } from 'libs/redis/src/redis.module';
@Module({
  imports: [
    RedisModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/apps/user/.env`,
    }),
    ClientsModule.registerAsync([
      {
        name: ROLE_SERVICE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: ROLE_SERVICE,
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
      {
        name: 'KAFKA_PRODUCER',
        useFactory: () => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'USER_SERVICE',
              brokers: ['kafka:9092'],
            },
            producerOnlyMode: true,
          },
        }),
      },
    ]),
  ],
  controllers: [UserController],
  providers: [
    GetUserService,
    CandidateUserService,
    PrismaService,
    PasswordService,
    UserRepository,
  ],
})
export class UserModule {}
