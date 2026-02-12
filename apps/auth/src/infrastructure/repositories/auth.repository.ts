import { Injectable } from '@nestjs/common';
import { AuthClient, PrismaService } from '@app/common/infrastructure';
import { AuthPayload, AuthToCreate } from '@app/common/domain';
import { Prisma } from '@app/common/infrastructure/prisma/generated/auth';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService<AuthClient>) {}

  async createAuth(
    auth: AuthToCreate,
    tx?: Prisma.TransactionClient,
  ): Promise<AuthPayload> {
    const client = tx ?? this.prismaService.prisma;
    return await client.auth.create({ data: auth });
  }
  async getByUserId(userId: number): Promise<AuthPayload> {
    return this.prismaService.prisma.auth.findFirst({
      where: { userId },
    });
  }
  async findByUserAndDevice(
    userId: number,
    deviceName: string,
    tx?: Prisma.TransactionClient,
  ): Promise<AuthPayload | null> {
    const client = tx ?? this.prismaService.prisma;
    const authed = await client.auth.findFirst({
      where: { userId, deviceName },
    });
    return authed ?? null;
  }

  async updateRefresh(
    authedId: number,
    hashedRefresh: string,
    tx?: Prisma.TransactionClient,
  ): Promise<void> {
    const client = tx ?? this.prismaService.prisma;
    await client.auth.update({
      where: { id: authedId },
      data: { refreshHash: hashedRefresh },
    });
  }
  async deleteAll(userId: number): Promise<void> {
    await this.prismaService.prisma.auth.deleteMany({
      where: { userId },
    });
  }
  async deleteOne(authedId: number, deviceName: string): Promise<void> {
    await this.prismaService.prisma.auth.delete({
      where: { id: authedId, deviceName },
    });
  }
}
