import { Controller, UseInterceptors } from "@nestjs/common";
import { GrpcClientInterceptor } from "@app/common/system/interceptor/common.interceptor";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { GrpcMethod } from "@nestjs/microservices";
import {
  CreateRequest,
  FindOneUserRequest,
  PrivateUser,
  PublicUser,
  UserServiceController,
} from "@app/common/contracts/user/user.grpc.types";
import { CreateCandidateCommand } from "@app/user/domain/commnad";
import {
  FindPrivateUserQuery,
  FindPublicUserQuery,
} from "@app/user/domain/query";

@Controller()
@UseInterceptors(GrpcClientInterceptor)
export class UserGrpcController implements UserServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}
  @GrpcMethod("UserService", "CreateCandidate")
  async createCandidate(candidate: CreateRequest) {
    const conidateId = await this.commandBus.execute(
      new CreateCandidateCommand(candidate)
    );
    return { success: true, id: conidateId };
  }
  @GrpcMethod("UserService", "FindPrivateUser")
  async findPrivateUser(payload: FindOneUserRequest): Promise<PrivateUser> {
    return await this.queryBus.execute(new FindPrivateUserQuery(payload));
  }
  @GrpcMethod("UserService", "FindPublicUser")
  async findPublicUser(payload: FindOneUserRequest): Promise<PublicUser> {
    return await this.queryBus.execute(new FindPublicUserQuery(payload));
  }
  // @GrpcMethod("UserService", "GetUserForAuth")
  // getUserForAuth(request: GetUserQuery): Observable<PrivateUser> {
  //   return this.userFacade.getUserForAuth(request);
  // }
  // @GrpcMethod("UserService", "GetUserPublic")
  // getPublicUser(request: GetUserQuery): Observable<PublicUser> {
  //   return this.userFacade.getPublicUser(request);
  // }
  // @GrpcMethod("UserService", "CheckUserUniqueness")
  // checkUserUniqueness(request: CheckUniqueUser): Observable<void> {
  //   return this.userFacade.checkUserUniqueness(request);
  // }
  // @GrpcMethod("UserService", "CreateUser")
  // createUser(request: BaseCandidate): Observable<void> {
  //   return this.userFacade.createUser(request);
  // }
}
