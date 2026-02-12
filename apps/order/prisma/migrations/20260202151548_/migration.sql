/*
  Warnings:

  - The primary key for the `OrderOutbox` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `aggregateId` on the `OrderOutbox` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."OrderOutbox" DROP CONSTRAINT "OrderOutbox_pkey",
DROP COLUMN "aggregateId",
ADD COLUMN     "aggregateId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OrderOutbox_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OrderOutbox_id_seq";
