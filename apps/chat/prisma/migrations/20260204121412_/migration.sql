/*
  Warnings:

  - Changed the type of `senderId` on the `ChatMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderId` on the `ChatRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `ChatRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cleanerId` on the `ChatRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."ChatMessage" DROP COLUMN "senderId",
ADD COLUMN     "senderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."ChatRoom" DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
DROP COLUMN "cleanerId",
ADD COLUMN     "cleanerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_orderId_key" ON "public"."ChatRoom"("orderId");

-- CreateIndex
CREATE INDEX "ChatRoom_orderId_idx" ON "public"."ChatRoom"("orderId");
