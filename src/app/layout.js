import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'Nidhify — Track Your Entire Wealth in One Place',
    template: '%s | Nidhify',
  },
  description:
    'Manage investments, monitor your net worth, and stay in control of your financial future with one powerful dashboard. Nidhify brings together mutual funds, stocks, deposits, insurance policies, and financial goals into a single secure platform.',
  keywords: [
    'wealth management',
    'investment tracker',
    'personal finance',
    'net worth tracker',
    'SIP management',
    'mutual funds',
    'Indian investors',
  ],
  authors: [{ name: 'Nidhify' }],
  creator: 'Nidhify',
  publisher: 'Nidhify',
  metadataBase: new URL('https://nidhify.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nidhify.com',
    siteName: 'Nidhify',
    title: 'Nidhify — Track Your Entire Wealth in One Place',
    description:
      'Manage investments, monitor your net worth, and stay in control of your financial future with one powerful dashboard.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nidhify - Wealth Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidhify — Track Your Entire Wealth in One Place',
    description:
      'Manage investments, monitor your net worth, and stay in control of your financial future with one powerful dashboard.',
    images: ['/og-image.png'],
    creator: '@nidhify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo192px.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo192px.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Nidhify',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Android, iOS, Web',
              description:
                'Smart personal wealth management platform that helps users track all their investments in one place.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
              },
              author: {
                '@type': 'Organization',
                name: 'Nidhify',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
