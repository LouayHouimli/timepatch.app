import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-primary/10 selection:text-primary min-h-screen`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
