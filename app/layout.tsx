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
  description: "Advanced Web Technologies Lab 1",
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
      <body className="min-h-full flex flex-col p-6 max-w-4xl mx-auto">
        <nav className="flex gap-6 mb-8 pb-4 border-b border-gray-200">
          <Link href="/" className="font-semibold hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/courses" className="font-semibold hover:text-blue-600 transition">
            Courses
          </Link>
          <Link href="/about" className="font-semibold hover:text-blue-600 transition">
            About
          </Link>
        </nav>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}