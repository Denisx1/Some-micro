/*
  Warnings:

  - The `status` column on the `CleanerOutbox` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."OutboxCleanerStatus" AS ENUM ('NEW', 'SENT', 'ERROR');

-- AlterTable
ALTER TABLE "public"."CleanerOutbox" DROP COLUMN "status",
ADD COLUMN     "status" "public"."OutboxCleanerStatus" DEFAULT 'NEW',
ALTER COLUMN "createdAt" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "CleanerOutbox_status_createdAt_eventType_aggregateId_idx" ON "public"."CleanerOutbox"("status", "createdAt", "eventType", "aggregateId");
