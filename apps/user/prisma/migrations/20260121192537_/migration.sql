-- CreateEnum
CREATE TYPE "public"."UsertOutboxStatus" AS ENUM ('NEW', 'SENT', 'ERROR');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isEmailVerified" BOOLEAN DEFAULT true,
    "isActive" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "roleId" INTEGER NOT NULL,
    "tokenVersion" INTEGER DEFAULT 0,
    "phoneNumber" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserOutbox" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "public"."UsertOutboxStatus" DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "public"."User"("userName");

-- CreateIndex
CREATE INDEX "User_email_userName_id_isActive_roleId_idx" ON "public"."User"("email", "userName", "id", "isActive", "roleId");

-- CreateIndex
CREATE INDEX "UserOutbox_status_createdAt_idx" ON "public"."UserOutbox"("status", "createdAt");
