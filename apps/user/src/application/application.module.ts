import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { commandHandler } from "./command";
import { Sagas } from "./saga.orcestration";
import { queryHandler } from "./query";

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [...commandHandler, ...queryHandler, ...Sagas],
  exports: [],
})
export class ApplicationModule {}
