"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Search, TrendingUp } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((p) => p.category)),
  ];

  const filtered = blogPosts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const featured = blogPosts[0];

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Nidhify Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Latest Insights
            </h1>
            <p className="text-lg text-primary/60">
              Stay informed with the latest articles on wealth management,
              investing strategies, and personal finance tips.
            </p>
          </div>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block max-w-3xl mx-auto mb-12 bg-gradient-to-br from-primary to-[#1a3455] rounded-2xl p-8 md:p-10 text-white hover:shadow-xl transition-shadow"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full mb-4">
                {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-4 max-w-xl">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span>{featured.readingTime}</span>
              </div>
            </Link>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-primary/60 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
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
            <div className="text-center py-16 text-primary/40">
              <p className="text-lg">No articles found</p>
              <p className="text-sm mt-1">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
