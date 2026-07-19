import Link from "next/link";
import { ArrowLeft, ShieldCheck, Layers, Eye, Zap, Wallet } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Nidhify — the smart personal wealth management platform helping Indian investors track and grow their wealth.",
  alternates: {
    canonical: 'https://nidhify.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold gradient-text">
            <ArrowLeft size={20} />
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
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-4 py-2 text-sm font-medium hover:bg-secondary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Nidhify
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Welcome to Nidhify.com—a modern, independent wealth-tracking platform designed to cut through the noise and give you complete clarity over your personal finances.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              The Problem We Are Solving
            </h2>
            <p className="mb-3 text-base leading-relaxed text-gray-500">
              Managing money shouldn't feel like a chore. Today, our investments are scattered everywhere: mutual funds on one platform, Fixed Deposits (FDs) and Recurring Deposits (RDs) sitting in different banks, digital gold in various apps, and insurance policies hidden away in emails.
            </p>
            <p className="mb-3 text-base leading-relaxed text-gray-500">
              Worse yet, most tracking tools force you into an ecosystem where your personal data is monetized to constantly sell you unwanted loans, credit cards, or cross-selling investment schemes.
            </p>
            <blockquote className="mb-8 border-l-4 border-secondary bg-secondary/5 px-5 py-4 text-base italic leading-relaxed text-gray-600">
              Nidhify was built to change that. We believe your tracking platform should be just that—a pure tracking tool. No hidden agendas, no aggressive cross-selling, and no financial jargon.
            </blockquote>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              What Nidhify Does
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-500">
              Nidhify is an automated, high-utility portfolio analytics dashboard. We don't manage your money, and we don't sell you investment options. Instead, we give you the developer-grade tools to aggregate your entire financial life in one place:
            </p>

            <div className="mb-10 space-y-4">
              <div className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">
                    Automated Mutual Fund Tracking
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Instantly visualize your portfolio allocation by processing your password-protected CAS PDF statements via our smart, automated parsing engine.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">
                    Comprehensive Multi-Asset Tracking
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Manually track Fixed Deposits (FDs), Recurring Deposits (RDs), Digital Gold assets, and complex Insurance plans alongside your mutual funds for a true macro view.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Wallet size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">
                    Salary & Budget Planners
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Map out your monthly cash flows, control upcoming targets, and configure precise day-to-day income tracking frameworks seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">
                    Clear Analytics & Estimates
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Understand your approximate asset allocations with beautifully clean charts. (Please note: calculations present approximate trends; always double-check final totals with your primary institutions!)
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Our Core Principles
            </h2>

            <div className="mb-8 space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <h3 className="text-lg font-semibold text-primary">
                    Transparency & Software Utility
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-gray-500">
                  Nidhify is built entirely from a tech-first perspective. We do not pretend to be financial gurus, certified advisers, or SEBI-registered entities. We don't give asset recommendations; we build lightning-fast interfaces that empower you to view your own numbers transparently.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <h3 className="text-lg font-semibold text-primary">
                    Strict Privacy (Zero-Storage Policy)
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-gray-500">
                  Your trust is our ultimate security constraint. When you parse a CAS statement, our automated pipeline extracts balances in real time without permanently storing your statement master password or raw files on our servers. Your cash data is yours alone—we maintain an absolute zero data-selling mandate.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <h3 className="text-lg font-semibold text-primary">
                    Frictionless UX Optimization
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-gray-500">
                  We value your time as a user. Nidhify is engineered using highly responsive software practices to ensure checking your net worth timeline or monthly budget performance takes less than a minute.
                </p>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              The Journey Behind Nidhify
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500">
              Nidhify started as a specialized passion project born out of a clean engineering need: the desire for a highly organized, private dashboard to keep track of multiple assets without being target-advertised to. Built with modern React and Next.js design architectures, Nidhify has evolved into a comprehensive control panel helping active investors take full, independent charge of their financial data tracking.
            </p>

            <footer className="rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 px-8 py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-md">
                <ShieldCheck size={28} />
              </div>
              <p className="mb-1 text-xl font-semibold text-primary">
                Thank you for being a part of Nidhify.
              </p>
              <p className="text-base text-gray-500">
                Here's to tracking wealth smarter, cleaner, and with complete peace of mind.
              </p>
            </footer>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container text-center text-sm text-gray-400">
          &copy; 2026 Nidhify. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}