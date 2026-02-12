import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import {
  ActionTokenPayload,
  TokenPair,
  TokenPairData,
} from '@app/common/domain/types/grpc.services.types/auth';
import { TokenType } from '@app/common/domain';

@Injectable()
export class TokenService {
  constructor(private readonly configService: ConfigService) {}

  public generateActionToken(payload: ActionTokenPayload): string {
    const token: string = sign(
      payload,
      this.configService.get<string>('ACTION_TOKEN_SECRET'),
      {
        expiresIn: '30m',
      },
    );
    return token;
  }
  public generateTokenPair(payload: TokenPairData): TokenPair {
    const accessToken = sign(
      payload,
      this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      {
        expiresIn: '5m',
      },
    );
    const refreshToken = sign(
      payload,
      this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      {
        expiresIn: '30d',
      },
    );
    return { accessToken, refreshToken };
  }
  public parseActionToken(actionToken: string): ActionTokenPayload {
    const secretWorld = this.configService.get<string>('ACTION_TOKEN_SECRET');
    const decoded = verify(actionToken, secretWorld);
    return decoded as ActionTokenPayload;
  }
  public parseToken(token: string, tokenType: string): JwtPayload {
    const secret =
      tokenType === TokenType.ACCESS_TOKEN
        ? this.configService.get('ACCESS_TOKEN_SECRET')
        : this.configService.get('REFRESH_TOKEN_SECRET');

    try {
      const payload = verify(token, secret) as JwtPayload;
      return {
        success: true,
        payload,
      };
    } catch (err: any) {
      if (err.name === 'TokenExpiredError') {
        return { success: false, message: 'token expired' };
      }

      if (err.name === 'JsonWebTokenError') {
        return { success: false, message: 'token invalid' };
      }

      if (err.name === 'NotBeforeError') {
        return { success: false, message: 'token malformed' };
      }

      return { success: false, message: 'token invalid' };
    }
  }
}
