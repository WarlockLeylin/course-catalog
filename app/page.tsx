import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-orange-400">
        Course Catalog Portal
      </h1>
      <p className="text-gray-200 leading-relaxed">
        Welcome to the course catalog! Browse available courses for the current semester.
      </p>
      <div>
        <Link
          href="/courses"
          className="inline-block px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition-colors"
        >
          View Courses →
        </Link>
      </div>
    </main>
  );
}