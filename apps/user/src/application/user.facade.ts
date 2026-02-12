import {
  BaseCandidate,
  CheckUniqueUser,
  GetUserQuery,
  PrivateUser,
  PublicUser,
  UpdateUser,
} from '@app/common/domain';
import { Injectable } from '@nestjs/common';
import { GetUserForAuthService } from './use-cases/get.user.for.auth';
import { CheckUserUniqueness } from './use-cases/check-user-uniqueness';
import { CreateUserService } from './use-cases/create.user.user-case';
import { GetUserPublicService } from './use-cases/get.user.public';
import { UpdateUserService } from './use-cases/update.user.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserFacade {
  constructor(
    private readonly getUserForAuthService: GetUserForAuthService,
    private readonly getPublicUserService: GetUserPublicService,
    private readonly updateUserService: UpdateUserService,
    private readonly checkUserUniquenessService: CheckUserUniqueness,
    private readonly createUserService: CreateUserService,
  ) {}

  getUserForAuth(request: GetUserQuery): Observable<PrivateUser> {
    return this.getUserForAuthService.execute(request);
  }

  updateUser(topic: string, message: UpdateUser): Observable<any> {
    return this.updateUserService.execute(topic, message);
  }

  getPublicUser(payload: GetUserQuery): Observable<PublicUser> {
    return this.getPublicUserService.execute(payload);
  }

  checkUserUniqueness(request: CheckUniqueUser): Observable<void> {
    return this.checkUserUniquenessService.execute(request);
  }
  createUser(request: BaseCandidate): Observable<void> {
    return this.createUserService.execute(request);
  }
}
