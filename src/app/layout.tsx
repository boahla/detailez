"use client";
import defaultTheme from "@/src/themes/default";
import "@/src/styles/globals.css";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  styled,
} from "@mui/material/styles";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { LAYOUTS_NUMBERS } from "@/src/datas";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "@/src/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ReactQueryProvider>
            <CssBaseline />
            <CssVarsProvider theme={defaultTheme}>{children}</CssVarsProvider>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
