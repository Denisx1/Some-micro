import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { commandHandlers } from "./command";
import { AuthUseCases } from "./use-cases";

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [...commandHandlers, ...AuthUseCases],
  exports: [],
})
export class ApplicationModule {}
