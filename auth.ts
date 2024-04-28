import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      const emails = process.env.AUTH_WHITE_LISTED_EMAILS?.split(",")

      if (!emails?.includes(user.email as any)) {
        return false
      }
      return true
    }
  }
})