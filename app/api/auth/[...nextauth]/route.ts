import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// 💡 CRITICAL FIX: Forces this API route to be executed at request time (runtime), 
// which guarantees the process.env variables are loaded.
export const dynamic = "force-dynamic"; 

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// Critical check: Ensure the variables were found
if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("GitHub Client ID and Secret must be defined in .env.local using GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET");
}

// 1. Define the configuration object
const config = {
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      
      authorization: {
        // We will update the scope in Day 5 to 'repo'
        params: { scope: 'read:user user:email' },
      },
    }),
  ],
  session: {
    strategy: "jwt" as const, 
  },
};

// 2. Initialize NextAuth
const handler = NextAuth(config);

// 3. Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
// 2. Initialize NextAuth
const handler = NextAuth(config);

// 3. Export the handler for both GET and POST requests
export { handler as GET, handler as POST };