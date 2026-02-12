-- CreateTable
CREATE TABLE "public"."CleanerProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT DEFAULT '',
    "lastName" TEXT DEFAULT '',
    "zipCode" INTEGER DEFAULT 0,
    "city" TEXT DEFAULT '',
    "experienceYears" INTEGER DEFAULT 0,
    "rating" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "busy" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CleanerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CleanerScheduleDay" (
    "id" SERIAL NOT NULL,
    "cleanerProfileId" INTEGER NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CleanerScheduleDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CleanerScheduleSlot" (
    "id" SERIAL NOT NULL,
    "scheduleDayId" INTEGER NOT NULL,
    "startTime" TEXT,
    "endTime" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CleanerScheduleSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CleanerReview" (
    "id" SERIAL NOT NULL,
    "cleanerProfileId" INTEGER NOT NULL,
    "customerId" INTEGER,
    "rating" INTEGER,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CleanerReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CleanerJob" (
    "id" SERIAL NOT NULL,
    "cleanerProfileId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "status" TEXT,
    "paymentStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CleanerJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CleanerOutbox" (
    "id" SERIAL NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CleanerOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CleanerProfile_zipCode_city_id_userId_idx" ON "public"."CleanerProfile"("zipCode", "city", "id", "userId");

-- CreateIndex
CREATE INDEX "CleanerScheduleDay_cleanerProfileId_dayOfWeek_idx" ON "public"."CleanerScheduleDay"("cleanerProfileId", "dayOfWeek");

-- CreateIndex
CREATE INDEX "CleanerScheduleSlot_scheduleDayId_isAvailable_idx" ON "public"."CleanerScheduleSlot"("scheduleDayId", "isAvailable");

-- CreateIndex
CREATE INDEX "CleanerOutbox_status_createdAt_eventType_aggregateId_idx" ON "public"."CleanerOutbox"("status", "createdAt", "eventType", "aggregateId");

-- CreateIndex
CREATE INDEX "CleanerOutbox_aggregateType_aggregateId_idx" ON "public"."CleanerOutbox"("aggregateType", "aggregateId");

-- AddForeignKey
ALTER TABLE "public"."CleanerScheduleDay" ADD CONSTRAINT "CleanerScheduleDay_cleanerProfileId_fkey" FOREIGN KEY ("cleanerProfileId") REFERENCES "public"."CleanerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CleanerScheduleSlot" ADD CONSTRAINT "CleanerScheduleSlot_scheduleDayId_fkey" FOREIGN KEY ("scheduleDayId") REFERENCES "public"."CleanerScheduleDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CleanerReview" ADD CONSTRAINT "CleanerReview_cleanerProfileId_fkey" FOREIGN KEY ("cleanerProfileId") REFERENCES "public"."CleanerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CleanerJob" ADD CONSTRAINT "CleanerJob_cleanerProfileId_fkey" FOREIGN KEY ("cleanerProfileId") REFERENCES "public"."CleanerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
