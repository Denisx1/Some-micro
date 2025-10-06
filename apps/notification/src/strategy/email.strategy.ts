import { NotificationPayload } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as EmailTemplate from 'email-templates';
import { join } from 'path';
import templateInfoObject from '../templates';
import { createTransport } from 'nodemailer';
import { existsSync } from 'fs';

@Injectable()
export class EmailStrategy {
  constructor(private readonly configService: ConfigService) {}
  async send(payload: NotificationPayload): Promise<void> {
    const templateRenderer = new EmailTemplate({
      views: {
        root: join(__dirname, '../../../apps/notification/src/templates'),
      },
    });
    const templateInfo = templateInfoObject[payload.template];
    if (!templateInfo) {
      console.log(`Template not found for action: ${payload.template}`);
      return;
    }
    const html = await templateRenderer.render(
      templateInfo.templateName,
      payload.locals,
    );
    console.log(html);
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('SYSTEM_MAIL'),
        pass: this.configService.get<string>('SYSTEM_MAIL_PASSWORD'),
      },
    });
    await transporter.sendMail({
      from: process.env.SYSTEM_MAIL,
      to: payload.to,
      subject: templateInfo.subject,
      html,
    });
  }
}
