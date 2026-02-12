/*
  Warnings:

  - The `status` column on the `OrderOutbox` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."OutboxOrderStatus" AS ENUM ('NEW', 'SENT', 'ERROR');

-- AlterTable
ALTER TABLE "public"."OrderOutbox" DROP COLUMN "status",
ADD COLUMN     "status" "public"."OutboxOrderStatus" DEFAULT 'NEW',
ALTER COLUMN "createdAt" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "OrderOutbox_status_createdAt_idx" ON "public"."OrderOutbox"("status", "createdAt");
