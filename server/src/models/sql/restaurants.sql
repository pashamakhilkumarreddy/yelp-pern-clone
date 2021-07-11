-- For help \?
-- To connect to a different database \c <databaseName>
-- \l - List all databases 
-- \d - List all tables in a database 

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  location VARCHAR(250) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 && price_range <=5),
);