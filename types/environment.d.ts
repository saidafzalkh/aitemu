export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_URL: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL_NON_POOLING: string;
      POSTGRES_USER: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATABASE: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;

      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;

      NODE_ENV: "development" | "production";
    }
  }
}
