import { RedisService } from '@app/common/infrastructure';
import { StreamService } from '@app/common/system/stream/stream.manager.service';
import { Injectable } from '@nestjs/common';
import {
  defer,
  finalize,
  from,
  map,
  merge,
  mergeMap,
  Observable,
  Subject,
  tap,
} from 'rxjs';

@Injectable()
export class NotificationService {
  constructor(
    private readonly streamService: StreamService,
    private readonly redisService: RedisService,
  ) {}
  getCustomerStream(customerId: number): Observable<any> {
    const personalStream$ = new Subject<any>();

    // Регистрируем кастомера в общей Map
    this.streamService.registerUser(customerId, personalStream$);

    return merge(
      this.getMissedEvents(customerId),
      this.getPersonalNotifications(personalStream$),
    ).pipe(finalize(() => this.streamService.unregisterUser(customerId)));
  }
  private getPersonalNotifications(personalStream$: Subject<any>) {
    return personalStream$.pipe(
      map((event) => ({
        type: event.type,
        chatData: event.data,
      })),
    );
  }
  private getMissedEvents(customerId: number): Observable<any> {
    const key = `mailbox:customer:${customerId}`;

    return defer(() => from(this.redisService.popAll(key))).pipe(
      tap((value)=>console.log(value)),
      mergeMap((events) => from(events)),
      map((event: any) => ({
        type: event.type,
        chatData: event.data,
      })),
    );
  }

  //   private getInitialState(customerId: number) {
  //     // Тут можно вернуть текущие заказы кастомера, чтобы он видел их при входе
  //     return from(this.orderFacade.getActiveOrders(customerId)).pipe(
  //       map((orders) => ({ activeOrders: orders })),
  //     );
  //   }
}
