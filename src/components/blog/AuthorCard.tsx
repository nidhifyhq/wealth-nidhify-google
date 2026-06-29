import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorCardProps {
  author: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xl font-bold mb-4">
          {getInitials(author) || <User className="w-6 h-6" />}
        </div>
        <h4 className="text-base font-semibold text-primary">{author}</h4>
        <p className="text-sm text-primary/50 mt-0.5">Nidhify Wealth Team</p>
      </CardContent>
    </Card>
  );
}
