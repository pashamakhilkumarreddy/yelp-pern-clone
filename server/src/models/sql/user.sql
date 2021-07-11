-- For help \?
-- To connect to a different database \c <databaseName>
-- \l - List all databases 
-- \d - List all tables in a database 

CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,,
  name VARCHAR(250) NOT NULL,
  username VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
);
