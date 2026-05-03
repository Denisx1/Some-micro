import { SubscribeRequest } from "@app/common/contracts/notification/notification.grpc.types";
import { GrpcClientInterceptor } from "@app/common/system/interceptor/common.interceptor";
import { Controller, UseInterceptors } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { GrpcMethod } from "@nestjs/microservices";
import { SubScribeNotificationService } from "apps/notification/src/application/command/subscribe.notification.comand";
import { Observable } from "rxjs";

@Controller()
export class GrpcController {
  constructor(
    private readonly subScribeNotificationService: SubScribeNotificationService
  ) {}

  @GrpcMethod("NotificationService", "SubscribeNotifications")
  subscribeStreams(payload: SubscribeRequest): Observable<any> {
    return this.subScribeNotificationService.subscribe(payload);
  }
}
