import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { LikeButton } from "@/components/LikeButton";
import { EnrollForm } from "@/components/EnrollForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-slate-700 mb-4">{course.description}</p>
      <div className="mb-6 flex gap-4 text-sm text-slate-600">
        <span>Credits: {course.credits}</span>
        {course.isElective && <span className="font-semibold text-blue-600">Elective course</span>}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <LikeButton courseId={course.id} initialLikes={course.likes} />
      </div>

      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Enroll in this course</h2>
        <EnrollForm courseId={course.id} />
      </section>
    </main>
  );
}