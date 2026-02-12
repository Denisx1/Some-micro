/*
  Warnings:

  - A unique constraint covering the columns `[cleanerProfileId,dayOfWeek]` on the table `CleanerScheduleDay` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."CleanerScheduleDay_cleanerProfileId_dayOfWeek_idx";

-- CreateIndex
CREATE UNIQUE INDEX "CleanerScheduleDay_cleanerProfileId_dayOfWeek_key" ON "public"."CleanerScheduleDay"("cleanerProfileId", "dayOfWeek");
