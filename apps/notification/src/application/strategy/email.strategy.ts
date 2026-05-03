import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import * as pug from "pug"; // Используем чистый pug
import { createTransport, Transporter } from "nodemailer";

import { EmailStrategyPayload } from "@app/common/contracts/notification/types";
import { TemplateMap } from "libs/notification/domain/type";
import { NotFoundError, ParseError } from "@app/common";

@Injectable()
export class EmailStrategy {
  private transporter: Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = createTransport({
      service: "gmail",
      auth: {
        user: this.configService.get<string>("SYSTEM_MAIL"),
        pass: this.configService.get<string>("SYSTEM_MAIL_PASSWORD"),
      },
    });
  }

  async send(payload: EmailStrategyPayload): Promise<void> {
    const templateInfo = TemplateMap[payload.template];
    if (!templateInfo) {
      throw new Error(`Template not found: ${payload.template}`);
    }
    const templatePath = join(
      "/app/apps/notification/src/templates",
      `${templateInfo.templateName}.pug`
    );

    try {
      const html = pug.renderFile(templatePath, payload.locals || {});
      await this.transporter.sendMail({
        from: this.configService.get<string>("SYSTEM_MAIL"),
        to: payload.to,
        subject: templateInfo.subject,
        html,
      });

      console.log(`[EmailStrategy] Sent ${payload.template} to ${payload.to}`);
    } catch (error) {
      throw new NotFoundError("REceivernotfound");
    }
  }
}
