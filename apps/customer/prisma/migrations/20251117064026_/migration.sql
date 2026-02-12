/*
  Warnings:

  - You are about to drop the column `address` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Customer" DROP COLUMN "address",
DROP COLUMN "phone",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "zipCode" INTEGER;
