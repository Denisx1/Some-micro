import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { GetUserQuery, PrivateUser, UserBuilder } from '@app/common/domain';
import { User } from '@app/common/infrastructure/prisma/generated/user';
import { from, map, Observable, switchMap } from 'rxjs';
import { NotFoundError } from '@app/common/system';
import { GrpcClientsService } from '@app/common/infrastructure';

@Injectable()
export class GetUserForAuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly grpcClientsService: GrpcClientsService,
  ) {}

  execute(request: GetUserQuery): Observable<PrivateUser> {
    return from(this.userRepository.findByCriteria(request)).pipe(
      map((user: User) => {
        if (!user) throw new NotFoundError('User');
        return user;
      }),
      switchMap((user: User) => {
        return this.grpcClientsService.role
          .getRoleById({ id: user.roleId })
          .pipe(map((role) => new UserBuilder(user).buildForAuth(role.name)));
      }),
    );
  }
}
