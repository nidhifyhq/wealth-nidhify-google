"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog-posts";

const categoryColors = {
  "Mutual Funds": "bg-blue-100 text-blue-700 border-blue-200",
  "Fixed Deposits": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Investment Tracking": "bg-violet-100 text-violet-700 border-violet-200",
  Comparison: "bg-amber-100 text-amber-700 border-amber-200",
};

const posts = blogPosts
  .slice()
  .reverse()
  .slice(0, 4)
  .map((post) => ({
    ...post,
    excerpt: post.description,
    badgeColor:
      categoryColors[post.category] || "bg-gray-100 text-gray-700 border-gray-200",
  }));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Latest Insights
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/50 leading-relaxed">
            Expert advice and tips to help you make smarter financial decisions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="p-6 flex flex-col h-full">
                <Badge
                  variant="outline"
                  className={`self-start mb-3 ${post.badgeColor}`}
                >
                  {post.category}
                </Badge>
                <div className="flex items-center gap-1.5 mb-3 text-xs text-primary/40">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-base font-semibold text-primary leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-primary/50 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-primary/40">
                    {post.author}
                  </span>
                  <Link
                    href={"/blog/" + post.slug}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-medium rounded-xl border border-gray-200 bg-white text-primary hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
