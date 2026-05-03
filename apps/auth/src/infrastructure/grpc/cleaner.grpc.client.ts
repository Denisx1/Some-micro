import { IProfileHandler } from "@app/auth/domain/types1";
import { GrpcClientsService } from "@app/auth/infrastructure/grpc/grpc.service";
import {
  Customer,
  CustomerServiceClient,
  GetCustomerRequest,
} from "@app/common";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CleanerGrpcClient implements IProfileHandler {
  constructor(private readonly grpcClient: GrpcClientsService) {}
  async getProfile(userId: number): Promise<Customer> {
    try {
      return await lastValueFrom(
        this.grpcClient.cleaner.getProfile({ userId })
      );
    } catch (error) {
      throw error;
    }
  }
}
