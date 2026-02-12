/*
  Warnings:

  - Made the column `orderId` on table `CleanerJob` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `status` to the `CleanerJob` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('ACCEPTED', 'INVITED', 'DECLINED', 'EXPIRED');

-- AlterTable
ALTER TABLE "public"."CleanerJob" ALTER COLUMN "orderId" SET NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "public"."JobStatus" NOT NULL;
