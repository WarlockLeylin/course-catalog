import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">
        Course Catalog Portal
      </h1>
      <p className="text-gray-600">
        Welcome to the course catalog! Browse available courses for the current semester.
      </p>
      <div>
        <Link
          href="/courses"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Courses →
        </Link>
      </div>
    </main>
  );
}