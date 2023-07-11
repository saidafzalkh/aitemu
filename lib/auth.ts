import { AuthOptions, getServerSession } from "next-auth";
import GoogleProvide from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvide({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
