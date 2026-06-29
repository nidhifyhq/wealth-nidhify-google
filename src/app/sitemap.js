const BASE_URL = 'https://nidhify.com';

export default function sitemap() {
  const routes = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/login',
    '/signup',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
