import { ForgotPasswordCommand } from "@app/auth/domain/command";
import { UserGrpcClient } from "../../infrastructure/grpc/user.grpc.client";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TokenService } from "../../infrastructure/token/token.service";
import { ActionTokenType, AlreadyExistError } from "@app/common";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";
import { AuthOutboxRepository } from "../../infrastructure/repositories/auth.outbox.repository";
import { KafkaTopics } from "@app/common/infrastructure/kafka/constants";
import { NotificationTransport } from "@app/common/contracts/notification/enum";

@CommandHandler(ForgotPasswordCommand)
export class ForgotPasswordHandler
  implements ICommandHandler<ForgotPasswordCommand>
{
  constructor(
    private readonly userGrpcClient: UserGrpcClient,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService,
    private readonly authOutboxRepository: AuthOutboxRepository
  ) {}
  async execute(command: ForgotPasswordCommand): Promise<number> {
    const user = await this.userGrpcClient.getPublicUser(command.payload);
    const session = await this.authCacheService.getActionToken(user.id);
    if (session) throw new AlreadyExistError("session");
    const actionToken = this.tokenService.generateActionToken({
      actionType: ActionTokenType.FORGOT_PASSWORD,
      userName: user.userName,
      id: user.id,
    });
    await this.authCacheService.setActionToken(user.id, actionToken);
    await this.authOutboxRepository.createEvent({
      aggregateId: user.id,
      aggregateType: KafkaTopics.Commands.NOTIFICATION,
      payload: {
        type: NotificationTransport.EMAIL,
        payload: {
          userName: user.userName,
          email: user.email,
          actionToken: actionToken,
        },
      },
    });
    return user.id;
  }
}
