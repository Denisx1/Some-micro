import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastruncture.module";
import { OrderHandlers } from "./use.case/commands/handlers";
import { Sagas } from "./saga.orchestration";
import { OrderQueries } from "./use.case/query/handlers";

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [...OrderHandlers, ...OrderQueries, ...Sagas],
  exports: [],
})
export class ApplicationModule {}
