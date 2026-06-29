import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Nidhify wealth management platform. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
              <p>Last updated: January 1, 2026</p>
              <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including your name, email address,
                phone number, and financial information necessary to provide our wealth management services.
              </p>
              <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to
                communicate with you, and to comply with legal obligations.
              </p>
              <h2 className="text-xl font-semibold text-primary">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal and financial
                information, including encryption, access controls, and regular security audits.
              </p>
              <h2 className="text-xl font-semibold text-primary">4. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share data with service providers who
                assist us in operating our platform, subject to strict confidentiality agreements.
              </p>
              <h2 className="text-xl font-semibold text-primary">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You can manage
                your data preferences through your account settings or by contacting us.
              </p>
              <h2 className="text-xl font-semibold text-primary">6. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@nidhify.com.
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
