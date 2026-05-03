/*
  Warnings:

  - Added the required column `receiverId` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ChatMessage" ADD COLUMN     "receiverId" INTEGER NOT NULL;
