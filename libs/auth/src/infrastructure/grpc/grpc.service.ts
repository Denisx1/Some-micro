import { CustomerServiceClient, EGrpcService } from "@app/common";
import { CleanerServiceClient } from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { UserServiceClient } from "@app/common/contracts/user/user.grpc.types";
import { Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";

@Injectable()
export class GrpcClientsService {
  private readonly instances = new Map<string, any>();

  constructor(
    @Inject(EGrpcService.USER)
    private readonly userClient: ClientGrpc,
    @Inject(EGrpcService.CUSTOMER)
    private readonly customerClient?: ClientGrpc,
    @Inject(EGrpcService.CLEANER)
    private readonly cleanerClient?: ClientGrpc
  ) {}

  private getService<T extends object>(
    client: ClientGrpc | undefined,
    serviceName: string
  ): T {
    if (!client) {
      throw new Error(
        `gRPC Client for ${serviceName} was not injected! Check your GrpcModule.register()`
      );
    }

    if (!this.instances.has(serviceName)) {
      this.instances.set(serviceName, client.getService<T>(serviceName));
    }

    return this.instances.get(serviceName);
  }

  get user(): UserServiceClient {
    return this.getService(this.userClient, "UserService");
  }
  get customer(): CustomerServiceClient {
    return this.getService(this.customerClient, "CustomerService");
  }
  get cleaner(): CleanerServiceClient {
    return this.getService(this.cleanerClient, "CleanerService");
  }
}
