import dotenv from 'dotenv';
dotenv.config();

interface IENVS {
  API_DOMAIN: string | undefined;
  NODE_ENV: string | undefined;
  PORT: string | undefined;
  DATABASE_URL: string | undefined;
  TOKEN_EXPIRY: string | undefined;
  TOKEN_SECRET: string | undefined;
}

const ENVS: IENVS = {
  API_DOMAIN: process.env.API_DOMAIN,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
}

export default ENVS;