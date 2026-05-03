import { Customer, TokenResponse } from "@app/common";
import { Observable } from "rxjs";

export const AUTH_SERVICE = "AUTH_SERVICE";
export type CommonTokenData = ActionTokenPayload | TokenPairData;
export interface ActionTokenPayload {
  candidateId?: number;
  id?: number;
  userName?: string;
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
  role: string;
  tokenVersion: number;
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
export interface LogoutData {
  userId: number;
  deviceName: string;
}
export type SetPassordData = { actionToken: string; password: string };
export type SetPasswordType = ActionPayload & { password: string };
export interface ActionPayload {
  actionToken: string;
}
export interface ILoginMetadata {
  userId: number;
  eventType: string;
  tokens: TokenResponse;
  candidateId?: number;
}
export interface IAuthMetadata {
  profileId: number;
  userId: number;
  role: string;
  tokenVersion: number;
}
export type AuthToCreate = Omit<AuthPayload, "id">;
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
export interface IProfileHandler {
  getProfile(userId: number): Promise<Customer>;
}
