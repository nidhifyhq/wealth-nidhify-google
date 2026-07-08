# Blog Post Guide — Nidhify

## Categories

| Category | Used For |
|---|---|
| **Mutual Funds** | MF education, guides, SIP, ELSS, NAV, fund types, etc. |
| **Fixed Deposits** | FD guides, types, features, taxation, bank vs corporate FDs |
| **Comparison** | Side-by-side comparisons of two or more options |
| *(Add new)* | Define in `src/lib/blog-posts.ts` and update blog filter in `src/app/blog/page.tsx` |

Current posts use these categories. The blog listing page auto-discovers categories from the `blogPosts` array.

---

## Quick Start (Automated)

Use the generator script for a fully SEO-ready scaffold:

```bash
node new-post.js --slug <slug> --title "<title>" --desc "<description>" --cat "<category>" --time "<reading time>" --kw "<kw1, kw2, ...>"
```

**Example:**

```bash
node new-post.js ^
  --slug sip-vs-lump-sum ^
  --title "SIP vs Lump Sum: Which Is Better for Indian Investors?" ^
  --desc "Compare SIP and lump sum investment strategies across returns, risk, taxation, and suitability for different financial goals." ^
  --cat "Mutual Funds" ^
  --time "6 min read" ^
  --kw "SIP, lump sum investment, mutual fund investment, SIP vs lump sum"
```

**Interactive mode** (no args — prompts for each field):

```bash
node new-post.js
```

**The script automatically:**
1. Adds the entry to `src/lib/blog-posts.ts`
2. Creates `src/app/blog/<slug>/page.tsx` with full SEO metadata + Article schema
3. Adds the route to `src/app/sitemap.js`

After running it, open the generated file and **replace the placeholder content** with your article.

---

## Manual Step-by-Step

If you prefer to do it yourself, follow these 3 steps:

### Step 1 — `src/lib/blog-posts.ts`

Add your post to the `blogPosts` array (before the closing `];`):

```ts
{
  slug: "your-post-slug",
  title: "Your Post Title: With Subtitle",
  description:
    "A compelling 150-160 character meta description that includes your target keyword naturally.",
  category: "Mutual Funds",
  date: "July 8, 2026",
  author: "Nidhify Wealth Team",
  readingTime: "6 min read",
},
```

### Step 2 — Create `src/app/blog/<slug>/page.tsx`

Copy one of the existing posts as a template and update:

| What to update | Where |
|---|---|
| `title` (metadata) | Line ~6 |
| `description` (metadata) | Line ~8 |
| `openGraph.title`, `openGraph.description` | Lines ~10-11 |
| `openGraph.url` | Change slug |
| `openGraph.publishedTime` | ISO date `2026-07-08T00:00:00.000Z` |
| `openGraph.images[0].alt` | Post-specific alt text |
| `twitter.title`, `twitter.description` | Lines ~26-27 |
| `keywords` | 5-8 relevant keywords |
| `alternates.canonical` | Full URL with slug |
| `articleSchema.headline` | Line ~54 |
| `articleSchema.description` | Line ~55 |
| `articleSchema.datePublished` | `2026-07-08` |
| `articleSchema.dateModified` | Same as published initially |
| `articleSchema.mainEntityOfPage.@id` | Full URL with slug |
| `blogPosts.find(...)` slug | Line ~49 |
| `BlogLayout` slug prop | Line ~90 |

### Step 3 — `src/app/sitemap.js`

Add to the `blogPosts` array:

```ts
{ slug: 'your-post-slug', lastModified: '2026-07-08' },
```

---

## SEO Checklist (Every Post)

- **Meta title** — 50-65 characters, target keyword near the front
- **Meta description** — 150-160 characters, compelling, includes keyword
- **Canonical URL** — must match the actual slug
- **Keywords** — 5-8 specific long-tail keywords (not generic)
- **OG title** — same as meta title
- **OG description** — same as meta description
- **OG image** — always `/og-image.png` (1200×630)
- **OG type** — `"article"`
- **OG publishedTime** — ISO 8601 date
- **Twitter card** — `summary_large_image`
- **Robots** — `index: true, follow: true`
- **Article schema** — must include `headline`, `description`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, `mainEntityOfPage`

---

## Content Best Practices

### Structure
- **Introduction** — Hook the reader, state what the article covers
- **2-6 subheadings** (H2) — Break content into digestible sections
- **Use H3** within sections for sub-topics
- **FAQ section** at the bottom with 4-6 questions in `<details>` tags
- **Final Thoughts** — Summarize key takeaways, no hard conclusions

### Writing
- Target **Indian audience** — use Indian examples (₹, SIP, Nifty, ELSS, Section 80C, etc.)
- Avoid giving financial advice — use "may", "can", "consider", "typically"
- Include the **mandatory disclaimer** (already in `BlogLayout.tsx`)
- Keep paragraphs short (2-4 sentences)
- Use bold for key terms

### FAQ Format
Copy this pattern for each question:

```tsx
<details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
  <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
    Question here?
    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
  </summary>
  <p className="mt-3 text-sm text-gray-600 leading-relaxed">Answer here.</p>
</details>
```

---

## File Reference

```
src/
├── lib/
│   └── blog-posts.ts          ← Add post metadata here
├── app/
│   ├── sitemap.js              ← Add route here
│   ├── blog/
│   │   ├── page.tsx            ← Blog listing (auto-filtered)
│   │   ├── layout.tsx          ← Blog layout + metadata
│   │   └── <slug>/
│   │       └── page.tsx        ← Create this file
│   └── layout.js               ← Root layout (has WebSite + Organization schema)
```

---

## Testing

Always verify with a build:

```bash
npm run build
```

Check for:
- Compilation errors
- All pages generated (listed in build output under `Route (app)`)
- No type errors

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Page not found at `/blog/<slug>` | Check folder name matches slug exactly |
| Meta tags not showing | Ensure `export const metadata` is present in the page file |
| Build error: duplicate slug | Check `blog-posts.ts` and `sitemap.js` for duplicates |
| OG image not rendering | Confirm `public/og-image.png` exists (should be ~54KB) |



node new-post.js --slug why-track-all-investments --title "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)" --desc "Track mutual funds, fixed deposits, digital gold, insurance, and more in one place. Learn why an investment tracker can simplify your finances and help you stay organized." --cat "Investment Tracking" --time "7 min read" --kw "investment tracker India, track all investments, personal finance tracker, investment portfolio tracker, wealth tracker India, net worth tracker, track mutual funds, fixed deposit tracker, digital gold tracker, insurance tracker, financial dashboard"