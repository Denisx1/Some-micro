import { ConfigService } from "@nestjs/config";
import { GrpcOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export class GrpcConfig {
  static getServiceOptions(configService: ConfigService): GrpcOptions {
    const serviceName = configService.get<string>("SERVICE_NAME");
    const url = configService.get<string>(`${serviceName}_URL`);
    const protoPath = configService.get<string>(`${serviceName}_PROTO_PATH`);
    return {
      transport: Transport.GRPC,
      options: {
        url: url,
        package: serviceName.toLowerCase(),
        protoPath: join(process.cwd(), protoPath),
        loader: {
          keepCase: true,
          defaults: true,
          arrays: true,
          objects: true,
        },
      },
    };
  }
}

// export enum GRPC_PRISMA_SERVICES {
//   USER = "USER",
//   AUTH = "AUTH_SERVICE",
//   CUSTOMER = "CUSTOMER_SERVICE",
//   CLEANER = "CLEANER_SERVICE",
//   ORDER = "ORDER_SERVICE",
//   CHAT = "CHAT_SERVICE",
// }
// export enum GRPC_NON_PRISMA_SERVICES {
//   REGISTRATION = "REGISTRATION_SERVICE",
//   DISPATCHER_ORDER = "DISPATCHER_ORDER",
//   NOTIFICATION = "NOTIFICATION_SERVICE",
// }

// export enum GRPC_MONGO_SERVICES {
//   PROJECTION = "PROJECTION_SERVICE",
// }

// import { Module, DynamicModule } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { ClientsModule, Transport } from "@nestjs/microservices";

// import { GrpcClientsService } from "./grpc-clients.service";
// import { GRPC_NON_PRISMA_SERVICES, GRPC_PRISMA_SERVICES } from "./enum";
// type CommonServices = GRPC_PRISMA_SERVICES | GRPC_NON_PRISMA_SERVICES;
// @Module({})
// export class GrpcModule {
//   static register(services: CommonServices[]): DynamicModule {
//     return {
//       module: GrpcModule,
//       imports: [
//         ClientsModule.registerAsync(
//           services.map((service) => ({
//             name: service,
//             imports: [ConfigModule],
//             inject: [ConfigService],
//             useFactory: (configService: ConfigService) => ({
//               transport: Transport.GRPC,
//               options: {
//                 url: configService.get<string>(`${service}_URL`),
//                 package: service.toLowerCase(),
//                 protoPath:
//                   process.cwd() +
//                   configService.get<string>(`${service}_PROTO_PATH`),
//                 loader: {
//                   keepCase: true,
//                   defaults: true, // Это заставит Nest видеть jobs: []
//                   arrays: true, // Гарантирует, что это будет именно массив
//                 },
//               },
//             }),
//           }))
//         ),
//       ],
//       providers: [GrpcClientsService],
//       exports: [GrpcClientsService, ClientsModule],
//     };
//   }
// }

// import { Inject, Injectable, Optional } from "@nestjs/common";
// import { ClientGrpc } from "@nestjs/microservices";
// import { GRPC_PRISMA_SERVICES } from "./enum";
// import { UserServiceController } from "../../../../common/src/contracts/user/user.grpc.types";
// import { AuthServiceController } from "../../../../common/src/contracts/auth/auth.grpc.types";
// import { CleanerServiceController } from "../../../../common/src/contracts/cleaner/cleaner.grpc.types";
// import { CustomerServiceController } from "../../../../common/src/contracts/customer/customer.grpc.types";
// import { OrderServiceController } from "../../../../common/src/contracts/order/order.grpc.types";

// @Injectable()
// export class GrpcClientsService {
//   private readonly instances = new Map<string, any>();

//   constructor(
//     @Optional()
//     @Inject(GRPC_PRISMA_SERVICES.USER)
//     private readonly userClient?: ClientGrpc,
//     @Optional()
//     @Inject(GRPC_PRISMA_SERVICES.AUTH)
//     private readonly authClient?: ClientGrpc,
//     @Optional()
//     @Inject(GRPC_PRISMA_SERVICES.CUSTOMER)
//     private readonly customerClient?: ClientGrpc,
//     @Optional()
//     @Inject(GRPC_PRISMA_SERVICES.CLEANER)
//     private readonly cleanerClient?: ClientGrpc,
//     @Optional()
//     @Inject(GRPC_PRISMA_SERVICES.ORDER)
//     private readonly orderClient?: ClientGrpc
//   ) {}

//   private getService<T extends object>(
//     client: ClientGrpc | undefined,
//     serviceName: string
//   ): T {
//     if (!client) {
//       throw new Error(
//         `gRPC Client for ${serviceName} was not injected! Check your GrpcModule.register()`
//       );
//     }

//     if (!this.instances.has(serviceName)) {
//       this.instances.set(serviceName, client.getService<T>(serviceName));
//     }

//     return this.instances.get(serviceName);
//   }

//   get user(): UserServiceController {
//     return this.getService(this.userClient, "UserService");
//   }
//   get auth(): AuthServiceController {
//     return this.getService(this.authClient, "AuthService");
//   }
//   get customer(): CustomerServiceController {
//     return this.getService(this.customerClient, "CustomerService");
//   }
//   get cleaner(): CleanerServiceController {
//     return this.getService(this.cleanerClient, "CleanerService");
//   }
//   get order(): OrderServiceController {
//     return this.getService(this.orderClient, "OrderService");
//   }
// }
