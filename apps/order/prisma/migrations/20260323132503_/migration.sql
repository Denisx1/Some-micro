/*
  Warnings:

  - You are about to drop the `OrderInvitation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."OrderInvitation";

-- CreateTable
CREATE TABLE "public"."order_invitation" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "cleanerProfileId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "status" "public"."InvitationStatus" NOT NULL DEFAULT 'FOUND',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_invitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_invitation_orderId_cleanerProfileId_key" ON "public"."order_invitation"("orderId", "cleanerProfileId");
