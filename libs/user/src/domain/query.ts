import { FindOneUserRequest } from "@app/common/contracts/user/user.grpc.types";

export class FindPrivateUserQuery {
  constructor(public readonly payload: FindOneUserRequest) {}
}
export class FindPublicUserQuery {
  constructor(public readonly payload: FindOneUserRequest) {}
}
