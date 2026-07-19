const BASE_URL = 'https://nidhify.com';

const blogPosts = [
  { slug: 'mutual-funds-beginners-guide', lastModified: '2026-06-29' },
  { slug: 'fixed-deposits-explained', lastModified: '2026-06-29' },
  { slug: 'mutual-funds-vs-fixed-deposits', lastModified: '2026-06-29' },
  { slug: 'why-track-all-investments', lastModified: '2026-07-08' },
  { slug: 'what-are-smart-ways-to-save-money-on-groceries', lastModified: '2026-07-19' },
];

export default function sitemap() {
  const staticRoutes = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

