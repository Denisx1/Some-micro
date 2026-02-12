/*
  Warnings:

  - Made the column `orderId` on table `CleanerJob` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."CleanerJob" ALTER COLUMN "orderId" SET NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'INVITED';
