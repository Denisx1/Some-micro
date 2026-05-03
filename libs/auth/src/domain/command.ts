import {
  ConfirmRegistrationRequest,
  ForgotPasswordRequest,
  ICandidateRegisteredContract,
  ILoginUserContract,
  LoginRequest,
  LogoutRequest,
  RefreshTokensRequest,
  ResetPasswordRequest,
} from "@app/common";

export class CreateActionTokenCommand {
  constructor(public readonly payload: ICandidateRegisteredContract) {}
}
export class ConfirmRegistrationCommand {
  constructor(public readonly payload: ConfirmRegistrationRequest) {}
}
export class CompleteRegistrationCommand {
  constructor(public readonly payload: ILoginUserContract) {}
}
export class LoginComand {
  constructor(public readonly payload: LoginRequest) {}
}
export class LogoutCommand {
  constructor(public readonly payload: LogoutRequest) {}
}
export class RefreshCommand {
  constructor(public readonly payload: RefreshTokensRequest) {}
}
export class ForgotPasswordCommand {
  constructor(public readonly payload: ForgotPasswordRequest) {}
}
export class RessetPasswordCommand {
  constructor(public readonly payload: ResetPasswordRequest) {}
}
