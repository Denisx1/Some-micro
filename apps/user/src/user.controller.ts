import { Controller, UseFilters } from '@nestjs/common';
import {
  FindOneUser,
  User,
  UserServiceController,
  VerifyUserResponce,
} from '@app/common/types/user';
import { GrpcMethod } from '@nestjs/microservices';

import { CandidateUserService } from './services/candidate.user.service';
import { GetUserService } from './services/get.user.service';
import { from, Observable } from 'rxjs';

import { CommonRpcExceptionFilter } from '@app/common';
import { CandidateDto } from '@app/common';

@Controller()
@UseFilters(new CommonRpcExceptionFilter('USER_SERVICE'))
export class UserController implements UserServiceController {
  constructor(
    private readonly createUserService: CandidateUserService,
    private readonly getUserService: GetUserService,
  ) {}
  @GrpcMethod('UserService', 'GetUser')
  getUser({ id }: FindOneUser): Observable<User> {
    return from(this.getUserService.getUserById(id));
  }
  @GrpcMethod('UserService', 'VerifyUser')
  verifyUser(request: CandidateDto): Observable<VerifyUserResponce> {
    return from(this.createUserService.verifyUser(request));
  }
}
