import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Course Directory</h1>
        <p className="text-gray-600">Select a course to view details.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </main>
  );
}