import { Injectable } from "@nestjs/common";
import {
  concat,
  EMPTY,
  finalize,
  from,
  Observable,
  of,
  ReplaySubject,
  switchMap,
  tap,
} from "rxjs";
import { StreamService } from "@app/common/system/stream/stream.manager.service";
import { SubscribeRequest } from "@app/common/contracts/notification/notification.grpc.types";
import { NotificationScope } from "@app/common/contracts/notification/enum";
import { NotificationRedis } from "../../infrastructure/notification.cashe";
import { NotFoundError } from "@app/common";

@Injectable()
export class SubScribeNotificationService {
  constructor(
    private readonly streamService: StreamService,
    private readonly notificationCache: NotificationRedis
  ) {}

  subscribe(payload: SubscribeRequest): Observable<any> {
    const { userId, scope } = payload;
    const personalStream$ = new ReplaySubject(1);
    this.streamService.registerUser(userId, personalStream$);
    return from(this.getDataByScope(userId, scope)).pipe(
      switchMap((initialData) => {
        // Если данных в Redis нет (initialData === null),
        // concat просто пропустит of(null) и перейдет к ожиданию personalStream$
        const initial$ = initialData ? of({ data: initialData }) : EMPTY;

        return concat(initial$, personalStream$.asObservable());
      })
    );
  }

  private async getDataByScope(id: number, scope: string): Promise<any> {
    if (scope === NotificationScope.CANDIDATE) {
      // Возвращаем данные сессии (например, токены регистрации)
      const session = await this.notificationCache.getSession(id);
      if (!session) throw new NotFoundError("RegSession");
      return session.registrationStatus;
    }
    if (scope === NotificationScope.AUTH) {
      const logined = await this.notificationCache.getLoginMetadata(id);
      if (!logined) throw new NotFoundError("User not logined");
    }
  }
}
