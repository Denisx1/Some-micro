import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { commandHandler } from "./command";
import { queryHandler } from "./query";

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [...commandHandler, ...queryHandler],
  exports: [],
})
export class ApplicationModule {}
