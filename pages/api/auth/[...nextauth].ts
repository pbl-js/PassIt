import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "../../../config";
import { prisma } from "../../../server/db/client";

export const authOptions = {
  // pages: {
  //   signIn: routes.signIn,
  // },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
