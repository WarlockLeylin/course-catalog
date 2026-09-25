import Link from 'next/link';

export default function CourseNotFound() {
  return (
    <main className="space-y-4 py-10 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Course Not Found</h2>
      <p className="text-gray-600">
        The requested course does not exist in our catalog.
      </p>
      <div>
        <Link
          href="/courses"
          className="text-blue-600 underline font-medium hover:text-blue-800"
        >
          ← Back to Course Directory
        </Link>
      </div>
    </main>
  );
}