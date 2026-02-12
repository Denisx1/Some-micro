import { Observable } from 'rxjs';

export const AUTH_SERVICE = 'AUTH_SERVICE';
export type CommonTokenData = ActionTokenPayload | TokenPairData;
export interface ActionTokenPayload {
  id?: number;
  userName: string;
  email?: string;
  password?: string;
  actionType?: string;
  role?: string;
}
export type TransportAuth = Required<
  ForgotPasswordData & { actionToken: string }
>;
export interface TokenPairData {
  userId: number;
  roleName: string;
  tokenVersion: number;
  deviceName: string;
  profileId: number;
}
export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}
export interface ForgotPasswordData {
  email?: string;
  userName?: string;
}
export interface LoginData {
  email?: string;
  userName?: string;
  password: string;
  deviceName: string;
}
export interface LogoutData {
  userId: number;
  deviceName: string;
}
export type SetPassordData = { actionToken: string; password: string };
export type SetPasswordType = ActionPayload & { password: string };
export interface ActionPayload {
  actionToken: string;
}
export interface AuthMetadata {
  userId: number;
  roleName: string;
  tokenVersion: number;
  profileId: number;
  deviceName: string;
}
export type AuthToCreate = Omit<AuthPayload, 'id'>;
export interface AuthPayload {
  id: number;
  userId: number;
  deviceId: string;
  deviceName: string;
  refreshHash: string;
}

export interface RefreshData {
  userId: number;
  tokenVersion: number;
  roleName: string;
  deviceName: string;
  profileId: number;
}

export interface AuthServiceController {
  login: (request: LoginData) => Observable<TokenPair>;
  logout: (request: LogoutData) => Observable<void>;
  refresh: (request: RefreshData) => Observable<TokenPair>;
  forgotPassword: (request: ForgotPasswordData) => Observable<void>;
  resetPassword: (request: ActionPayload) => Observable<void>;
}
