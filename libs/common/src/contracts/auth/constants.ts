import { AuthEvent } from "./enum";
import {
  ActionTokenCreatedEvent,
  CandidateVerifiedEvent,
  TokenPairCreatedEvent,
  UserLoginedEvent,
  UserLogoutedEvent,
  UserPasswordApprowedEvent,
} from "./event";

export const AuthEventMap = {
  [AuthEvent.ACTION_TOKEN_CREATED]: ActionTokenCreatedEvent,
  [AuthEvent.CANDIDATE_VERIFIED]: CandidateVerifiedEvent,
  [AuthEvent.TOKEN_PAIR_CREATED]: TokenPairCreatedEvent,
  [AuthEvent.USER_LOGINED]: UserLoginedEvent,
  [AuthEvent.USER_LOGOUTED]: UserLogoutedEvent,
  [AuthEvent.PASSWORD_APPROWED]: UserPasswordApprowedEvent,
};
