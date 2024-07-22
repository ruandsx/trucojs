import { Config } from '@interfaces/config';

export const config: Config = {
  app: {
    host: String(process.env.APP_HOST),
    port: Number(process.env.APP_PORT) || 3333,
  },
  cors: {
    allowedOrigins: String(process.env.APP_CORS_ALLOWED_ORIGINS),
    allowedHeaders: String(process.env.APP_CORS_ALLOWED_HEADERS),
  },
  database: {
    redis: {
      host: String(process.env.REDIS_HOST),
      port: Number(process.env.REDIS_PORT),
    },
  },
  client: {
    port: Number(process.env.CLIENT_PORT),
    origin: String(process.env.CLIENT_ORIGIN),
  },
};
