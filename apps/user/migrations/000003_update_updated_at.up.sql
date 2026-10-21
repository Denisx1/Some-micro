ALTER TABLE "user".role 
    ALTER COLUMN updated_at DROP DEFAULT,
    ALTER COLUMN updated_at DROP NOT NULL;