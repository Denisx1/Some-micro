/*
  Warnings:

  - You are about to drop the column `eventType` on the `UserOutbox` table. All the data in the column will be lost.
  - Added the required column `topic` to the `UserOutbox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."UserOutbox" DROP COLUMN "eventType",
ADD COLUMN     "topic" TEXT NOT NULL;
