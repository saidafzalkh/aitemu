import { nanoid } from "nanoid";
import { AuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { isPasswordValid } from "./bcrypt";
import { prisma } from "./prisma";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/sign-in",
    signOut: "/",
  },

  adapter: PrismaAdapter(prisma) as Adapter,

  session: {
    strategy: "jwt",
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const dbUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (
          !dbUser ||
          !(await isPasswordValid(
            credentials.password,
            dbUser.password as string
          ))
        ) {
          return null;
        }

        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          image: dbUser.image,
        };
      },
    }),
  ],

  callbacks: {
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.email = token.email;
        session.user.role = token.role;
      }

      return session;
    },

    jwt: async ({ token, user }) => {
      const dbUser = await prisma.user.findFirst({
        where: { email: token.email as string },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      if (!dbUser.name) {
        await prisma.user.update({
          where: { id: dbUser.id },
          data: { name: "User" + nanoid(4) },
        });
      }
      return {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        picture: dbUser.image,
        role: dbUser.role,
      };
    },

    redirect: async () => {
      return "/dashboard";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
