import { DynamicModule, Global, Module, Type } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
@Global()
@Module({})
export class PrismaModule {
  static forRoot<T>(ClientClass: Type<T>): DynamicModule {
    return {
      module: PrismaModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: 'PRISMA_CLIENT_INSTANCE',
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return new ClientClass({
              datasources: {
                db: { url: configService.get('DATABASE_URL') },
              },
            });
          },
        },
        PrismaService,
      ],
      exports: [PrismaService],
    };
  }
}
