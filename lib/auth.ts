import { AuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { prisma } from "./prisma";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Credentials({
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      authorize: async (credentials) => {
        const dbUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        return null;
      },
    }),
  ],

  callbacks: {
    redirect: async () => {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
