import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck, HelpCircle, Clock, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Nidhify team. We are here to help you with any questions about our wealth management platform.",
  alternates: {
    canonical: 'https://nidhify.com/contact',
  },
};

export default function ContactPage() {
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
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
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
          <div className="container max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-primary">Contact Us</h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Have a question about your portfolio dashboard, a feature
              suggestion, or need help with your CAS PDF import? We are here to
              help you out. At Nidhify, we prioritize your data privacy and
              security.
            </p>

            {/* Email Support Section */}
            <div className="mb-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Mail size={18} />
                </div>
                <h2 className="text-lg font-semibold text-primary">
                  Email Support
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">
                For account support, technical issues, or general inquiries, drop
                us a line at our official helpdesk:
              </p>
              <div className="mb-3 rounded-lg bg-gray-50 px-4 py-3">
                <span className="text-sm font-medium text-gray-500">
                  Email:{" "}
                </span>
                <a
                  href="mailto:nidhifyhq@gmail.com"
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  nidhifyhq@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <span>
                  <strong>Expected Response Time:</strong> We do our best to
                  review all inquiries and respond within 24 to 48 hours (Monday
                  to Friday).
                </span>
              </div>
            </div>

            {/* Security Notice Section */}
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <ShieldCheck size={18} />
                </div>
                <h2 className="text-lg font-semibold text-amber-800">
                  Important Security Notice
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-amber-700">
                To protect your personal wealth data, please keep the following
                security practices in mind when reaching out to support:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-amber-700">
                  <AlertTriangle
                    size={14}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <span>
                    <strong>Never share your login passwords:</strong> Nidhify
                    support team members will never ask you for your account
                    password or your CAS PDF password.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-amber-700">
                  <AlertTriangle
                    size={14}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <span>
                    <strong>Do not attach raw financial files:</strong> If you
                    are experiencing a parsing bug with your CAS statement,
                    please do not email us the raw, password-protected PDF.
                    Instead, describe the error message or send a screenshot with
                    your sensitive personal details blacked out.
                  </span>
                </li>
              </ul>
            </div>

            {/* Troubleshooting Section */}
            <div className="mb-10 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <HelpCircle size={18} />
                </div>
                <h2 className="text-lg font-semibold text-primary">
                  Quick Troubleshooting
                </h2>
              </div>
              <div className="mb-4">
                <h3 className="mb-1 text-sm font-semibold text-primary">
                  CAS Upload Errors:
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Ensure you are entering the exact password you created on the
                  CAMS portal when downloading the statement.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-primary">
                  Data Lag:
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Remember that third-party mutual fund data and bank updates can
                  experience slight sync delays. Try refreshing after a short
                  while.
                </p>
              </div>
            </div>
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
