import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { CheckUniqueUser } from '@app/common/domain';
import { from, map, Observable, tap } from 'rxjs';
import { AlreadyExistError } from '@app/common/system';

@Injectable()
export class CheckUserUniqueness {
  constructor(private readonly userRepository: UserRepository) {}

  execute(userData: CheckUniqueUser): Observable<void> {
    return from(this.userRepository.findByCriteria(userData)).pipe(
      map((user) => {
        if (!user) return null;
        throw new AlreadyExistError('User');
      }),
    );
  }
}
