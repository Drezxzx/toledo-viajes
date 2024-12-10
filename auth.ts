import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createUser } from "./app/actions/actions";


 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET})],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
     const isUserCreated = await createUser(user);
     console.log(isUserCreated);
      return true;
    },
  },
})