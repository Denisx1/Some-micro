import { AttachTokenHandler } from "./attach.token.handler";
import { CreateAdminHandler } from "./create.admin.handler";
import { CreateCandidateHandler } from "./create.candidate.handler";
import { CreateProfileHandler } from "./create.profile.handler";
import { CreateRoleHandler } from "./create.role.handler";
import { CreateUserHandler } from "./create.user.handler";
import { CompleteRegistrationhandler } from "./finalize.registration.handler";
import { GenerateActionTokenHandler } from "./generate.action.token.handler";
import { NotifyRegistrationSuccessHandler } from "./registration.success.handler";
import { UpdateUserHandler } from "./update.user.on.login.handler";

export const commandHandler = [
  CreateRoleHandler,
  CreateAdminHandler,
  CreateCandidateHandler,
  GenerateActionTokenHandler,
  AttachTokenHandler,
  CreateUserHandler,
  CreateProfileHandler,
  CompleteRegistrationhandler,
  NotifyRegistrationSuccessHandler,
  UpdateUserHandler,
];
