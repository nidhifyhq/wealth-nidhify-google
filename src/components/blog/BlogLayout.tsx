import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";
import BlogTOC from "./BlogTOC";
import Breadcrumbs from "./Breadcrumbs";
import ShareButtons from "./ShareButtons";
import AuthorCard from "./AuthorCard";
import NewsletterCTA from "./NewsletterCTA";
import RelatedPosts from "./RelatedPosts";

interface BlogLayoutProps {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  slug?: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  description,
  category,
  author,
  date,
  readingTime,
  slug = "",
  children,
}: BlogLayoutProps) {
  return (
    <article>
      <Breadcrumbs title={title} />
      <BlogHero
        title={title}
        description={description}
        category={category}
        author={author}
        date={date}
        readingTime={readingTime}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_240px] gap-8">
        <div>
          <BlogTOC />
          <div data-blog-content>
            <BlogContent>{children}</BlogContent>
          </div>

          <div className="max-w-3xl mx-auto mt-10 pt-6 border-t border-border">
            <ShareButtons title={title} />
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <AuthorCard author={author} />
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="bg-muted rounded-xl p-5 border border-border">
              <AuthorCard author={author} />
            </div>
          </div>
        </aside>
      </div>

      <div className="max-w-3xl mx-auto mt-10 px-4">
        <NewsletterCTA />
      </div>

      <div className="px-4">
        <RelatedPosts
          currentSlug={slug}
          category={category}
        />
      </div>

      <div className="max-w-3xl mx-auto mt-12 px-4">
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 leading-relaxed">
          <strong>Disclaimer:</strong> The information provided in this article
          is for educational and informational purposes only and should not be
          considered financial, investment, or tax advice. Please consult a
          qualified financial advisor before making any investment decisions.
        </div>
      </div>
    </article>
  );
}
