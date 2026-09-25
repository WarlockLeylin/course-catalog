import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Link href={`/courses/${id}`}>
      <Card className="hover:shadow-md hover:border-blue-300 transition">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-500">
              {credits} ECTS
            </span>
            <Button variant="ghost" size="sm">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}