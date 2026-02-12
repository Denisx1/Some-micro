import {
  RoleServiceController,
  UserServiceController,
  GRPC_PRISMA_SERVICES,
  AuthServiceController,
  RegistrationServiceController,
  CustomerServiceController,
} from '@app/common/domain';
import { GRPC_NON_PRISMA_SERVICES } from '@app/common/domain/enums';
import { CleanerServiceController } from '@app/common/domain/types/grpc.services.types/cleaner';
import { OrderServiceController } from '@app/common/domain/types/grpc.services.types/order';
import { Inject, Injectable, Optional } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GrpcClientsService {
  private userService: UserServiceController;
  private roleService: RoleServiceController;
  private authService: AuthServiceController;
  private customerService: CustomerServiceController;
  private cleanerService: CleanerServiceController;
  private registrationService: RegistrationServiceController;
  private orderService: OrderServiceController;

  constructor(
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.USER)
    private readonly userClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.ROLE)
    private readonly roleClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.AUTH)
    private readonly authClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.CUSTOMER)
    private readonly customerClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.CLEANER)
    private readonly cleanerClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_PRISMA_SERVICES.ORDER)
    private readonly orderClient?: ClientGrpc,
    @Optional()
    @Inject(GRPC_NON_PRISMA_SERVICES.REGISTRATION)
    private readonly registrationClient?: ClientGrpc,
  ) {}

  get role(): RoleServiceController {
    if (!this.roleService && this.roleClient) {
      this.roleService =
        this.roleClient.getService<RoleServiceController>('RoleService');
    }
    return this.roleService;
  }

  get user(): UserServiceController {
    if (!this.userService && this.userClient) {
      this.userService =
        this.userClient.getService<UserServiceController>('UserService');
    }
    return this.userService;
  }

  get auth(): AuthServiceController {
    if (!this.authService && this.authClient) {
      this.authService =
        this.authClient.getService<AuthServiceController>('AuthService');
    }
    return this.authService;
  }
  get registration(): RegistrationServiceController {
    if (!this.registrationService && this.registrationClient) {
      this.registrationService =
        this.registrationClient.getService<RegistrationServiceController>(
          'RegistrationService',
        );
    }
    return this.registrationService;
  }
  get customer(): CustomerServiceController {
    if (!this.customerService && this.customerClient) {
      this.customerService =
        this.customerClient.getService<CustomerServiceController>(
          'CustomerService',
        );
    }
    return this.customerService;
  }

  get cleaner(): CleanerServiceController {
    if (!this.cleanerService && this.cleanerClient) {
      this.cleanerService =
        this.cleanerClient.getService<CleanerServiceController>(
          'CleanerService',
        );
    }
    return this.cleanerService;
  }
  get order(): OrderServiceController {
    if (!this.orderService && this.orderClient) {
      this.orderService =
        this.orderClient.getService<OrderServiceController>('OrderService');
    }
    return this.orderService;
  }
}
