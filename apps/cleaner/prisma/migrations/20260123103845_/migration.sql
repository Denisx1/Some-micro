/*
  Warnings:

  - You are about to drop the column `aggregateId` on the `CleanerOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `aggregateType` on the `CleanerOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `eventType` on the `CleanerOutbox` table. All the data in the column will be lost.
  - Added the required column `topic` to the `CleanerOutbox` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."CleanerOutbox_aggregateType_aggregateId_idx";

-- DropIndex
DROP INDEX "public"."CleanerOutbox_status_createdAt_eventType_aggregateId_idx";

-- AlterTable
ALTER TABLE "public"."CleanerOutbox" DROP COLUMN "aggregateId",
DROP COLUMN "aggregateType",
DROP COLUMN "eventType",
ADD COLUMN     "topic" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "CleanerOutbox_status_createdAt_idx" ON "public"."CleanerOutbox"("status", "createdAt");
