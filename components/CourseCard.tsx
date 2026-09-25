import Link from "next/link";


type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block p-5 border border-gray-200 rounded-lg hover:shadow-md transition bg-white"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex justify-between items-center text-sm font-medium text-gray-500">
        <span>{credits} ECTS</span>
        <span>❤️ {likes}</span>
      </div>
    </Link>
  );
}