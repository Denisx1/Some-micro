import { Controller, UseFilters } from '@nestjs/common';
import {
  HealthCheckRequest,
  HealthCheckResponse,
  Role,
  RoleServiceController,
} from 'libs/common/src/types/role';
import { GrpcMethod } from '@nestjs/microservices';

import { CreateRoleDto } from './dto/createRoleDto';
import { RoleService } from './role.service';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
import { RoleExceptionFilter } from './exception/extendedRpcException';

@Controller()
@UseFilters(new RoleExceptionFilter())
export class RoleController implements RoleServiceController {
  constructor(private readonly roleService: RoleService) {}

  @GrpcMethod('RoleService', 'GetDefaultRole')
  getDefaultRole(): Observable<Role> {
    return from(this.roleService.getDefaultRole());
  }
  @GrpcMethod('RoleService', 'CreateRole')
  createRole(request: CreateRoleDto): Observable<Role> {
    return from(this.roleService.createRole(request));
  }
  @GrpcMethod('RoleService', 'Health')
  health(): Observable<HealthCheckResponse> {
    return of({ status: 1 });
  }
}
