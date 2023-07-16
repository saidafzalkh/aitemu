export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;

      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;

      NODE_ENV: "development" | "production";

      UPLOADTHING_SECRET: string;
      UPLOADTHING_APP_ID: string;
    }
  }
}
