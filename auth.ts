import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/lib/definitions";
import { postSignin } from "./apis/auth";

export const { signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (email && password) {
          const loginRes = await postSignin({
            email,
            password,
          });

          // 로그인 실패 처리
          if (!loginRes.success) return null;
          // 로그인 성공 처리
          const user = {
            name: loginRes.data.name ?? "",
            email: loginRes.data.email ?? "",
          } as User;
          return user;
        }
        return null;
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
});
