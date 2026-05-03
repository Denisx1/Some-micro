import {
  UserCreatedEvent,
  UserRegistrationStartedEvent,
} from "@app/common/contracts/user/user.events";
import { ServiceEvent } from "@app/common/cqrs/base.event";
import {
  CreateProfileCommand,
  GenerateActionTokenCommand,
} from "@app/user/domain/commnad";
import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { filter, map, Observable, tap } from "rxjs";

@Injectable()
export class UserSaga {
  @Saga()
  userServiceSaga = (
    events$: Observable<ServiceEvent>
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        if (event instanceof UserRegistrationStartedEvent) {
          return new GenerateActionTokenCommand(event.payload);
        }
        if (event instanceof UserCreatedEvent) {
          return new CreateProfileCommand(event.payload);
        }
      })
    );
  };
}
