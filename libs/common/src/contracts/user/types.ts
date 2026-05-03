import { ICleanerProfile } from "../cleaner";
import { CreateRequest } from "./user.grpc.types";
export type ICandidateRegisteredContract = {
  email: string;
  candidateId: number;
  actionType: string;
};
export interface SendRegistrationEmailPayload {
  userName: string;
  email: string;
  actionToken: string;
}

export interface UserRegistrationNotifyPayload {
  targetId: number[];
  step: string;
  registration?: { accessToken: string; refreshToken: string };
  progress: number;
  message: string;
}

export interface OrderNotifyPayload {
  targetId: number[];
  step: string;
  order?: { candidates: { list: ICleanerProfile[] } };
  progress: number;
  message: string;
}
export interface OrderNotifyPayload2 {
  step: string;
  payload?: { candidates: ICleanerProfile[] };
  message: string;
  progress: number;
}

export type UserRegistrationNotifyPayload2 = Omit<
  UserRegistrationNotifyPayload,
  "targetId"
>;

export interface CandidateCashType {
  candidate: ICreateCandidate;
  actionToken?: string;
  registrationStatus: RegistrationStatus;
}
export interface RegistrationStatus {
  step: string;
  progress: number;
  message: string;
}
export interface IProfileCreatedContract {
  userId: number;
  profileId: number;
  candidateId: number;
}

export type ICreateCandidate = Omit<CreateRequest, "role"> & {
  roleId: number;
};
export interface IUserCreatedContract {
  userId: number;
  role: string;
  candidateId: number;
}
export type ICreateProfileContract = Omit<IUserCreatedContract, "role">;
