// import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// import { ClientGrpc } from '@nestjs/microservices';
// import {
//   Role,
//   ROLE_SERVICE,
//   RoleServiceController,
// } from 'libs/common/src/types/role';
// import { firstValueFrom, Observable } from 'rxjs';

// import { UserRepository } from '../user.repository';

// import { UserExceptionFilter } from '../exception/user.excepion';
// import { status as GrpcStatus } from '@grpc/grpc-js';
// import { PasswordService } from './password.service';

// @Injectable()
// export class UserRoleService implements OnModuleInit {
//   private roleService: RoleServiceController;
//   constructor(
//     @Inject(ROLE_SERVICE) private readonly client: ClientGrpc,
//     private readonly userRepository: UserRepository,
//     private readonly passwordService: PasswordService,
//   ) {}

//   onModuleInit() {
//     this.roleService =
//       this.client.getService<RoleServiceController>('RoleService');
//   }

//   public async getDefaultRole(): Promise<number> {
//     const observableRole: Observable<number> = this.roleService.getDefaultRole(
//       {},
//     );
//     const role: number = await firstValueFrom(observableRole);
//     if (!role) {
//       throw new UserExceptionFilter(GrpcStatus.NOT_FOUND, {
//         field: 'Role',
//         message: 'Role not found',
//         context: 'UserService',
//       });
//     }
//     return role;
//   }
// }
