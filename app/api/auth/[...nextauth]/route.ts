import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { randomBytes, randomUUID } from "crypto";
export const authOptions:NextAuthOptions = {
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy:'jwt'
  }
  // session: {
  //   strategy: "database",
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  //   updateAge: 24 * 60 * 60, // 24 hours
  //   generateSessionToken: () => {
  //     return randomUUID?.() ?? randomBytes(32).toString("hex")
  // }
  // }
} 

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }