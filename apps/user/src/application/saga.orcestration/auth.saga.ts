import {
  ActionTokenCreatedEvent,
  CandidateVerifiedEvent,
  TokenPairCreatedEvent,
  UserLoginedEvent,
  UserLogoutedEvent,
  UserPasswordApprowedEvent,
} from "@app/common/contracts/auth/event";
import { ServiceEvent } from "@app/common/cqrs/base.event";
import {
  AttachTokenAndNotifyCommand,
  CreateUserCommand,
  NotifyRegistrationSuccessCommand,
  UpdateUserCommand,
} from "@app/user/domain/commnad";
import { Injectable } from "@nestjs/common";
import { ICommand, Saga } from "@nestjs/cqrs";
import { map, Observable } from "rxjs";

@Injectable()
export class AuthSaga {
  @Saga()
  authServiceSaga = (
    events$: Observable<ServiceEvent>
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        if (event instanceof ActionTokenCreatedEvent) {
          return new AttachTokenAndNotifyCommand(event.payload);
        }
        if (event instanceof CandidateVerifiedEvent) {
          return new CreateUserCommand(event.payload);
        }
        if (event instanceof TokenPairCreatedEvent) {
          return new NotifyRegistrationSuccessCommand(event.payload);
        }
        if (event instanceof UserLoginedEvent) {
          return new UpdateUserCommand(event.payload);
        }
        if (event instanceof UserLogoutedEvent) {
          return new UpdateUserCommand(event.payload);
        }
        if (event instanceof UserPasswordApprowedEvent) {
          return new UpdateUserCommand(event.payload);
        }
      })
    );
  };
}
