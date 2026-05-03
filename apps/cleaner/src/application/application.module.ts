import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { cleanerHandler } from "./command";
import { cleanerQuery } from "./query";

@Module({
  imports: [InfrastructureModule],
  providers: [...cleanerHandler, ...cleanerQuery],
  exports: [],
})
export class ApplicationModule {}
