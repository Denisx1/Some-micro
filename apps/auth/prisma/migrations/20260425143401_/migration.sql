/*
  Warnings:

  - You are about to drop the `AuthOutbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."AuthOutbox";

-- CreateTable
CREATE TABLE "public"."auth_outbox" (
    "id" SERIAL NOT NULL,
    "aggregatetype" TEXT NOT NULL,
    "aggregateid" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_outbox_pkey" PRIMARY KEY ("id")
);
