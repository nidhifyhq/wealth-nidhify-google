import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

interface RelatedPostsProps {
  currentSlug: string;
  category?: string;
}

export default function RelatedPosts({
  currentSlug,
  category,
}: RelatedPostsProps) {
  const related = blogPosts.filter(
    (post) =>
      post.slug !== currentSlug &&
      (category ? post.category === category : true)
  );

  if (related.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border">
      <h2 className="text-xl font-bold text-primary mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {related.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium text-secondary bg-secondary/5 rounded-full mb-3">
              {post.category}
            </span>
            <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs text-primary/50 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
      {related.length > 3 && (
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
