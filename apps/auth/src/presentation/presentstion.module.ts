import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/aplication.module";
import { AuthKafkaController } from "./controller/auth.kafka.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { AuthController } from "./controller/auth.controller";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [AuthKafkaController, AuthController],
})
export class PresentationModule {}
