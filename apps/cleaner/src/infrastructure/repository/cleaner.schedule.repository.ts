import { CleanerScheduleDay, Prisma } from "@app/cleaner";
import {
  CleanerScheduleSlot,
  CreationSchedule,
  UpdateScheduleSlot,
} from "@app/cleaner/domain/types";

import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { ScheduleDay } from "@app/common/contracts/cleaner/cleaner.grpc.types";
import { DatabaseError } from "@app/common/system";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleRespoitory {
  constructor(private readonly prismaService: CleanerPrismaService) {}

  async getFullSchrdule(
    cleanerProfileId: number,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerScheduleDay[] | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      const schedule = await client.cleanerScheduleDay.findMany({
        where: { cleanerProfileId },
        include: {
          slots: true,
        },
      });

      return schedule ?? null;
    } catch (error) {
      throw new DatabaseError("cleaner schedule");
    }
  }
  async *getScheduleStream(profileId: number): AsyncGenerator<ScheduleDay> {
    let cursor: number | undefined;
    while (true) {
      const batch: ScheduleDay[] =
        await this.prismaService.prisma.cleanerScheduleDay.findMany({
          where: { cleanerProfileId: profileId },
          take: 100, // Берем по 100 штук за раз
          skip: cursor ? 1 : 0,
          cursor: cursor ? { id: cursor } : undefined,
          orderBy: { id: "asc" },
          include: { slots: true },
        });
      console.log(batch);
      if (batch.length === 0) break;

      for (const job of batch) {
        yield job; // <--- ВЫБРАСЫВАЕМ ПО ОДНОМУ
      }

      cursor = batch[batch.length - 1].id;
    }
  }
  async createFullDay(
    payload: CreationSchedule,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerScheduleDay> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.cleanerScheduleDay.upsert({
        where: {
          cleanerProfileId_dayOfWeek: {
            cleanerProfileId: payload.cleanerProfileId,
            dayOfWeek: payload.dayOfWeek,
          },
        },
        update: {
          slots: {
            deleteMany: {},
            create: payload.slots,
          },
        },
        create: {
          cleanerProfileId: payload.cleanerProfileId,
          dayOfWeek: payload.dayOfWeek,
          slots: {
            create: payload.slots,
          },
        },
        include: {
          slots: true,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      // Если это какая-то другая ошибка (БД упала, формат данных кривой) — конвертируем
      throw new DatabaseError("cleaner schedule");
    }
  }

  async updateSlot(
    payload: UpdateScheduleSlot,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerScheduleSlot | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.cleanerScheduleSlot.update({
        where: { id: payload.id },
        data: { ...payload },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      throw new DatabaseError("cleaner schedule");
    }
  }
  async getScheduleByDay(
    day: number,
    profileId: number,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerScheduleDay | null> {
    try {
      const client = tx
        ? tx.cleanerScheduleDay
        : this.prismaService.prisma.cleanerScheduleDay;
      return (
        (await client.findFirst({
          where: { cleanerProfileId: profileId, dayOfWeek: day },
          include: {
            slots: true,
          },
        })) ?? null
      );
    } catch (error) {
      throw new DatabaseError("cleaner schedule");
    }
  }
}
