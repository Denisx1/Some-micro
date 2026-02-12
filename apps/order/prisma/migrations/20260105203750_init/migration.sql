-- CreateEnum
CREATE TYPE "public"."OrderStatus" AS ENUM ('INVITED', 'DONE', 'EXPIRED', 'IN_PROGRESS', 'WAITING_FRO_CLEANER', 'PENDING');

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "fromTime" TEXT NOT NULL,
    "toTime" TEXT NOT NULL,
    "status" "public"."OrderStatus" NOT NULL,
    "cleanerId" INTEGER,
    "clarifications" TEXT DEFAULT '',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderOutbox" (
    "id" SERIAL NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Order_id_idx" ON "public"."Order"("id");

-- CreateIndex
CREATE INDEX "OrderOutbox_status_createdAt_idx" ON "public"."OrderOutbox"("status", "createdAt");

-- CreateIndex
CREATE INDEX "OrderOutbox_aggregateType_aggregateId_idx" ON "public"."OrderOutbox"("aggregateType", "aggregateId");

-- CreateIndex
CREATE INDEX "OrderOutbox_eventType_idx" ON "public"."OrderOutbox"("eventType");
