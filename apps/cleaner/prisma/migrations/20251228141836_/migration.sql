/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CleanerProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CleanerProfile_userId_key" ON "public"."CleanerProfile"("userId");
