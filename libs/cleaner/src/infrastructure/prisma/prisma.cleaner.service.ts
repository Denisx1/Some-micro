import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient as CleanerClient } from "./generated";
import { PrismaService } from "@app/common/infrastructure/database/prisma.service";
@Injectable()
export class CleanerPrismaService extends PrismaService<CleanerClient> {
  // Теперь TS точно знает, что в переменной prisma лежат таблицы ЗАКАЗОВ
  constructor(
    @Inject("PRISMA_CLIENT_INSTANCE") public readonly prisma: CleanerClient
  ) {
    super(prisma);
  }
}
