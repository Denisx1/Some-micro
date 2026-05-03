import { CleanerGrpcClient } from "./cleaner.grpc.client";
import { CustomerGrpcClient } from "./customer.grpc.client";
import { UserGrpcClient } from "./user.grpc.client";

export const grpcHandler = [
  UserGrpcClient,
  CustomerGrpcClient,
  CleanerGrpcClient,
];
