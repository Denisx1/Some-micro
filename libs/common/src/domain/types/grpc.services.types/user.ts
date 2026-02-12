import { Observable } from 'rxjs';
import { BaseCandidate } from './registration';
import { User } from '@app/common/infrastructure/prisma/generated/user';

export interface GetUserQuery {
  id?: number;
  userName?: string;
  email?: string;
}
export type CheckUniqueUser = { userName?: string; email?: string };
export type UpdateUser = Partial<User>;

export type PublicUser = Omit<User, 'roleId' | 'password'> & {
  roleName: string;
};

export interface PrivateUser {
  id: number;
  userName: string;
  password: string;
  roleName: string;
  tokenVersion: number;
}
export type CreateUserType = Required<
  Pick<User, 'email' | 'password' | 'userName' | 'roleId'>
>;
export type UserUpdateTransport = Partial<Pick<User, 'password' | 'id'>>;

export interface UserServiceController {
  getUserForAuth: (request: GetUserQuery) => Observable<PrivateUser>;
  getUserPublic: (request: GetUserQuery) => Observable<PublicUser>;
  createUser: (request: BaseCandidate) => Observable<void>;
  checkUserUniqueness: (request: GetUserQuery) => Observable<void>;
  updateUser: (payload: UpdateUser) => Observable<void>;
}
