import { CleanerProfileCreatedEvent } from "@app/common";
import { CostomerCreatedEvent } from "@app/common/contracts/customer/events";
import { ServiceEvent } from "@app/common/cqrs/base.event";
import { CompleteRegistrationCommand } from "@app/user/domain/commnad";
import { Injectable } from "@nestjs/common";
import { Saga, ICommand } from "@nestjs/cqrs";
import { map, Observable } from "rxjs";

@Injectable()
export class ProfileSaga {
  @Saga()
  profileService = (
    events$: Observable<ServiceEvent>
  ): Observable<ICommand> => {
    return events$.pipe(
      map((event) => {
        if (
          event instanceof CostomerCreatedEvent ||
          event instanceof CleanerProfileCreatedEvent
        ) {
          return new CompleteRegistrationCommand(event.payload);
        }
      })
    );
  };
}
