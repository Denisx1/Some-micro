-- This is an empty migration.
-- This is an empty migration.-- This is an empty migration.

DROP FUNCTION IF EXISTS find_cleaner_candidates(INT, TEXT, INT, TEXT, TEXT);
-- DROP VIEW IF EXISTS view_cleaner_availability CASCADE;

CREATE OR REPLACE FUNCTION text_to_time_immutable(t text) 
RETURNS time AS $$
BEGIN
  RETURN t::time;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

CREATE INDEX IF NOT EXISTS idx_slots_time_fast_cast ON "CleanerScheduleSlot" (
  "scheduleDayId", 
  "isAvailable", 
  text_to_time_immutable("startTime"), 
  text_to_time_immutable("endTime")
);

CREATE OR REPLACE FUNCTION find_cleaner_candidates(
    p_zip_code INT,
    p_city TEXT,
    p_day_of_week INT,
    p_from_time TEXT,
    p_to_time TEXT
)
RETURNS TABLE (id INT, "userId" INT)
AS $$
BEGIN
    RETURN QUERY
    SELECT p.id, p."userId"
    FROM "CleanerProfile" p
    JOIN "CleanerScheduleDay" d ON d."cleanerProfileId" = p.id
    JOIN "CleanerScheduleSlot" s ON s."scheduleDayId" = d.id
    WHERE p."zipCode" = p_zip_code
      AND p."city" = p_city
      AND d."dayOfWeek" = p_day_of_week
      AND s."isAvailable" = true
      -- Используем наш функциональный индекс!
      AND text_to_time_immutable(s."startTime") < text_to_time_immutable(p_to_time)
      AND text_to_time_immutable(s."endTime") > text_to_time_immutable(p_from_time);

END;
$$ LANGUAGE plpgsql;