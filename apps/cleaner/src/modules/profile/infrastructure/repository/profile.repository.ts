import {
  GetProfile,
  UpdateProfile,
} from '@app/common/domain/types/grpc.services.types/cleaner';
import { MatchOrderData } from '@app/common/domain/types/grpc.services.types/order';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import {
  CleanerProfile,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prismaService: PrismaService<CleanerClient>) {}

  async createProfile(userId: number): Promise<void> {
    try {
      await this.prismaService.prisma.cleanerProfile.createMany({
        data: [{ userId }],
        skipDuplicates: true,
      });
      return;
    } catch (error) {
      throw new DatabaseError('Cleaner Db');
    }
  }
  async updateProfile(payload: UpdateProfile): Promise<CleanerProfile | null> {
    try {
      return await this.prismaService.prisma.cleanerProfile.update({
        where: { id: payload.id },
        data: payload,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      // Если это какая-то другая ошибка (БД упала, формат данных кривой) — конвертируем
      throw new DatabaseError('Cleaner Db');
    }
  }
  async getAvaulableCleaners(
    payload: MatchOrderData,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerProfile[] | null> {
    try {
      const { zipCode, city, dayOfWeek, fromTime, toTime } = payload;
      const client = tx?? this.prismaService.prisma
      const profiles = await client.$queryRaw<
        CleanerProfile[]
      >`
              SELECT * FROM find_cleaner_candidates(
              ${zipCode}::int, 
              ${city}::text, 
              ${dayOfWeek}::int, 
              ${fromTime}::text, 
              ${toTime}::text
  )
`;
      return profiles ?? null;
    } catch (error) {
      throw new DatabaseError('Cleaner Db');
    }
  }
  async findOneProfile(payload: GetProfile): Promise<CleanerProfile | null> {
    try {
      const profile = await this.prismaService.prisma.cleanerProfile.findFirst({
        where: payload, // передаём критерии поиска
      });
      return profile ?? null;
    } catch (error) {
      throw new DatabaseError('Cleaner Db');
    }
  }
}
