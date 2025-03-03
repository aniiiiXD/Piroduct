import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const clientId = "Ov23liDsPe7GFLWqMEMD";
const clientSecret = "81b694dae17341b9bde17fbc3db234d776a2d6fc";

if (!clientId || !clientSecret) {
  throw Error("Missing clientId or clientSecret");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
};  
    