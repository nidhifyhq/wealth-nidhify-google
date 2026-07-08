import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Nidhify wealth management platform. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: 'https://nidhify.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              Privacy Policy
            </h1>
            <p className="mb-8 text-sm text-gray-400">Last Updated: June 2026</p>

            <div className="space-y-8 text-gray-600">
              <p className="leading-relaxed">
                At Nidhify.com (&ldquo;Nidhify,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;the Platform&rdquo;), we respect your
                privacy and are committed to protecting your personal and
                financial information. This Privacy Policy explains how we
                collect, use, process, and secure your data when you use our
                wealth investment tracking platform.
              </p>
              <p className="leading-relaxed">
                By creating an account or using Nidhify.com, you explicitly
                consent to the data practices described in this policy.
              </p>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. Information We Collect
                </h2>
                <p className="mb-3 leading-relaxed">
                  To provide portfolio tracking and analytics, we collect
                  information that you voluntarily provide to us:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Information:</strong> Your name, email
                      address, and authentication credentials when you sign up.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Manual Entry Data:</strong> Information you
                      manually type into the platform to track your assets,
                      including Fixed Deposits (FDs), Stocks, Digital Gold,
                      Insurance policies, or other investments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Uploaded Statement Data:</strong> When you use our
                      automated mutual fund tracking feature, you voluntarily
                      upload your password-protected Consolidated Account
                      Statement (CAS) PDF and provide its decryption password.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. How We Process Your CAS PDF & Passwords (Strict
                  Zero-Storage Policy)
                </h2>
                <p className="mb-3 leading-relaxed">
                  We understand that your financial statements are highly
                  sensitive. We handle them with strict technical boundaries:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>One-Time Parsing:</strong> Your CAS password is
                      used by our automated script solely to decrypt and parse
                      the document in real time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Password Retention:</strong> Nidhify does not
                      save or store your CAS password on our servers. Once the
                      script finishes reading the file to extract your mutual
                      fund units and balances, the password is completely wiped
                      from memory.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Raw File Storage:</strong> We do not keep your
                      raw uploaded PDF file. Once the necessary tracking text is
                      parsed to populate your dashboard analytics, the file is
                      discarded.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3 leading-relaxed">
                  Nidhify uses the collected data exclusively to run the
                  platform&rsquo;s core utilities:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To populate and calculate your personalized asset
                      allocation dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To provide automated portfolio analytics and tracking
                      insights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To send account-related alerts, security updates, or
                      support messages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Third-Party Sharing:</strong> We do not sell,
                      rent, trade, or share your personal transaction history or
                      financial data with third-party marketing companies,
                      lenders, or insurance brokers.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement standard industry safety practices to secure your
                  dashboard data against unauthorized access, alteration, or
                  disclosure. However, please remember that no method of
                  transmission over the internet or electronic storage is 100%
                  secure. While we strive to protect your data, you acknowledge
                  that you provide your financial information at your own risk.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  5. User Control: Modification and Deletion of Data
                </h2>
                <p className="mb-3 leading-relaxed">
                  You retain complete ownership and control over your data.
                  Nidhify provides clear options inside your account settings to
                  remove your information at any time:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Delinking CAS Data:</strong> You can choose to
                      disconnect your mutual fund tracking data. Doing so will
                      completely wipe all extracted mutual fund records from our
                      active database, while keeping your manual entries (like
                      FDs) intact.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Deletion:</strong> You can choose to delete
                      your Nidhify account permanently. Upon execution, all your
                      data (account credentials, manual inputs, and historical
                      tracking metrics) will be permanently erased from our
                      databases and cannot be recovered.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  6. Third-Party Websites and Links
                </h2>
                <p className="leading-relaxed">
                  Our platform features instructions and links directing you to
                  official third-party portals (such as CAMS Online) to download
                  your financial statements. This Privacy Policy applies solely
                  to Nidhify.com. We have no control over, and assume no
                  responsibility for, the privacy practices or content of
                  external websites. We encourage you to read the privacy
                  statements of any third-party portal you visit.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  7. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time to reflect
                  changes in our technical processing or legal requirements. We
                  will notify you of any changes by updating the &ldquo;Last
                  Updated&rdquo; date at the top of this page. Your continued use
                  of Nidhify.com after modifications are posted constitutes your
                  acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  8. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions or concerns regarding this Privacy
                  Policy or how your data is handled, you can reach out to us
                  through the contact channels provided on Nidhify.com.
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
