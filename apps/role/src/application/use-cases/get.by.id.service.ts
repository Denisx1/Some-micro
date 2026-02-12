import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repository/repository';
import { RoleCacheService } from '../../infrastructure/cashe/role.cashe.service';
import { first, from, map, Observable, of, switchMap, tap } from 'rxjs';

import { Role } from '@app/common/infrastructure/prisma/generated/role';
import { NotFoundError } from '@app/common/system/error/domain.error';
import { GetRoleFields } from '@app/common/domain';

@Injectable()
export class GetRoleByIdService {
  constructor(
    private readonly roleRepository: RoleRepository,
    private readonly roleCasheService: RoleCacheService,
  ) {}

  execute(payload: GetRoleFields): Observable<Role> {
    return from(this.roleCasheService.getRoleFromRedis(payload.id)).pipe(
      map((roleChashed: Role | null) => {
        if (roleChashed) return of(roleChashed);
      }),
      switchMap(() => {
        return from(this.roleRepository.getByField(payload)).pipe(
          map((roleFromDb: Role | null) => {
            if (!roleFromDb) throw new NotFoundError('Role');
            return roleFromDb;
          }),
          tap((roleFromDb) => {
            from(this.roleCasheService.setRoleToRedis(roleFromDb))
              .pipe(first())
              .subscribe();
          }),
        );
      }),
    );
  }
}
