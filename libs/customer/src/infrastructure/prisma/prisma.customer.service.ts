import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient as CustomerClient } from "./generated";
import { PrismaService } from "../../../../common/src/infrastructure/database";

@Injectable()
export class CustomerPrismaService extends PrismaService<CustomerClient> {
  // Теперь TS точно знает, что в переменной prisma лежат таблицы ЗАКАЗОВ
  constructor(
    @Inject("PRISMA_CLIENT_INSTANCE") public readonly prisma: CustomerClient
  ) {
    super(prisma);
  }
}
