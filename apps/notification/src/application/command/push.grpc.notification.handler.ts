import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { GrpcPushComand } from "libs/notification/domain/command";
import { GrpcStrategy } from "../strategy/grpc.strategy";

@CommandHandler(GrpcPushComand)
export class PushGrpcNotificationHandler
  implements ICommandHandler<GrpcPushComand>
{
  constructor(private readonly grpcStrategy: GrpcStrategy) {}
  // private get mapper() {
  //   return {
  //     [NotificationSubType.REGISTRATION_PROCESS]:
  //       this.handleRegistrationGrpcNotification,
  //     [NotificationSubType.ORDER_PROCESS]: this.handleOrderGrpcNotification,
  //   };
  // }
  async execute(command: GrpcPushComand) {
    console.log(command.payload);
    await this.grpcStrategy.send(
      command.payload.targetId,
      command.payload.payload
    );
  }
}
