import { Module } from "@nestjs/common";
import { CleanerOutboxRepository } from "./repository/cleaner.outbox.repository";

import { PrismaModule } from "@app/common";
import { PrismaClient as CleanerClient } from "@app/cleaner/infrastructure/prisma/generated";
import { ProfileRepository } from "./repository/cleaner.profile.repository";
import { CleanerPrismaService } from "@app/cleaner/infrastructure/prisma/prisma.cleaner.service";
import { CqrsModule } from "@nestjs/cqrs";
import { cleaterRepo } from "./repository";

@Module({
  imports: [PrismaModule.forRoot(CleanerClient), CqrsModule],
  controllers: [],
  providers: [...cleaterRepo, CleanerPrismaService],
  exports: [...cleaterRepo, CleanerPrismaService, CqrsModule],
})
export class InfrastructureModule {}
