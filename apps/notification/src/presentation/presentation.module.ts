import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { NotificationKafkaController } from "./controller/kafka/kafka.controller";

import { CqrsModule } from "@nestjs/cqrs";
import { GrpcController } from "./controller/grpc/grpc.controller";
import { InfrastructureModule } from "../infrastructure/infrastructure.modue";

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [NotificationKafkaController, GrpcController],
})
export class PresentationModule {}
