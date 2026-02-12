/*
  Warnings:

  - You are about to drop the column `type` on the `OrderOutbox` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."OrderOutbox" DROP COLUMN "type";
