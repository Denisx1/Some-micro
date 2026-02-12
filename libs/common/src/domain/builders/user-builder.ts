import { CreateUserType, PrivateUser, PublicUser } from '@app/common/domain';
import { status as GrpcStatus } from '@grpc/grpc-js';

import { Injectable } from '@nestjs/common';
import { User } from '@app/common/infrastructure/prisma/generated/user';
import { ParseError } from '@app/common/system/error/domain.error';

@Injectable()
export class UserBuilder {
  private user: Partial<User>;
  constructor(dto?: Partial<User>) {
    if (dto) {
      this.user = { ...dto }; // копируем данные
    }
  }
  setRole(roleId: number): this {
    this.user.roleId = roleId;
    return this;
  }
  setNewPassword(hashedPassword: string): this {
    this.user.password = hashedPassword;
    return this;
  }
  public buildForPublic(roleName: string): PublicUser {
    if (!this.user.id) {
      throw new ParseError();
    }
    const { password, roleId, ...rest } = this.user;

    return {
      ...rest,
      roleName,
    } as PublicUser;
  }
  public buildForAuth(roleName: string): PrivateUser {
    if (!this.user.id) {
      throw new ParseError();
    }
    return {
      id: this.user.id,
      userName: this.user.userName,
      roleName,
      tokenVersion: this.user.tokenVersion,
      password: this.user.password,
    };
  }
  public buildCreateUser(): CreateUserType {
    if (!this.user.email || !this.user.password || !this.user.userName) {
      throw new ParseError();
    }

    return {
      email: this.user.email,
      password: this.user.password,
      userName: this.user.userName,
      roleId: this.user.roleId,
    };
  }
}
