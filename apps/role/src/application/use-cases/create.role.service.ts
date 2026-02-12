import { Injectable } from '@nestjs/common';
import { CreateRole } from '@app/common/domain';
import { RoleRepository } from '../../infrastructure/repository/repository';
import { from, mergeMap, Observable, of, throwError } from 'rxjs';
import { Role } from '@app/common/infrastructure/prisma/generated/role';
import { NotFoundError } from '@app/common/system/error/domain.error';

@Injectable()
export class CreateRoleService {
  constructor(private readonly roleRepository: RoleRepository) {}
  execute(newRole: CreateRole): Observable<Role> {
    return from(this.roleRepository.getByField({ name: newRole.name })).pipe(
      mergeMap((existingRole) => {
        if (existingRole) {
          throw new NotFoundError(newRole.name);
        }
        return of(newRole);
      }),
      mergeMap((roleDto) => this.roleRepository.create(roleDto)),
    );
  }
}
