-- CreateTable
CREATE TABLE "public"."customer_outbox" (
    "id" TEXT NOT NULL,
    "aggregatetype" TEXT NOT NULL,
    "aggregateid" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_outbox_pkey" PRIMARY KEY ("id")
);
