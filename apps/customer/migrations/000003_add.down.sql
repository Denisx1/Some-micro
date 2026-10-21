UPDATE customer.profile SET first_name = '' WHERE first_name IS NULL;
UPDATE customer.profile SET last_name = '' WHERE last_name IS NULL;

ALTER TABLE customer.profile 
    ALTER COLUMN first_name SET NOT NULL,
    ALTER COLUMN last_name SET NOT NULL;