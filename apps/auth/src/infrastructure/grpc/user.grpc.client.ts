import { GrpcClientsService } from "@app/auth/infrastructure/grpc/grpc.service";
import { NotFoundError } from "@app/common";
import {
  FindOneUserRequest,
  PrivateUser,
  PublicUser,
  UserServiceClient,
} from "@app/common/contracts/user/user.grpc.types";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

@Injectable()
export class UserGrpcClient {
  constructor(private readonly grpcClient: GrpcClientsService) {}
  async getPrivateUser(payload: FindOneUserRequest): Promise<PrivateUser> {
    try {
      return await lastValueFrom(this.grpcClient.user.findPrivateUser(payload));
    } catch (error) {
      throw new NotFoundError("User");
    }
  }
  async getPublicUser(payload: FindOneUserRequest): Promise<PublicUser> {
    try {
      return await lastValueFrom(this.grpcClient.user.findPublicUser(payload));
    } catch (error) {
      throw new NotFoundError("User");
    }
  }
}
