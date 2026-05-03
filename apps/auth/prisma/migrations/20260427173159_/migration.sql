/*
  Warnings:

  - You are about to drop the `Auth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Auth";

-- CreateTable
CREATE TABLE "public"."auth" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "auth_userId_idx" ON "public"."auth"("userId");

-- CreateIndex
CREATE INDEX "auth_expiresAt_idx" ON "public"."auth"("expiresAt");
