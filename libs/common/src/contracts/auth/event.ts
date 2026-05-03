import { ServiceEvent } from "@app/common/cqrs/base.event";
import {
  ICandidateTokenAssignedPayload,
  ICandidateVerified,
  ITokenPairCreatedContract,
  UpdateUserContract,
} from "./types";

export class ActionTokenCreatedEvent
  implements ServiceEvent<ICandidateTokenAssignedPayload>
{
  constructor(public readonly payload: ICandidateTokenAssignedPayload) {}
}

export class CandidateVerifiedEvent
  implements ServiceEvent<ICandidateVerified>
{
  constructor(public readonly payload: ICandidateVerified) {}
}
export class TokenPairCreatedEvent
  implements ServiceEvent<ITokenPairCreatedContract>
{
  constructor(public readonly payload: ITokenPairCreatedContract) {}
}
export class UserLoginedEvent {
  constructor(public readonly payload: UpdateUserContract) {}
}
export class UserLogoutedEvent {
  constructor(public readonly payload: UpdateUserContract) {}
}
export class UserPasswordApprowedEvent {
  constructor(public readonly payload: UpdateUserContract) {}
}
