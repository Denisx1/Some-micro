import { Controller } from '@nestjs/common';
import {
  CreateRole,
  GetRoleFields,
  RoleServiceController,
} from '@app/common/domain';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RoleFacade } from '../../../application/role.facade';
import { Role } from '@app/common/infrastructure/prisma/generated/role';

@Controller()
export class RoleController implements RoleServiceController {
  constructor(private readonly roleFacade: RoleFacade) {}
  @GrpcMethod('RoleService', 'GetRoleById')
  getRoleById(request: GetRoleFields): Observable<Role> {
    return this.roleFacade.getRoleById(request);
  }
  @GrpcMethod('RoleService', 'CreateRole')
  createRole(request: CreateRole): Observable<Role> {
    return this.roleFacade.createRole(request);
  }
  @GrpcMethod('RoleService', 'GetRoleByName')
  getRoleByName(request: GetRoleFields): Observable<Role> {
    return this.roleFacade.getRoleByName(request);
  }
}
