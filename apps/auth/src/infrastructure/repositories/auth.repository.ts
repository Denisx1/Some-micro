import { Auth, AuthPrismaService, Prisma } from "@app/auth";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: AuthPrismaService) {}

  async createAuth(
    auth: Prisma.AuthCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<Auth> {
    const client = tx ?? this.prismaService.prisma;
    return await client.auth.create({ data: auth });
  }
  async getByUserId(
    userId: number,
    tx?: Prisma.TransactionClient
  ): Promise<Auth> {
    const client = tx ? tx.auth : this.prismaService.prisma.auth;
    return client.findFirst({
      where: { userId },
    });
  }
  async findByUserAndDevice(
    userId: number,
    tx?: Prisma.TransactionClient
  ): Promise<Auth | null> {
    const client = tx ?? this.prismaService.prisma;
    const authed = await client.auth.findFirst({
      where: { userId },
    });
    return authed ?? null;
  }

  async updateRefresh(
    authedId: number,
    refreshToken: string,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    const client = tx ?? this.prismaService.prisma;
    await client.auth.update({
      where: { id: authedId },
      data: { refreshToken },
    });
  }
  async deleteAll(userId: number): Promise<void> {
    await this.prismaService.prisma.auth.deleteMany({
      where: { userId },
    });
  }
  async deleteOne(
    authedId: number,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    const client = tx ? tx.auth : this.prismaService.prisma.auth;
    await client.delete({
      where: { id: authedId },
    });
  }
}
