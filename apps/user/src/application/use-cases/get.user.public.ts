import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { GetUserQuery, PublicUser, UserBuilder } from '@app/common/domain';
import { User } from '@app/common/infrastructure/prisma/generated/user';
import { from, map, Observable, switchMap, tap } from 'rxjs';
import { GrpcClientsService } from '@app/common/infrastructure';
import { NotFoundError } from '@app/common/system';

@Injectable()
export class GetUserPublicService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly grpcClientsService: GrpcClientsService,
  ) {}
  public execute(request: GetUserQuery): Observable<PublicUser> {
    return from(this.userRepository.findByCriteria(request)).pipe(
      map((user: User) => {
        if (!user) throw new NotFoundError('User');
        return user;
      }),
      switchMap((user: User) => {
        return this.grpcClientsService.role
          .getRoleById({ id: user.roleId })
          .pipe(map((role) => new UserBuilder(user).buildForPublic(role.name)));
      }),
    );
  }
}
