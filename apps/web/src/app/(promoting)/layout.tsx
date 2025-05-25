import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Providers from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TimePatch - Smart Time Management for Modern Teams",
  description:
    "Streamline your workflow with AI-powered task suggestions, adaptive scheduling, and intelligent time management. Built for the way you actually work.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PromotingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
    </>
  );
}
