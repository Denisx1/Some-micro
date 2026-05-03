import { NotificationTransport } from "@app/common/contracts/notification/enum";
import { GrpcPushComand, SendEmailCommand } from "./command";

export const NotificationCommandMap = {
  [NotificationTransport.EMAIL]: SendEmailCommand,
  [NotificationTransport.GRPC]: GrpcPushComand,
};
