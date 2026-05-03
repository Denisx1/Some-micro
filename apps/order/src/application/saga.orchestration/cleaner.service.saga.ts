import {
  CleanerAcceptedEvent,
  CleanerInvitedEvent,
  CleanerNotFoundEvent,
  CleanerRejectedEvent,
  CleanerReservedEvent,
} from "@app/common";
import { ServiceEvent } from "@app/common/cqrs/base.event";
import { Injectable } from "@nestjs/common";
import { ICommand, Saga } from "@nestjs/cqrs";
import {
  AcceptOrderCommand,
  CleanerNotFoundCommand,
  CreateInvitationsCommand,
  DeclineCleanerCommand,
  NotifyInvitationsCommand,
} from "libs/order/src/domain/command";
import { filter, map, Observable } from "rxjs";

@Injectable()
export class CleanerSaga {
  @Saga()
  cleanerServiceSaga = (
    events$: Observable<ServiceEvent>
  ): Observable<ICommand> => {
    return events$.pipe(
      filter((event) => event instanceof ServiceEvent),

      map((event) => {
        if (event instanceof CleanerReservedEvent) {
          return new CreateInvitationsCommand(event.payload);
        }
        if (event instanceof CleanerNotFoundEvent) {
          return new CleanerNotFoundCommand(event.payload.orderId);
        }
        if (event instanceof CleanerInvitedEvent) {
          return new NotifyInvitationsCommand(event.payload);
        }
        if (event instanceof CleanerAcceptedEvent) {
          return new AcceptOrderCommand(event.payload);
        }
        if (event instanceof CleanerRejectedEvent) {
          return new DeclineCleanerCommand(event.payload);
        }
      })
    );
  };
}
