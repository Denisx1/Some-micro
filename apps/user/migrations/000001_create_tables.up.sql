-- 1. Создаем схему в двойных кавычках
CREATE SCHEMA IF NOT EXISTS "user";

-- 2. Enum статусов
CREATE TYPE "UsertOutboxStatus" AS ENUM ('NEW', 'SENT', 'ERROR');

-- 3. Таблица ролей
CREATE TABLE "user".role (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    permissions TEXT NOT NULL,
    trace_id UUID,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. Таблица профиля
CREATE TABLE "user".profile (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    version BIGINT NOT NULL DEFAULT 1,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_name VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_email_verified BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    token_version INT DEFAULT 0,
    phone_number VARCHAR(50),
    role_id UUID NOT NULL,
    trace_id UUID,
    
    CONSTRAINT "fk_user_role" FOREIGN KEY (role_id) REFERENCES "user".role(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 5. Таблица кандидатов
CREATE TABLE "user".candidate (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    version BIGINT NOT NULL DEFAULT 1,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_name VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    action_token TEXT,
    role_id UUID NOT NULL,
    trace_id UUID,
    
    CONSTRAINT "fk_candidate_role" FOREIGN KEY (role_id) REFERENCES "user".role(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 6. Таблица Outbox
CREATE TABLE "user".outbox (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    aggregate_type VARCHAR(255) NOT NULL,
    aggregate_id UUID NOT NULL,
    payload JSONB NOT NULL,
    status "UsertOutboxStatus" NOT NULL DEFAULT 'NEW',
    trace_id UUID,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ИНДЕКСЫ
CREATE INDEX "user_email_userName_id_isActive_roleId_idx" 
ON "user".profile (email, user_name, id, is_active, role_id);

CREATE INDEX "user_trace_id_idx" ON "user".profile (trace_id);
CREATE INDEX "candidate_trace_id_idx" ON "user".candidate (trace_id);
CREATE INDEX "user_outbox_trace_id_idx" ON "user".outbox (trace_id);

CREATE INDEX "user_outbox_status_createdat_idx" 
ON "user".outbox (status, created_at);