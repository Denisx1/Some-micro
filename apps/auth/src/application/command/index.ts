import { ConfirmRegistrationHandler } from "./confirm.registration.handler";
import { CreateActionTokenHandler } from "./create.action.token.handler";
import { CompleteRegistrationHandler } from "./complete.registration.handler";
import { LoginHandler } from "./login.handler";
import { LogoutHandler } from "./logout.handler";
import { RefreshHandler } from "./refresh.handler";
import { ForgotPasswordHandler } from "./forgor.password.handler";
import { RessetPasswordHandler } from "./reset.password.handler";

export const commandHandlers = [
  CreateActionTokenHandler,
  ConfirmRegistrationHandler,
  CompleteRegistrationHandler,
  LoginHandler,
  LogoutHandler,
  RefreshHandler,
  ForgotPasswordHandler,
  RessetPasswordHandler,
];
