/*
  Warnings:

  - Made the column `name` on table `Role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `permissions` on table `Role` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Role" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "permissions" SET NOT NULL;
