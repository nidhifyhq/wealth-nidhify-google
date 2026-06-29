import Link from 'next/link';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Nidhify — the smart personal wealth management platform helping Indian investors track and grow their wealth.',
};

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description:
      'Your financial data is protected with industry-standard encryption and security practices.',
  },
  {
    icon: Target,
    title: 'Clarity & Focus',
    description:
      'We believe in making personal finance simple and transparent for every Indian investor.',
  },
  {
    icon: Users,
    title: 'User First',
    description:
      'Every feature we build is designed with our users needs and financial well-being in mind.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description:
      'We are committed to continuously improving and helping our users achieve financial growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Nidhify
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-4 py-2 text-sm font-medium hover:bg-secondary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Nidhify</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nidhify is a smart personal wealth management platform designed to help Indian investors
                track all their investments in one place. From mutual funds and stocks to fixed deposits,
                EPF, PPF, insurance, and loans — we give you a complete picture of your financial life.
              </p>
            </div>
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that managing wealth should not be complicated. Our mission is to simplify
                personal finance for every Indian, providing a single source of truth for all investments
                and financial goals. We want to help you make smarter financial decisions with confidence.
              </p>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded by a team of finance and technology professionals, Nidhify was born from the
                frustration of managing multiple investment accounts across different platforms. We set out
                to build a unified dashboard that gives users complete visibility and control over their
                financial life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-white py-8">
        <div className="container text-center text-sm text-gray-400">
          © 2026 Nidhify. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
