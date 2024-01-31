import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const OPTIONS: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "your-username",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // retrieve credentials from user table in database
    //     // docs: configuration/providers/credentials
    //   },
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
