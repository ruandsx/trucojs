type NODE_ENV = "development" | "production" | "test";

type PublicRuntimeConfig = {
  app: {
    env: NODE_ENV;
  };
  server: {
    url: string;
  };
};

export const config: PublicRuntimeConfig = {
  app: {
    env: process.env.NODE_ENV,
  },
  server: {
    url: String(process.env.NEXT_PUBLIC_SERVER_URL),
  },
};
