/*
  Warnings:

  - You are about to drop the column `aggregateId` on the `OrderOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `aggregateType` on the `OrderOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `eventType` on the `OrderOutbox` table. All the data in the column will be lost.
  - Added the required column `topic` to the `OrderOutbox` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."OrderOutbox_aggregateType_aggregateId_idx";

-- DropIndex
DROP INDEX "public"."OrderOutbox_eventType_idx";

-- AlterTable
ALTER TABLE "public"."OrderOutbox" DROP COLUMN "aggregateId",
DROP COLUMN "aggregateType",
DROP COLUMN "eventType",
ADD COLUMN     "topic" TEXT NOT NULL;
