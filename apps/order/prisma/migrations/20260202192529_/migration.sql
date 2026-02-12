/*
  Warnings:

  - You are about to drop the column `aggregate_id` on the `order_outbox` table. All the data in the column will be lost.
  - You are about to drop the column `aggregate_type` on the `order_outbox` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `order_outbox` table. All the data in the column will be lost.
  - Added the required column `aggregateid` to the `order_outbox` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aggregatetype` to the `order_outbox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."order_outbox" DROP COLUMN "aggregate_id",
DROP COLUMN "aggregate_type",
DROP COLUMN "created_at",
ADD COLUMN     "aggregateid" INTEGER NOT NULL,
ADD COLUMN     "aggregatetype" TEXT NOT NULL,
ADD COLUMN     "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
