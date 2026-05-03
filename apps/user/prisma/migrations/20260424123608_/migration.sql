/*
  Warnings:

  - Added the required column `actionToken` to the `candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."candidate" ADD COLUMN     "actionToken" TEXT NOT NULL;
