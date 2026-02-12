import { GRPC_PRISMA_SERVICES } from '@app/common/domain';
import {
  CleanerScheduleSlot,
  CreationSchedule,
  UpdateScheduleSlot,
} from '@app/common/domain/types/grpc.services.types/cleaner';
import { CleanerClient, PrismaService } from '@app/common/infrastructure';
import {
  CleanerScheduleDay,
  Prisma,
} from '@app/common/infrastructure/prisma/generated/cleaner';
import { DatabaseError } from '@app/common/system';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleRespoitory {
  constructor(private readonly prismaService: PrismaService<CleanerClient>) {}

  async getFullSchrdule(
    cleanerProfileId: number,
    tx?: Prisma.TransactionClient,
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
      throw new DatabaseError('cleaner schedule');
    }
  }
  async createFullDay(
    payload: CreationSchedule,
    tx?: Prisma.TransactionClient,
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
        if (error.code === 'P2025') {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      // Если это какая-то другая ошибка (БД упала, формат данных кривой) — конвертируем
      throw new DatabaseError('cleaner schedule');
    }
  }

  async updateSlot(
    payload: UpdateScheduleSlot,
    tx?: Prisma.TransactionClient,
  ): Promise<CleanerScheduleSlot | null> {
    try {
      const client = tx ?? this.prismaService.prisma;
      return await client.cleanerScheduleSlot.update({
        where: { id: payload.id },
        data: { ...payload },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return null; // Возвращаем null, как ты и хотел
        }
      }
      throw new DatabaseError('cleaner schedule');
    }
  }
}
