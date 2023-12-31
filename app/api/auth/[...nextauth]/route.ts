import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

// import { randomBytes, randomUUID } from "crypto";
export const authOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "your email",
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique(
          { where: { email: credentials.email } });
        if (!user) return null;
            
        const passwordMatched = await bcrypt.compare(credentials.password,user.hashedPassword!)
        
        return passwordMatched ? user : null;

      },
    }),
        GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })

  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy:'jwt'
  },
  // pages: {
  //   signIn: '/auth/signin'
  // }
} 

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }