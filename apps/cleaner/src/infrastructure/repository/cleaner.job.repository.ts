import { CleanerJob, JobStatus, Prisma } from "@app/cleaner";
import { CreateJobType, UpdateJob } from "@app/cleaner/domain/types";

import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { DatabaseError } from "@app/common/system";
import { status } from "@grpc/grpc-js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CleanerJobRepository {
  constructor(private readonly prisma: CleanerPrismaService) {}

  async createJob(
    job: CreateJobType,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerJob> {
    try {
      const client = tx ?? this.prisma.prisma;
      return await client.cleanerJob.create({ data: job });
    } catch (error) {
      throw new DatabaseError("cleaner job");
    }
  }
  async getJobs1(profileId: number): Promise<CleanerJob[] | null> {
    try {
      return await this.prisma.prisma.cleanerJob.findMany({
        where: { cleanerProfileId: profileId },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async *getJobsStream(profileId: number): AsyncGenerator<CleanerJob> {
    let cursor: number | undefined;
    while (true) {
      const batch: CleanerJob[] = await this.prisma.prisma.cleanerJob.findMany({
        where: { cleanerProfileId: profileId },
        take: 100, // Берем по 100 штук за раз
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "asc" },
      });
      if (batch.length === 0) break;

      for (const job of batch) {
        yield job; // <--- ВЫБРАСЫВАЕМ ПО ОДНОМУ
      }

      cursor = batch[batch.length - 1].id;
    }
  }
  async *getJobs(orderId: number) {
    let cursor: number | undefined;

    while (true) {
      const batch: CleanerJob[] = await this.prisma.prisma.cleanerJob.findMany({
        where: { orderId },
        take: 100, // Берем по 100 штук за раз
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "asc" },
      });

      if (batch.length === 0) break;

      for (const job of batch) {
        yield job; // <--- ВЫБРАСЫВАЕМ ПО ОДНОМУ
      }

      cursor = batch[batch.length - 1].id;
    }
  }
  async findFirst(
    orderId: number,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerJob | null> {
    try {
      const client = tx ?? this.prisma.prisma;
      const job = await client.cleanerJob.findFirst({
        where: { orderId, status: JobStatus.ACCEPTED },
      });
      return job ?? null;
    } catch (error) {
      throw new DatabaseError("cleaner job");
    }
  }
  async findOneJob(
    jobId: number,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerJob | null> {
    try {
      const client = tx ?? this.prisma.prisma;
      const job = await client.cleanerJob.findUnique({
        where: { id: jobId },
      });
      return job ?? null;
    } catch (error) {
      throw new DatabaseError("cleaner job");
    }
  }
  async updateJob(
    payload: UpdateJob,
    status: JobStatus,
    tx?: Prisma.TransactionClient
  ): Promise<CleanerJob | null> {
    try {
      const client = tx ?? this.prisma.prisma;
      return await client.cleanerJob.update({
        where: {
          id: payload.jobId,
          cleanerProfileId: payload.clanerProfileId,
          status: JobStatus.INVITED,
        },
        data: { status, updatedAt: new Date() },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return null;
        }
      }
      throw new DatabaseError("cleaner job");
    }
  }
  async updateJobs(
    orderId: number,
    tx?: Prisma.TransactionClient
  ): Promise<void> {
    try {
      const client = tx ?? this.prisma.prisma;
      await client.cleanerJob.updateMany({
        where: { orderId, status: JobStatus.INVITED },
        data: { status: JobStatus.EXPIRED, updatedAt: new Date() },
      });
      return;
    } catch (error) {
      throw new DatabaseError("cleaner job");
    }
  }
}
