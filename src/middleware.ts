export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!join|login|$).*)"],
};
