import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  GRPC_NON_PRISMA_SERVICES,
  GRPC_PRISMA_SERVICES,
} from '@app/common/domain';
import { GrpcClientsService } from './grpc-clients.service';
type CommonServices = GRPC_PRISMA_SERVICES | GRPC_NON_PRISMA_SERVICES;
@Module({})
export class GrpcModule {
  static register(services: CommonServices[]): DynamicModule {
    return {
      module: GrpcModule,
      imports: [
        ClientsModule.registerAsync(
          services.map((service) => ({
            name: service,
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              transport: Transport.GRPC,
              options: {
                url: configService.get<string>(`${service}_URL`),
                package: service.toLowerCase(),
                protoPath:
                  process.cwd() +
                  configService.get<string>(`${service}_PROTO_PATH`),
                loader: {
                  keepCase: true,
                  defaults: true, // Это заставит Nest видеть jobs: []
                  arrays: true, // Гарантирует, что это будет именно массив
                },
              },
            }),
          })),
        ),
      ],
      providers: [GrpcClientsService],
      exports: [GrpcClientsService, ClientsModule],
    };
  }
}
