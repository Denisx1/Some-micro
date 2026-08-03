CREATE SCHEMA customer;

CREATE TABLE IF NOT EXISTS customer.profile (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL UNIQUE, -- Логическая связь (без FK)
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Создаем таблицу customer_outbox (с маппингом колонок в нижний регистр)
CREATE TABLE IF NOT EXISTS customer.outbox (
    id SERIAL PRIMARY KEY,
    aggregate_type VARCHAR(255) NOT NULL,
    aggregate_id INT NOT NULL,
    payload JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);




  