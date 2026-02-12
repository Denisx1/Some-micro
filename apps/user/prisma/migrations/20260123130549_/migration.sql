/*
  Warnings:

  - You are about to drop the column `topic` on the `UserOutbox` table. All the data in the column will be lost.
  - Added the required column `eventType` to the `UserOutbox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."UserOutbox" DROP COLUMN "topic",
ADD COLUMN     "eventType" TEXT NOT NULL;
