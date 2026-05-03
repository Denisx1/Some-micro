import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient as UserClient } from "./generated";
import { PrismaService } from "../../../../common/src/infrastructure/database";

@Injectable()
export class UserPrismaService extends PrismaService<UserClient> {
  // Теперь TS точно знает, что в переменной prisma лежат таблицы ЗАКАЗОВ
  constructor(
    @Inject("PRISMA_CLIENT_INSTANCE") public readonly prisma: UserClient
  ) {
    super(prisma);
  }
}
