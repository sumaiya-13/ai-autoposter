import type { Metadata } from "next";
// Note: We are keeping your Geist font imports
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 💡 Import the new AuthProvider you just created
import AuthProvider from './providers/Auth'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Autoposter", // Changed title slightly for project context
  description: "AI Autoposter for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 💡 The critical change: Wrapping children with AuthProvider */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}