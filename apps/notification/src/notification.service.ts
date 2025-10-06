import { LocalsData, SafeCandidate } from '@app/common';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_SERVICE, AuthServiceController } from '@app/common/types/auth';
import { Inject } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { EmailStrategy } from './strategy/email.strategy';

@Injectable()
export class NotificationService implements OnModuleInit {
  private authService: AuthServiceController;
  constructor(
    @Inject(AUTH_SERVICE) private readonly client: ClientGrpc,
    private readonly configService: ConfigService,
    private readonly emailStrategy: EmailStrategy,
  ) {}

  async onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceController>('AuthService');
  }
  async sendNotification(payload: SafeCandidate): Promise<void> {
    const { token } = await this.getActionToken(payload);
    const confirmEmailUrl = this.foldURL(token);
    this.send(payload, 'user.candidate.created', confirmEmailUrl);
  }

  private async send(payload: SafeCandidate, template: string, url: string) {
    await this.emailStrategy.send({
      to: payload.email,
      template,
      locals: {
        userName: payload.userName,
        url,
      },
    });
  }

  private foldURL(token: string): string {
    return this.configService
      .get<string>('CONFIRMATION_EMAIL_URL')
      ?.replace('%TOKEN%', token);
  }

  private async getActionToken(payload: SafeCandidate) {
    const actionToken = await firstValueFrom(
      this.authService.generateActionToken({
        ...payload,
        actionType: 'user.candidate.created',
      }),
    );
    return actionToken;
  }
}
