import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repository/repository';
import { from, mergeMap, Observable, of, throwError } from 'rxjs';
import { RoleName } from '../../../../../libs/common/src/domain/enums/role.permission';
import { Role } from '@app/common/infrastructure/prisma/generated/role';
import { NotFoundError } from '@app/common/system/error/domain.error';
import { GetRoleFields } from '@app/common/domain';

@Injectable()
export class GetRoleByNameService {
  constructor(private readonly roleRepository: RoleRepository) {}
  execute(payload: GetRoleFields): Observable<Role> {
    return from(this.roleRepository.getByField({ name: payload.name! })).pipe(
      mergeMap((role) => {
        if (!role) return throwError(() => new NotFoundError(payload.name));
        return of(role);
      }),
    );
  }
}
