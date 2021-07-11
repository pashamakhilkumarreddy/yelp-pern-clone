const config = {
  server: {
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 5000,
  },
  db: {
    PGHOST: process.env.PGHOST || '127.0.0.1',
    PGPORT: process.env.PGPORT || 5432,
    PGDATABASE: process.env.PGDATABASE,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
  },
  jwt: {
    JWT_ISSUER: process.env.JWT_ISSUER || 'johndoe',
    JWT_SECRET: process.env.JWT_SECRET || 'D5Sww5+fYYbXnJO/hQSTM+DIuvjrEir6',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '30m',
  },
};

export default config;
