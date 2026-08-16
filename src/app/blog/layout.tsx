import Link from "next/link";
import Image from "next/image";
import DeviceCTA from "@/components/sections/DeviceCTA";

export const metadata = {
  title: 'Blog',
  description:
    'Stay informed with the latest articles on wealth management, investing strategies, and personal finance tips for Indian investors.',
  alternates: {
    canonical: 'https://nidhify.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/transBlackLogo.png" alt="Nidhify" width={96} height={26} className="h-7 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <DeviceCTA />
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <footer className="bg-[#092042] text-white py-8">
        <div className="container text-center text-sm text-gray-400">
          &copy; 2026 Nidhify. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
