import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  title: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto mb-2">
      <ol className="flex items-center gap-1.5 text-sm text-primary/50">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        <ChevronRight className="w-3.5 h-3.5" />
        <li>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
        </li>
        <ChevronRight className="w-3.5 h-3.5" />
        <li className="text-primary/70 truncate max-w-[200px]" title={title}>
          {title}
        </li>
      </ol>
    </nav>
  );
}
