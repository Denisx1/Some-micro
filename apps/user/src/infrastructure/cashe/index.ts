import { CandidateCasheService } from "./candidate.cashe.service";
import { UserRoleCashService } from "./role.cashe";
import { UserCasheService } from "./user.cache.service";

export const userRedis = [
  CandidateCasheService,
  UserRoleCashService,
  UserCasheService,
];
