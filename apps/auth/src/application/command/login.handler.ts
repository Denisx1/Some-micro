import { LoginComand } from "@app/auth/domain/command";
import {
  AuthEvent,
  NotCorrectError,
  NotFoundError,
  TokenResponse,
} from "@app/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserGrpcClient } from "../../infrastructure/grpc/user.grpc.client";
import { RoleName } from "@app/common/contracts/user/enum";
import { CustomerGrpcClient } from "../../infrastructure/grpc/customer.grpc.client";
import { HashService } from "@app/common/infrastructure/hash/hash.service";
import { LoginUseCase } from "../use-cases/login";
import { TokenService } from "../../infrastructure/token/token.service";
import { LoginType } from "@app/auth";
import { AuthCacheService } from "../../infrastructure/cashe/auth.cache.service";
import { CleanerGrpcClient } from "../../infrastructure/grpc/cleaner.grpc.client";

@CommandHandler(LoginComand)
export class LoginHandler implements ICommandHandler<LoginComand> {
  private get mapper() {
    return {
      [RoleName.CUSTOMER]: this.customerGrpcClient,
      [RoleName.CLEANER]: this.cleanerGrpcClient,
    };
  }
  constructor(
    private readonly userGrpcClient: UserGrpcClient,
    private readonly customerGrpcClient: CustomerGrpcClient,
    private readonly cleanerGrpcClient: CleanerGrpcClient,
    private readonly hashService: HashService,
    private readonly loginUseCase: LoginUseCase,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService
  ) {}

  async execute(command: LoginComand): Promise<TokenResponse> {
    const { password, ...rest } = command.payload;
    const user = await this.userGrpcClient.getPrivateUser(rest);
    const profileId = await this.profileHandler(user.role, user.id);
    const compare = await this.hashService.compareHash(password, user.password);
    if (!compare) throw new NotCorrectError("Password");
    const tokens = this.tokenService.generateTokenPair({
      profileId,
      role: user.role,
      tokenVersion: user.tokenVersion,
      userId: user.id,
    });
    await this.loginUseCase.execute({
      userId: user.id,
      eventType: LoginType.LOGIN_FLOW,
      tokens,
    });
    await this.authCacheService.setLoginMetadata({
      profileId,
      role: user.role,
      tokenVersion: user.tokenVersion,
      userId: user.id,
    });

    return tokens;
  }

  private async profileHandler(role: string, userId: number): Promise<number> {
    if (role === RoleName.ADMIN) {
      return 0;
    }
    const provider = this.mapper[role];
    if (!provider) throw new NotFoundError(role);
    const profile = await provider.getProfile(userId);
    return profile.id;
  }
}
