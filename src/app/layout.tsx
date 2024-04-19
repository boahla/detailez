"use client";
import defaultTheme from "@/src/themes/default";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "@/src/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <html lang="en">
        <body>
          <SessionProvider>
            <ReactQueryProvider>
              <CssBaseline />
              {children}
            </ReactQueryProvider>
          </SessionProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
