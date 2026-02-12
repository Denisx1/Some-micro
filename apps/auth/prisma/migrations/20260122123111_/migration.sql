-- CreateEnum
CREATE TYPE "public"."AuthOutboxStatus" AS ENUM ('NEW', 'SENT', 'ERROR');

-- CreateTable
CREATE TABLE "public"."Auth" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "deviceId" TEXT NOT NULL,
    "deviceName" TEXT,
    "refreshHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuthOutbox" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "public"."AuthOutboxStatus" DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Auth_userId_idx" ON "public"."Auth"("userId");

-- CreateIndex
CREATE INDEX "Auth_userId_deviceId_idx" ON "public"."Auth"("userId", "deviceId");

-- CreateIndex
CREATE INDEX "Auth_expiresAt_idx" ON "public"."Auth"("expiresAt");

-- CreateIndex
CREATE INDEX "AuthOutbox_status_createdAt_idx" ON "public"."AuthOutbox"("status", "createdAt");
