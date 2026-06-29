import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for using Nidhify wealth management platform. Please read these terms carefully before using our services.',
};

export default function TermsPage() {
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
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms & Conditions</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
              <p>Last updated: January 1, 2026</p>
              <h2 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Nidhify, you agree to be bound by these Terms and Conditions. If you
                do not agree, please do not use our services.
              </p>
              <h2 className="text-xl font-semibold text-primary">2. Description of Service</h2>
              <p>
                Nidhify provides a personal wealth management platform that allows users to track investments,
                monitor net worth, and manage financial goals. The platform is for informational and
                organizational purposes only.
              </p>
              <h2 className="text-xl font-semibold text-primary">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You agree to provide accurate information.
              </p>
              <h2 className="text-xl font-semibold text-primary">4. Limitation of Liability</h2>
              <p>
                Nidhify provides the platform as-is. We are not responsible for any financial decisions
                made based on the information displayed on our platform.
              </p>
              <h2 className="text-xl font-semibold text-primary">5. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of material
                changes via email or through the platform.
              </p>
              <h2 className="text-xl font-semibold text-primary">6. Contact</h2>
              <p>
                For questions about these terms, please contact us at legal@nidhify.com.
              </p>
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
