ALTER TABLE "user".role 
    ADD COLUMN IF NOT EXISTS trace_id UUID;