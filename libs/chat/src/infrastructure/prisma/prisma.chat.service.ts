import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient as OrderClient } from "./generated";
import { PrismaService } from "@app/common";

@Injectable()
export class OrderPrismaService extends PrismaService<OrderClient> {
  // Теперь TS точно знает, что в переменной prisma лежат таблицы ЗАКАЗОВ
  constructor(
    @Inject("PRISMA_CLIENT_INSTANCE") public readonly prisma: OrderClient
  ) {
    super(prisma);
  }
}
