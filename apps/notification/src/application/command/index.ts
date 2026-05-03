import { PushGrpcNotificationHandler } from "./push.grpc.notification.handler";
import { SendEmailHandler } from "./send.email.handler";

export const NotificationHandlers = [
  SendEmailHandler,
  PushGrpcNotificationHandler,
];
