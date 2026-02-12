import { Observable } from 'rxjs';
import { ActionPayload } from './auth';

export interface BaseCandidate {
  email: string;
  userName: string;
  password: string;
  role: string;
}
export type PublicCandidate = Omit<BaseCandidate, 'password'>;
export interface CandidateCashType {
  candidate: BaseCandidate;
  token: string;
}
export type ExtendedCandidate = Omit<BaseCandidate, 'password'> & {
  actionToken: string;
};

export interface RegistrationServiceController {
  initRegistration: (request: BaseCandidate) => Observable<void>;
  confirmRegistration: (request: ActionPayload) => Observable<void>;
}
