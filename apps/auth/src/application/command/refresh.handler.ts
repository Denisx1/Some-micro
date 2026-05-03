import { RefreshCommand } from "@app/auth/domain/command";
import { AuthRepository } from "../../infrastructure/repositories/auth.repository";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ParseError, TokenResponse, UnauthenticatedError } from "@app/common";
import { UserGrpcClient } from "../../infrastructure/grpc/user.grpc.client";
import { TokenService } from "../../infrastructure/token/token.service";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";

@CommandHandler(RefreshCommand)
export class RefreshHandler implements ICommandHandler<RefreshCommand> {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userGrpcClient: UserGrpcClient,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService
  ) {}
  async execute(command: RefreshCommand): Promise<TokenResponse> {
    const { userId, tokenVersion, profileId } = command.payload;
    if (!userId) throw new ParseError("Data is absent");
    const logined = await this.authRepository.getByUserId(userId);
    if (!logined) throw new UnauthenticatedError("User not logined");
    const user = await this.userGrpcClient.getPrivateUser({ id: userId });
    if (tokenVersion !== user.tokenVersion) throw new ParseError();
    const tokens = this.tokenService.generateTokenPair({
      userId,
      role: user.role,
      tokenVersion: user.tokenVersion,
      profileId,
    });

    await this.authRepository.updateRefresh(logined.id, tokens.refreshToken);

    await this.authCacheService.setLoginMetadata({
      profileId,
      role: user.role,
      tokenVersion: user.tokenVersion,
      userId: user.id,
    });
    return tokens;
  }
}
