import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { UserGrpcController } from "./grpc/user.grpc.controller";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { UserKafkaController } from "./kafka/user.kafka.controller";

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [UserGrpcController, UserKafkaController],
  providers: [],
})
export class PresentationModule {}
