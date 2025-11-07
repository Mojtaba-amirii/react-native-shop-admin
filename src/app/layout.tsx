import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles/globals.css";
import type { Metadata } from "next";
import { Header2 } from "@/components/header";
import { Footer2 } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Native Admin Panel",
  description: "The admin panel for React Native shop app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header2 />
          {children}
          <Footer2 />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
