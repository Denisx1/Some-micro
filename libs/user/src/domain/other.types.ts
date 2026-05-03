import { Prisma, Role, User } from "../infrastructure/prisma/generated";

export type IPrivateUser = Pick<
  User,
  "id" | "userName" | "password" | "tokenVersion"
> & { role: string };
export type IGetUser = Partial<Pick<User, "email" | "userName" | "id">>;

export type ICreateUser = Omit<Prisma.UserCreateInput, "role"> & {
  roleId: number;
};
export type ICreateCandidate = Omit<Prisma.CandidateCreateInput, "role"> & {
  roleId: number;
};
export type CreateRole = Omit<Role, "id" | "createdAt" | "updatedAt">;
