import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient as AuthClient } from "./generated";
import { PrismaService } from "@app/common/infrastructure/database/prisma.service";
@Injectable()
export class AuthPrismaService extends PrismaService<AuthClient> {
  // Теперь TS точно знает, что в переменной prisma лежат таблицы ЗАКАЗОВ
  constructor(
    @Inject("PRISMA_CLIENT_INSTANCE") public readonly prisma: AuthClient
  ) {
    super(prisma);
  }
}
