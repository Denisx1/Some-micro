import { Prisma } from "@app/cleaner";
import { GetProfile, UpdateProfile } from "@app/cleaner/domain/types";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { CleanerProfile } from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { MatchOrderTransport } from "@app/common/contracts/order";
import { DatabaseError } from "@app/common/system";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileRepository {
  constructor(private readonly prismaService: CleanerPrismaService) {}

  async createProfile(
    userId: number,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerProfile | null> {
    try {
      const client = tx
        ? tx.cleanerProfile
        : this.prismaService.prisma.cleanerProfile;
      return (
        (await client.create({
          data: { userId },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError("Cleaner Db");
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
        if (error.code === "P2025") {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      // Если это какая-то другая ошибка (БД упала, формат данных кривой) — конвертируем
      throw new DatabaseError("Cleaner Db");
    }
  }
  async getAvaulableCleaners(
    payload: MatchOrderTransport,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerProfile[] | null> {
    try {
      const { zipCode, city, dayOfWeek, fromTime, toTime } = payload;
      const client = tx ?? this.prismaService.prisma;
      const profiles = await client.$queryRaw<CleanerProfile[]>`
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
      console.log(error);
      throw new DatabaseError("Cleaner Db");
    }
  }
  async findOneProfile(payload: GetProfile): Promise<CleanerProfile | null> {
    try {
      const profile = await this.prismaService.prisma.cleanerProfile.findFirst({
        where: payload, // передаём критерии поиска
      });
      return profile ?? null;
    } catch (error) {
      throw new DatabaseError("Cleaner Db");
    }
  }
}
