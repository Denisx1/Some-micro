import {
  OrderNotifyPayload,
  SendRegistrationEmailPayload,
  UserRegistrationNotifyPayload,
} from "@app/common";
import { NotificationSubType } from "@app/common/contracts/notification/enum";
import { ServiceResponse } from "@app/common/contracts/notification/notification.grpc.types";
import { RegistrationStep } from "@app/common/contracts/user/enum";

export interface GrpcStrategyPayload {
  targetId: number[];
  payload: ServiceResponse;
}

export const TemplateMap = {
  [NotificationSubType.INIT_REGISTRATION]: {
    subject: "Email confirmation",
    templateName: "email-confirmation",
  },
  [NotificationSubType.FORGOT_PASSWORD]: {
    subject: "Forgot Password",
    templateName: "forgot-password",
  },
  [RegistrationStep.REGISTRATION_SUCCESS]: {
    subject: "Registration Success",
    templateName: "registration-success",
  },
};

export interface EmailNotificationMap {
  [NotificationSubType.INIT_REGISTRATION]: SendRegistrationEmailPayload;
}

export interface IGrpcHandler<T> {
  handle(payload: T): Promise<void>;
}
