-- AlterTable
ALTER TABLE "public"."UserOutbox" ADD COLUMN     "offset" TEXT,
ADD COLUMN     "partition" INTEGER;
