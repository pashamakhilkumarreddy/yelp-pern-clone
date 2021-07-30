-- For help \?
-- To connect to a different database \c <databaseName>
-- \l - List all databases 
-- \d - List all tables in a database 

CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  name VARCHAR(250),
  mobile VARCHAR(18),
  gender,
  dob,
  doj,
  is_admin,
  referral_code VARCHAR(250) NOT NULL,
  referrer_code VARCHAR(250) NOT NULL,
);
