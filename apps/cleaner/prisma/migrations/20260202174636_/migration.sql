/*
  Warnings:

  - The primary key for the `CleanerOutbox` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status` on the `CleanerOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `CleanerOutbox` table. All the data in the column will be lost.
  - Added the required column `aggregateId` to the `CleanerOutbox` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aggregateType` to the `CleanerOutbox` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `CleanerOutbox` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."CleanerOutbox_status_createdAt_idx";

-- AlterTable
ALTER TABLE "public"."CleanerOutbox" DROP CONSTRAINT "CleanerOutbox_pkey",
DROP COLUMN "status",
DROP COLUMN "topic",
ADD COLUMN     "aggregateId" INTEGER NOT NULL,
ADD COLUMN     "aggregateType" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET NOT NULL,
ADD CONSTRAINT "CleanerOutbox_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CleanerOutbox_id_seq";

-- CreateIndex
CREATE INDEX "CleanerOutbox_createdAt_idx" ON "public"."CleanerOutbox"("createdAt");
