import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// 💡 NEW: Access the simplified environment variables
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// Critical check: Ensure the variables were found
if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  // We throw a clear error if the variables are missing
  throw new Error("GitHub Client ID and Secret must be defined in .env.local using GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET");
}


// 1. Define the configuration object
const config = {
  providers: [
    GitHub({
      // 💡 Pass the variables using the values we just read from process.env
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      
      // Explicitly request email
      authorization: {
        params: { scope: 'read:user user:email' },
      },
    }),
  ],
  // The AUTH_SECRET is still used automatically by next-auth internally
  session: {
    strategy: "jwt" as const, 
  },
};

// 2. Initialize NextAuth
const handler = NextAuth(config);

// 3. Export the handler for both GET and POST requests
export { handler as GET, handler as POST };