-- CreateEnum
CREATE TYPE "public"."InvitationStatus" AS ENUM ('FOUND', 'INVITED', 'ACCEPTED', 'REJECTED', 'EXPIRED');

-- CreateTable
CREATE TABLE "public"."OrderInvitation" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "cleanerProfileId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "status" "public"."InvitationStatus" NOT NULL DEFAULT 'FOUND',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderInvitation_orderId_cleanerProfileId_key" ON "public"."OrderInvitation"("orderId", "cleanerProfileId");
