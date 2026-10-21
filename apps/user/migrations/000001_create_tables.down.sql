DROP TABLE IF EXISTS "user".outbox;
DROP TABLE IF EXISTS "user".candidate;
DROP TABLE IF EXISTS "user".profile;
DROP TABLE IF EXISTS "user".role;


-- 3. В самом конце удаляем enum (так как таблицы его больше не используют)
DROP TYPE IF EXISTS "UsertOutboxStatus";

DROP TABLE IF EXISTS "user";