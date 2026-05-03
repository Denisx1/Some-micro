import { ParseError } from "@app/common/system/error/domain.error";
import { User } from "../../infrastructure/prisma/generated";
import { IPrivateUser } from "../../domain/other.types";
import {
  PrivateUser,
  PublicUser,
} from "@app/common/contracts/user/user.grpc.types";

export class UserBuilder {
  private user: User;
  constructor(user: User) {
    this.user = user;
  }

  public BuildForPrivate(roleName: string): PrivateUser {
    if (!this.user.id) {
      throw new ParseError();
    }
    return {
      id: this.user.id,
      userName: this.user.userName,
      role: roleName,
      tokenVersion: this.user.tokenVersion,
      password: this.user.password,
    };
  }
  public BuldForPublic(): PublicUser {
    if (!this.user.id) {
      throw new ParseError();
    }
    return {
      id: this.user.id,
      userName: this.user.userName,
      email: this.user.email,
    };
  }
}
