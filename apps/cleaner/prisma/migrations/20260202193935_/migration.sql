/*
  Warnings:

  - You are about to drop the `CleanerOutbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."CleanerOutbox";

-- CreateTable
CREATE TABLE "public"."cleaner_outbox" (
    "id" TEXT NOT NULL,
    "aggregatetype" TEXT NOT NULL,
    "aggregateid" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cleaner_outbox_pkey" PRIMARY KEY ("id")
);
