import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailStrategy } from './strategy/email.strategy';
import { SafeCandidate } from '@app/common/domain';

@Injectable()
export class NotificationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly emailStrategy: EmailStrategy,
  ) {}

  async sendNotification(payload: SafeCandidate, topic: string): Promise<void> {
    const confirmEmailUrl = this.foldURL(payload.actionToken);
    this.send(payload, topic, confirmEmailUrl);
  }

  private async send(
    payload: SafeCandidate,
    template: string,
    url: string,
  ): Promise<void> {
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
}
