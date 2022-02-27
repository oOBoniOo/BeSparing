import dotenv from 'dotenv';

dotenv.config();

const checkEnv = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error(`Please define the Enviroment variable ${envVar}`);
  } else {
    return process.env[envVar] as string;
  }
};

export const PORT: number = parseInt(checkEnv('PORT'), 10);
export const DB_URL: string = checkEnv('DB_URL');
export const URL_GASOFA: string = checkEnv('URL_GASOFA');
export const URL_ELECT: string = checkEnv('URL_ELECT');
export const AUTH0 = {
  DOMAIN: checkEnv('AUTH0_DOMAIN'),
  AUDIENCE: checkEnv('AUTH0_AUDIENCE'),
};
