export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mutual-funds-beginners-guide',
    category: 'Mutual Funds',
    title: "Mutual Funds Explained: A Beginner's Guide for Indian Investors",
    description:
      'Learn what mutual funds are, how they work, types of funds, benefits, risks, and key terms every investor should know.',
    date: 'June 29, 2026',
    author: 'Nidhify Team',
    readingTime: '8 min read',
  },
  {
    slug: 'fixed-deposits-explained',
    category: 'Fixed Deposits',
    title: 'Fixed Deposits (FDs): Understanding How They Work and Their Features',
    description:
      'Understand what fixed deposits are, how they work, different types, features, benefits, and key differences from savings accounts.',
    date: 'June 29, 2026',
    author: 'Nidhify Team',
    readingTime: '7 min read',
  },
  {
    slug: 'mutual-funds-vs-fixed-deposits',
    category: 'Comparison',
    title: 'Mutual Funds vs Fixed Deposits: Understanding the Key Differences',
    description:
      'Compare mutual funds and fixed deposits across risk, liquidity, returns, and taxation in this educational guide.',
    date: 'June 29, 2026',
    author: 'Nidhify Team',
    readingTime: '9 min read',
  },
];
