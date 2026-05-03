import { Injectable } from "@nestjs/common";
import { ICommand, Saga } from "@nestjs/cqrs";
import { filter, map, Observable } from "rxjs";
import { ServiceEvent } from "@app/common/cqrs/base.event";
import {
  CleanerSelectedEvent,
  CreatedOrderEvent,
} from "@app/common/contracts/order";
import {
  InviteCleanerCommand,
  SearchCleanerCommand,
} from "@app/order/domain/command";

@Injectable()
export class OrderSaga {
  @Saga()
  orderServiceSaga = (
    events$: Observable<ServiceEvent>
  ): Observable<ICommand> => {
    return events$.pipe(
      filter((event) => event instanceof ServiceEvent),
      map((event) => {
        if (event instanceof CreatedOrderEvent) {
          return new SearchCleanerCommand(event.payload);
        }
        if (event instanceof CleanerSelectedEvent) {
          return new InviteCleanerCommand(event.payload);
        }
        // if (event instanceof CleanerBoundedToOrderEvent) {
        //   return new CreateChatCommand(event.payload);
        // }
      })
    );
  };
}
