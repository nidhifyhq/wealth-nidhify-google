import Link from "next/link";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Search",
  description:
    "Search Nidhify articles on wealth management, investing strategies, and personal finance tips for Indian investors.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = (params?.q || "").toString().trim().toLowerCase();

  const results = query
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Search className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Search
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {query ? `Results for "${query}"` : "Search"}
            </h1>
            <p className="text-lg text-primary/60">
              Search Nidhify articles on wealth management, investing, and
              personal finance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <form action="/search" method="GET" className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search articles..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {!query ? (
            <p className="text-center text-primary/40">
              Enter a search term above to find articles.
            </p>
          ) : results.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-secondary bg-secondary/5 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-primary/60 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-primary/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-primary/40">
              No articles found for &quot;{query}&quot;. Try a different term.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
