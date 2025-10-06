import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';
import { GenerateActionTokenRequest } from '@app/common/types/auth';
@Injectable()
export class TokenService {
  constructor(private readonly configService: ConfigService) {}
  async generateActionToken(
    payload: GenerateActionTokenRequest,
  ): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const token: string = await sign(
      payload,
      this.configService.get<string>('ACTION_TOKEN_SECRET'),
      {
        expiresIn: '1h',
      },
    );
    return token;
  }
}
