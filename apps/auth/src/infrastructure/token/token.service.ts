import { Injectable } from "@nestjs/common";
import { JwtPayload, sign, TokenExpiredError, verify } from "jsonwebtoken";
import {
  ActionTokenPayload,
  TokenPair,
  TokenPairData,
} from "@app/auth/domain/types1";
import { TokenType } from "@app/auth";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TokenService {
  private actionSecret: string;
  private accessSecret: string;
  private refreshSecret: string;
  constructor(private readonly configService: ConfigService) {
    this.actionSecret = this.configService.get<string>("ACTION_TOKEN_SECRET");

    this.accessSecret = this.configService.get<string>("ACCESS_TOKEN_SECRET");
    this.refreshSecret = this.configService.get<string>("REFRESH_TOKEN_SECRET");
  }

  public generateActionToken(payload: ActionTokenPayload): string {
    const token: string = sign(payload, this.actionSecret, {
      expiresIn: "30m",
    });
    return token;
  }
  public generateTokenPair(payload: TokenPairData): TokenPair {
    const accessToken = sign(payload, this.accessSecret, {
      expiresIn: "5m",
    });
    const refreshToken = sign(payload, this.refreshSecret, {
      expiresIn: "30d",
    });
    return { accessToken, refreshToken };
  }
  public parseActionToken(actionToken: string): ActionTokenPayload {
    try {
      const secretWorld = this.actionSecret;
      const decoded = verify(actionToken, secretWorld);

      return decoded as ActionTokenPayload;
    } catch (error) {
      return null;
    }
  }
  public parseToken(token: string, tokenType: string): JwtPayload {
    const secret =
      tokenType === TokenType.ACCESS_TOKEN
        ? this.actionSecret
        : this.refreshSecret;

    try {
      const payload = verify(token, secret) as JwtPayload;
      return {
        success: true,
        payload,
      };
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return { success: false, message: "token expired" };
      }

      if (err.name === "JsonWebTokenError") {
        return { success: false, message: "token invalid" };
      }

      if (err.name === "NotBeforeError") {
        return { success: false, message: "token malformed" };
      }

      return { success: false, message: "token invalid" };
    }
  }
}
