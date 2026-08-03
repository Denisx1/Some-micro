-- 1. Для customer.outbox
ALTER TABLE customer.outbox 
    ALTER COLUMN id DROP DEFAULT,
    ALTER COLUMN id SET DATA TYPE UUID USING NULL,
    ALTER COLUMN id SET DEFAULT uuidv7();

-- 2. Для customer.profile
ALTER TABLE customer.profile 
    ALTER COLUMN id DROP DEFAULT,
    ALTER COLUMN id SET DATA TYPE UUID USING NULL,
    ALTER COLUMN id SET DEFAULT uuidv7();  