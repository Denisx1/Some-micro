import { Module } from "@nestjs/common";
import { EmailStrategy } from "./strategy/email.strategy";
import { InfrastructureModule } from "../infrastructure/infrastructure.modue";
import { NotificationHandlers } from "./command";
import { GrpcStrategy } from "./strategy/grpc.strategy";
import { SubScribeNotificationService } from "./command/subscribe.notification.comand";

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    EmailStrategy,
    GrpcStrategy,

    SubScribeNotificationService,

    ...NotificationHandlers,
  ],
  exports: [SubScribeNotificationService],
})
export class ApplicationModule {}
