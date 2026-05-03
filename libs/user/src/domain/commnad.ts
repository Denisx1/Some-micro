import {
  ICandidateTokenAssignedPayload,
  ICandidateVerified,
  ITokenPairCreatedContract,
  UpdateUserContract,
} from "@app/common/contracts/auth/types";
import {
  ICandidateRegisteredContract,
  IProfileCreatedContract,
  IUserCreatedContract,
} from "@app/common/contracts/user/types";
import { CreateRequest } from "@app/common/contracts/user/user.grpc.types";

export class GenerateActionTokenCommand {
  constructor(public readonly payload: ICandidateRegisteredContract) {}
}

export class AttachTokenAndNotifyCommand {
  constructor(public readonly payload: ICandidateTokenAssignedPayload) {}
}

export class CreateAdminCommand {}
export class CreateRoleCommand {}

export class CreateCandidateCommand {
  constructor(public readonly candidate: CreateRequest) {}
}
export class CreateUserCommand {
  constructor(public readonly payload: ICandidateVerified) {}
}

export class CreateProfileCommand {
  constructor(public readonly payload: IUserCreatedContract) {}
}

export class CompleteRegistrationCommand {
  constructor(public readonly payload: IProfileCreatedContract) {}
}

export class NotifyRegistrationSuccessCommand {
  constructor(public readonly payload: ITokenPairCreatedContract) {}
}

export class UpdateUserCommand {
  constructor(public readonly payload: UpdateUserContract) {}
}
