import { Observable } from 'rxjs';
import { CandidateDto } from '../dtos';

export interface FindOneUser {
  id: number;
}
export interface Users {
  users: User[];
}
export type CreateUserType = CreateUser & { roleId: number };
export type SafeCandidate = Omit<CreateUser, 'password'>;
export interface CreateUser {
  email: string;
  password: string;
  userName: string;
}
export interface VerifyUserResponce {
  success: boolean;
  nextStep: string;
  message: string;
}
export type UpdateUser = Partial<User>;
export type SafeUser = Omit<User, 'passwordHash'>;
export interface User {
  id: number;
  email: string;
  password?: string;
  firstName: string | null; // ? в Prisma → может быть null
  lastName: string | null;
  userName: string;
  phone: string | null;
  isEmailverified: boolean;
  isActive: boolean;
  lastLoginAt: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date | null;
  roleId: number;
  avatarUrl: string | null;
  bio: string | null;
}

export const USER_SERVICE = 'USER_SERVICE';

export interface UserServiceClient {
  verifyUser: (request: CandidateDto) => Promise<VerifyUserResponce>;
  getUser: (id: number) => Promise<User>;
}

export interface UserServiceController {
  verifyUser: (request: CreateUser) => Observable<VerifyUserResponce>;
  getUser: ({ id }: FindOneUser) => Observable<User>;
}
