/**
 * Usage:
 *   Interactive:  node new-post.js
 *   CLI:          node new-post.js --slug my-post --title "My Title" --desc "..." --cat "Mutual Funds" --time "5 min read" --kw "kw1, kw2"
 *
 * Prompts for:
 *   slug, title, description, category, readingTime, author, keywords
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseArgs() {
  const args = process.argv.slice(2);
  const map = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      map[key] = args[++i] || "";
    }
  }
  return map;
}

const ROOT = __dirname;

async function main() {
  const cli = parseArgs();
  const useCLI = cli.slug && cli.title;

  let slug, title, description, category, readingTime, author, keywordsRaw;

  if (useCLI) {
    slug = slugify(cli.slug);
    title = cli.title;
    description = cli.desc || "";
    category = cli.cat || "";
    readingTime = cli.time || "5 min read";
    author = cli.author || "Nidhify Wealth Team";
    keywordsRaw = cli.kw || "";
    console.log("\n=== New Blog Post Generator (CLI mode) ===\n");
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const ask = (q) => new Promise((r) => rl.question(q, r));

    console.log("\n=== New Blog Post Generator ===\n");
    slug = slugify(await ask("Slug (e.g. sip-vs-lump-sum): "));
    title = await ask("Title: ");
    description = await ask("Meta description (150-160 chars): ");
    category = await ask("Category (e.g. Mutual Funds): ");
    readingTime = await ask("Reading time (e.g. 5 min read): ");
    author = (await ask("Author [Nidhify Wealth Team]: ")).trim() || "Nidhify Wealth Team";
    keywordsRaw = await ask("Keywords (comma-separated): ");
    rl.close();
  }

  const keywords = keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean);

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const isoDate = today.toISOString().split("T")[0];

  // ---------- 1. Update src/lib/blog-posts.ts ----------
  const blogPostsPath = path.join(ROOT, "src", "lib", "blog-posts.ts");
  let blogPostsContent = fs.readFileSync(blogPostsPath, "utf-8");

  const newEntry = `  {
    slug: "${slug}",
    title: "${title.replace(/"/g, '\\"')}",
    description:
      "${description.replace(/"/g, '\\"')}",
    category: "${category}",
    date: "${dateStr}",
    author: "${author}",
    readingTime: "${readingTime}",
  },`;

  // Insert before the closing bracket of the array
  blogPostsContent = blogPostsContent.replace(
    /];\s*$/,
    `${newEntry}\n];`
  );
  fs.writeFileSync(blogPostsPath, blogPostsContent);
  console.log("  ✓ Updated src/lib/blog-posts.ts");

  // ---------- 2. Create page file ----------
  const pageDir = path.join(ROOT, "src", "app", "blog", slug);
  fs.mkdirSync(pageDir, { recursive: true });

  const pageContent = `import { ChevronDown } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata = {
  title: "${title.replace(/"/g, '\\"')}",
  description:
    "${description.replace(/"/g, '\\"')}",
  openGraph: {
    title: "${title.replace(/"/g, '\\"')}",
    description:
      "${description.replace(/"/g, '\\"')}",
    url: "https://nidhify.com/blog/${slug}",
    type: "article",
    publishedTime: "${isoDate}T00:00:00.000Z",
    authors: ["${author}"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "${title.replace(/"/g, '')}",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title.replace(/"/g, '\\"')}",
    description:
      "${description.replace(/"/g, '\\"')}",
    images: ["/og-image.png"],
  },
  keywords: [${keywords.map((k) => '"' + k.replace(/"/g, '\\"') + '"').join(", ")}],
  alternates: {
    canonical: "https://nidhify.com/blog/${slug}",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const post = blogPosts.find((p) => p.slug === "${slug}");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "Nidhify" },
    publisher: {
      "@type": "Organization",
      name: "Nidhify",
      logo: { "@type": "ImageObject", url: "https://nidhify.com/logo192px.png" },
    },
    datePublished: "${isoDate}",
    dateModified: "${isoDate}",
    image: "https://nidhify.com/og-image.png",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://nidhify.com/blog/${slug}" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogLayout
        title={post.title}
        description={post.description}
        category={post.category}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        slug="${slug}"
      >
        {/* ====== WRITE YOUR CONTENT HERE ====== */}
        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Introduction</h2>
          <p>Write your introduction here.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Main Section</h2>
          <p>Write your content here.</p>
        </section>

        <section id="frequently-asked-questions" className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
                Question 1?
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">Answer 1.</p>
            </details>
          </div>
        </section>
      </BlogLayout>
    </>
  );
}
`;

  const pagePath = path.join(pageDir, "page.tsx");
  fs.writeFileSync(pagePath, pageContent);
  console.log(`  ✓ Created src/app/blog/${slug}/page.tsx`);

  // ---------- 3. Update src/app/sitemap.js ----------
  const sitemapPath = path.join(ROOT, "src", "app", "sitemap.js");
  let sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

  const sitemapEntry = `  { slug: '${slug}', lastModified: '${isoDate}' },`;
  sitemapContent = sitemapContent.replace(
    /];\s*\n\s*export default function sitemap/,
    `${sitemapEntry}\n];\n\nexport default function sitemap`
  );
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log("  ✓ Updated src/app/sitemap.js");

  console.log("\n=== Done! Fill in your content at src/app/blog/" + slug + "/page.tsx ===\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
