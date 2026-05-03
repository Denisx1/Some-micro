export enum NotificationTransport {
  GRPC = "GRPC",
  EMAIL = "EMAIL",
}

export enum NotificationScope {
  CANDIDATE = "CANDIDATE",
  AUTH = "AUTH",
}

export enum NotificationSubType {
  INIT_REGISTRATION = "INIT_REGISTRATION",
  REGISTRATION_PROCESS = "REGISTRATION_PROCESS",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  ORDER_PROCESS = "ORDER_PROCESS",
}
