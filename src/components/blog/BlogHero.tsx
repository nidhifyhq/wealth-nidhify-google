import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogHeroProps {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function BlogHero({
  title,
  description,
  category,
  author,
  date,
  readingTime,
}: BlogHeroProps) {
  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-10">
      <div className="max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-5">
          {category}
        </Badge>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-base md:text-lg text-primary/60 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-semibold">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-primary/70">{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readingTime}
          </div>
        </div>

        <div className="mt-8 border-b border-border" />
      </div>
    </section>
  );
}
