export interface Config {
  app: {
    host: string;
    port: number;
  };
  cors: {
    allowedOrigins: string;
    allowedHeaders: string;
  };
  database: {
    redis: {
      host: string;
      port: number;
    };
  };
  client: {
    port: number;
    origin: string;
  };
}
