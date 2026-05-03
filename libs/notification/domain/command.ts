import { SendRegistrationEmailPayload } from "@app/common";
import { EmailNotificationMap, GrpcStrategyPayload } from "./type";
import { ServiceResponse } from "@app/common/contracts/notification/notification.grpc.types";

export class SendEmailCommand<
  K extends keyof EmailNotificationMap = keyof EmailNotificationMap
> {
  constructor(
    public readonly subType: K,
    public readonly payload: EmailNotificationMap[K]
  ) {}
}
export class GrpcPushComand {
  constructor(
    public readonly subType: string,
    public readonly payload: GrpcStrategyPayload
  ) {}
}
