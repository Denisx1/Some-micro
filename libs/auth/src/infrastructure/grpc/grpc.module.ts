import { EGrpcService } from "@app/common";
import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { GrpcClientsService } from "./grpc.service";

@Module({})
export class GrpcModule {
  static register(): DynamicModule {
    const authServices = [
      EGrpcService.USER,
      EGrpcService.CLEANER,
      EGrpcService.CUSTOMER,
    ];
    return {
      module: GrpcModule,
      imports: [
        ClientsModule.registerAsync(
          authServices.map((service) => ({
            name: service,
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              transport: Transport.GRPC,
              options: {
                url: configService.get(`${service}_URL`),
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
          }))
        ),
      ],
      providers: [GrpcClientsService],
      exports: [GrpcClientsService, ClientsModule],
    };
  }
}
