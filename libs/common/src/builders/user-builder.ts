import { CreateUserType, SafeUser, User } from '@app/common/types/user';
import { status as GrpcStatus } from '@grpc/grpc-js';
import { RpcException } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '@app/common';
@Injectable()
export class UserBuilder {
  private user: User;
  constructor(dto?: User) {
    if (dto) {
      this.user = { ...dto }; // копируем данные
    }
  }
  setDefaultRole(roleId: number) {
    this.user.roleId = roleId;
    return this;
  }
  setHashedPassword(hashedPassword: string) {
    this.user.password = hashedPassword;
    return this;
  }
  public buildCreateUser(): CreateUserType {
    if (
      !this.user.email ||
      !this.user.password ||
      !this.user.userName ||
      !this.user.roleId
    ) {
      throw new RpcException({
        code: GrpcStatus.INVALID_ARGUMENT,
        details: {
          message: 'User data is not valid',
          field: 'User',
          context: 'UserBuilder',
        },
      });
    }

    return {
      email: this.user.email,
      password: this.user.password,
      userName: this.user.userName,
      roleId: this.user.roleId,
    };
  }
  buildUpdate(): UpdateUserDto {
    if (!this.user.id) {
      throw new RpcException({
        code: GrpcStatus.INVALID_ARGUMENT,
        details: {
          message: 'User data is not valid',
          field: 'User',
          context: 'UserBuilder',
        },
      });
    }
    return this.user as UpdateUserDto; // здесь всё опционально кроме id
  }
  buildSafeUser(): SafeUser {
    return {
      id: this.user.id,
      email: this.user.email,
      firstName: this.user.firstName || '',
      lastName: this.user.lastName || '',
      userName: this.user.userName,
      phone: this.user.phone || '',
      isEmailverified: this.user.isEmailverified,
      isActive: this.user.isActive,
      lastLoginAt: this.user.lastLoginAt?.toString() || '',
      createdAt: this.user.createdAt.toString(),
      updatedAt: this.user.updatedAt?.toString() || '',
      roleId: this.user.roleId,
      avatarUrl: this.user.avatarUrl,
      bio: this.user.bio,
    };
  }
}
