"use client";
import { ReactNode } from "react";
import BasicLayout from "@/src/layouts/BasicLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <BasicLayout>{children}</BasicLayout>;
}
