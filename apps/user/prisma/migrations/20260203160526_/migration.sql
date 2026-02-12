/*
  Warnings:

  - You are about to drop the `cleaner_outbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."cleaner_outbox";

-- CreateTable
CREATE TABLE "public"."user_outbox" (
    "id" TEXT NOT NULL,
    "aggregatetype" TEXT NOT NULL,
    "aggregateid" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_outbox_pkey" PRIMARY KEY ("id")
);
