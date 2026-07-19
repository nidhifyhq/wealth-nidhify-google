export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mutual-funds-beginners-guide",
    title: "Mutual Funds Explained: A Beginner's Guide for Indian Investors",
    description:
      "Learn what mutual funds are, how they work, types of funds, benefits, risks, and key terms every investor should know.",
    category: "Mutual Funds",
    date: "June 29, 2026",
    author: "Nidhify Wealth Team",
    readingTime: "8 min read",
  },
  {
    slug: "fixed-deposits-explained",
    title: "Fixed Deposits (FDs): Understanding How They Work and Their Features",
    description:
      "Understand what fixed deposits are, how they work, different types, features, benefits, and key differences from savings accounts.",
    category: "Fixed Deposits",
    date: "June 29, 2026",
    author: "Nidhify Wealth Team",
    readingTime: "7 min read",
  },
  {
    slug: "mutual-funds-vs-fixed-deposits",
    title: "Mutual Funds vs Fixed Deposits: Understanding the Key Differences",
    description:
      "Compare mutual funds and fixed deposits across risk, liquidity, returns, and taxation in this educational guide.",
    category: "Comparison",
    date: "June 29, 2026",
    author: "Nidhify Wealth Team",
    readingTime: "6 min read",
  },
  {
    slug: "why-track-all-investments",
    title: "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)",
    description:
      "Track mutual funds, fixed deposits, digital gold, insurance, and more in one place. Learn why an investment tracker can simplify your finances and help you stay organized.",
    category: "Investment Tracking",
    date: "July 8, 2026",
    author: "Nidhify Wealth Team",
    readingTime: "7 min read",
  },
  {
    slug: "what-are-smart-ways-to-save-money-on-groceries",
    title: "What Are Smart Ways to Save Money on Groceries? 21 Practical Tips (2026)",
    description:
      "Discover 21 smart ways to save money on groceries with practical budgeting tips. Learn how to reduce grocery expenses, avoid overspending, and stick to your monthly food budget.",
    category: "Budgeting",
    date: "July 19, 2026",
    author: "Nidhify Wealth Team",
    readingTime: "10 min read",
  },
];