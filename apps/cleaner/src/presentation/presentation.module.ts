import { Module } from "@nestjs/common";

import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { CleanerCommandController } from "./kafka/controllers/cleaner.command.controller";
import { CleanerGrpcController } from "./grpc/cleaner.controller";

@Module({
  imports: [InfrastructureModule],
  controllers: [CleanerCommandController, CleanerGrpcController],
  providers: [],
  exports: [],
})
export class PresentationModule {}
