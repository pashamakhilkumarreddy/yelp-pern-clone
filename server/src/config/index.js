require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 5000,
    HOST: process.env.PORT || '127.0.0.1',
  },
  db: {
    DB_NAME: process.env.DB_NAME || 'pkrm',
    DB_USER: process.env.DB_USER || 'test',
    DB_PASSWORD: process.env.DB_PASSWORD || 'johndoe',
    options: {
      port: process.env.DB_PORT || 5432,
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'postgres',
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'zhCdHGV+RNBLDF+nBVEAcJ5upIKZy3xsuJfecxeSWHo',
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || '60d',
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || '15m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'johndoe',
  },
  redis: {
    REDIS_PORT: process.env.REDIS_PORT || 6349,
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    REDIS_PASSWORD: process.env.REDIS_PASSWORD || 'johndoe',
  },
};
