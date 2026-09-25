import { getCourse, getCourses } from '@/lib/courses';
import LikeButton from '@/components/LikeButton';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

// to gather static pages on build step
export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  // Course not found
  if (!course) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        {course.description}
      </p>
      
      <div className="flex gap-6 items-center text-sm font-medium text-gray-600">
        <span>Credits: {course.credits} ECTS</span>
        <span>Type: {course.isElective ? 'Elective' : 'Required'}</span>
      </div>

      <div className="pt-2">
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}