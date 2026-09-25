import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="space-y-6 max-w-2xl">
      <Link
        href="/courses"
        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
      >
        ← Back to Courses
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/50">
          {course.isElective ? "Elective" : "Required"}
        </span>
        <h1 className="text-3xl font-bold text-slate-100">{course.title}</h1>
      </div>

      <p className="text-slate-300 text-base leading-relaxed">
        {course.description}
      </p>

      <div className="flex gap-6 items-center text-sm font-medium text-slate-400 pt-2 border-t border-slate-800">
        <span>Credits: {course.credits} ECTS</span>
      </div>

      <div className="pt-2">
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}