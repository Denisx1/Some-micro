/*
  Warnings:

  - The primary key for the `OrderOutbox` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderOutbox` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."OrderOutbox" DROP CONSTRAINT "OrderOutbox_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OrderOutbox_pkey" PRIMARY KEY ("id");
