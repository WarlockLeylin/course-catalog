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
  description: "Advanced Web Technologies - Lab 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col max-w-6xl mx-auto px-6 py-6 w-full bg-slate-950 text-slate-100">
        <header className="sticky top-4 z-50 mb-10">
          <nav className="flex items-center justify-between px-6 py-3.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
              <span className="font-bold text-slate-100 tracking-tight text-lg">
                Node.js Project
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}