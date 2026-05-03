export interface ICandidateTokenAssignedPayload {
  email: string;
  candidateId: number;
  actionToken: string;
}
export interface ICandidateVerified {
  email: string;
  role: string;
  candidateId: number;
}
export interface ILoginUserContract {
  candidateId: number;
  profileId: number;
  userId: number;
  role: string;
  tokenVersion: number;
}
export interface ITokenPairCreatedContract {
  userId: number;
  candidateId: number;
  accessToken: string;
  refreshToken: string;
}
export interface UpdateUserContract {
  subType: string;
  userId: number;
  password?: string;
}
export interface IUserLogoutedContract {
  subType: string;
  userId: number;
}
export interface IPasswordApprowedContract {
  userId: number;
  password: number;
}
