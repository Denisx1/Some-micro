import { Module } from "@nestjs/common";
import { CutomerKafkaController } from "./kafka/kafka.controller";
import { ApplicationModule } from "../application/application.module";
import { CqrsModule } from "@nestjs/cqrs";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { CustomerGrpcController } from "./grpc/customer.controller";

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [CutomerKafkaController, CustomerGrpcController],
})
export class PresentationModule {}
