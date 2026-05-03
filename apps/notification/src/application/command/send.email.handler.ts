import { CommandHandler } from "@nestjs/cqrs";
import { SendEmailCommand } from "libs/notification/domain/command";
import { EmailStrategy } from "../strategy/email.strategy";
import { ConfigService } from "@nestjs/config";

@CommandHandler(SendEmailCommand)
export class SendEmailHandler {
  constructor(
    private readonly emailStrategy: EmailStrategy,
    private readonly configService: ConfigService
  ) {}
  async execute(command: SendEmailCommand) {
    const { actionToken, email, userName } = command.payload;
    const url = this.foldURL(actionToken);
    await this.emailStrategy.send({
      to: email,
      template: command.subType,
      locals: { userName, url },
    });
  }

  private foldURL(token: string): string {
    return (
      this.configService
        .get<string>("CONFIRMATION_EMAIL_URL")
        ?.replace("%TOKEN%", token) || ""
    );
  }
}
