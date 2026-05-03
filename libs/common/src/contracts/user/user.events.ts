import { ServiceEvent } from "@app/common/cqrs/base.event";
import { ICandidateRegisteredContract, IUserCreatedContract } from "./types";

export class UserRegistrationStartedEvent
  implements ServiceEvent<ICandidateRegisteredContract>
{
  constructor(public readonly payload: ICandidateRegisteredContract) {}
}
export class UserCreatedEvent implements ServiceEvent<IUserCreatedContract> {
  constructor(public readonly payload: IUserCreatedContract) {}
}
