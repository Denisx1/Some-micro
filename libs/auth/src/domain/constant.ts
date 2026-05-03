import { AuthCommand } from "@app/common/contracts/auth/enum";
import {
  CompleteRegistrationCommand,
  CreateActionTokenCommand,
} from "./command";

export const CommandMap = {
  [AuthCommand.CREATE_ACTION_TOKEN]: CreateActionTokenCommand,
  [AuthCommand.CREATE_TOKEN_PAIR]: CompleteRegistrationCommand,
};
