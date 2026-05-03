/*
  Warnings:

  - You are about to drop the column `firstName` on the `order_invitation` table. All the data in the column will be lost.
  - Added the required column `cleanerName` to the `order_invitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."order_invitation" DROP COLUMN "firstName",
ADD COLUMN     "cleanerName" TEXT NOT NULL;
