import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';

interface IPrismaClient {
  $connect(): Promise<void>;
  $disconnect(): Promise<void>;
}

@Injectable()
export class PrismaService<T extends IPrismaClient>
  implements OnModuleInit, OnModuleDestroy
{
  constructor(@Inject('PRISMA_CLIENT_INSTANCE') public readonly prisma: T) {}

  async onModuleInit() {
    try {
      await this.prisma.$connect();
    } catch (error) {}
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
