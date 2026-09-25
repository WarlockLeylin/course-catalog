import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "My first node.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-5xl mx-auto px-4 w-full">
        {/* Styled Navigation Bar */}
        <nav className="flex gap-4 px-6 py-4 border-b border-slate-200 mb-8">
          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:bg-slate-100 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="px-3 py-2 rounded-md hover:bg-slate-100 transition font-medium"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-md hover:bg-slate-100 transition font-medium"
          >
            About
          </Link>
        </nav>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}