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
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="h-full flex flex-col justify-between bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors rounded-lg">
        <div>
          <CardHeader className="p-5 pb-2">
            <CardTitle className="text-base font-semibold text-slate-100">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5 pb-4">
            <p className="text-sm text-slate-400 line-clamp-2 leading-snug">
              {description}
            </p>
          </CardContent>
        </div>

        <CardContent className="px-5 pb-5 pt-0">
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400">
            <span>{credits} ECTS</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800"
            >
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}