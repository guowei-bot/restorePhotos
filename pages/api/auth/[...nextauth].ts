import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

const logger = {
  error(code: string, ...message: any[]) {
    console.error(code, ...message)
  },
  warn(code: string, ...message: any[]) {
    console.warn(code, ...message)
  },
  debug(code: string, ...message: any[]) {
    console.debug(code, ...message)
  },
  info(code: string, ...message: any[]) {
    console.info(code, ...message)
  },
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      console.log('signIn callback was called!');
      console.log('User: ', user);
      console.log('Account: ', account);
      console.log('Profile: ', profile);

      // if you want to allow the sign in
      return true;
    }
  },
  logger: logger
};

export default NextAuth(authOptions);

