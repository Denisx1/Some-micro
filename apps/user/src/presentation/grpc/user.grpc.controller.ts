import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import {
  CheckUniqueUser,
  GetUserQuery,
  PrivateUser,
  PublicUser,
} from '@app/common/domain/types/grpc.services.types/user';
import { GrpcMethod } from '@nestjs/microservices';
import { BaseCandidate } from '@app/common/domain';
import { Observable } from 'rxjs';
import { UserFacade } from '../../application/user.facade';
import { GrpcClientInterceptor } from '@app/common/system/interceptor/common.interceptor';

@Controller()
@UseInterceptors(GrpcClientInterceptor)
export class UserGrpcController {
  constructor(private readonly userFacade: UserFacade) {}
  @GrpcMethod('UserService', 'GetUserForAuth')
  getUserForAuth(request: GetUserQuery): Observable<PrivateUser> {
    return this.userFacade.getUserForAuth(request);
  }
  @GrpcMethod('UserService', 'GetUserPublic')
  getPublicUser(request: GetUserQuery): Observable<PublicUser> {
    return this.userFacade.getPublicUser(request);
  }
  @GrpcMethod('UserService', 'CheckUserUniqueness')
  checkUserUniqueness(request: CheckUniqueUser): Observable<void> {
    return this.userFacade.checkUserUniqueness(request);
  }
  @GrpcMethod('UserService', 'CreateUser')
  createUser(request: BaseCandidate): Observable<void> {
    return this.userFacade.createUser(request);
  }
}
