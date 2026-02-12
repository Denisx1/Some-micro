import { Injectable } from '@nestjs/common';
import { CreateRoleService } from './use-cases/create.role.service';
import { CreateRole, GetRoleFields } from '@app/common/domain';
import { GetRoleByIdService } from './use-cases/get.by.id.service';
import { GetRoleByNameService } from './use-cases/get.role.by.name';
import { Observable } from 'rxjs';
import { Role } from '@app/common/infrastructure/prisma/generated/role';

@Injectable()
export class RoleFacade {
  constructor(
    private readonly createRoleService: CreateRoleService,
    private readonly getRoleByIdService: GetRoleByIdService,
    private readonly getRoleByNAmeService: GetRoleByNameService,
  ) {}
  getRoleByName(request: GetRoleFields): Observable<Role> {
    return this.getRoleByNAmeService.execute(request);
  }
  createRole(request: CreateRole): Observable<Role> {
    return this.createRoleService.execute(request);
  }
  getRoleById(request: GetRoleFields): Observable<Role> {
    return this.getRoleByIdService.execute(request);
  }
}
