-- CreateEnum
CREATE TYPE "public"."CustomerDecision" AS ENUM ('PENDING', 'SELECTED', 'NOT_SELECTED');

-- CreateEnum
CREATE TYPE "public"."CleanerStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "public"."order_invitation" ADD COLUMN     "cleaner_status" "public"."CleanerStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "customer_decision" "public"."CustomerDecision" NOT NULL DEFAULT 'PENDING';
