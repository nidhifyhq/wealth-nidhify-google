import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Nidhify wealth management platform. Learn how we securely parse, protect, and process your personal financial tracking data.",
  alternates: {
    canonical: "https://nidhify.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold gradient-text"
          >
            <ArrowLeft size={20} />
            Nidhify
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
        </div>
      </header>

      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              PRIVACY POLICY
            </h1>
            <p className="mb-8 text-sm text-gray-400">
              Last Updated: July 19, 2026
            </p>

            <div className="space-y-8 text-gray-600">
              <p className="leading-relaxed">
                Welcome to Nidhify (&ldquo;the Web Application,&rdquo;
                &ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). We respect your privacy and are deeply
                committed to protecting your personal, transactional, and
                financial tracking data. This Privacy Policy details how we
                collect, process, isolate, and secure your information when you
                interact with our wealth investment tracking and personal wealth
                tracking dashboard.
              </p>
              <p className="leading-relaxed">
                By creating an account, logging in, or utilizing any features on
                Nidhify, you explicitly consent to the data collection and
                processing architectures described in this Privacy Policy.
              </p>

              {/* SECTION 1 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. Information We Collect
                </h2>
                <p className="mb-3 leading-relaxed">
                  To maintain an active portfolio dashboard and generate visual
                  cash flow models, we process information that you voluntarily
                  provide to us:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Credentials:</strong> Your name, email
                      address, and security authentication credentials provided
                      during sign-up or profile customization.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Manual Tracking Inputs:</strong> Financial values,
                      maturity tracks, and parameters you manually enter to
                      monitor your Fixed Deposits (FDs), Recurring Deposits
                      (RDs), Digital Gold parameters, Insurance policies, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Budget and Expense Information:</strong> Income
                      details, expense entries, budget limits, and timelines
                      that you voluntarily enter into the Budget Planner and
                      Salary Planner features.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Uploaded Document Data:</strong> Official
                      Consolidated Account Statement (CAS) PDF files uploaded to
                      fetch your active Mutual Fund holdings dynamically.
                    </span>
                  </li>

                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Device and Notification Information:</strong>
                      We may collect notification tokens to deliver security
                      alerts, account-related notifications, and application
                      updates.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. How We Process Your CAS PDF & Passwords (Strict
                  Zero-Storage Policy)
                </h2>
                <p className="mb-3 leading-relaxed">
                  Your investment portfolio logs are intensely private. We use
                  automated processing methods designed to protect your uploaded
                  documents and sensitive information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Immediate Automated Parsing:</strong> The
                      decryption password you type to unlock your CAS statement
                      PDF is utilized by our automated code sequence strictly to
                      extract portfolio details and investment information. No
                      human ever sees or reviews your statement documents.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Absolute Zero Password Retention:</strong> Nidhify
                      does not save, cache, or store your master CAS statement
                      password on our backend servers. The instant the tracking
                      script concludes its real-time extraction matrix, the
                      password parameters are permanently wiped from
                      computational memory space.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Raw Document Storage:</strong> We do not
                      preserve or save your raw uploaded PDF statement files.
                      Once the relevant fund balances are structured onto your
                      active dashboard, the raw file binary is completely
                      deleted.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed text-amber-700 font-medium">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>
                      <strong>Data Accuracy Limitation Notice:</strong> Because
                      data is aggregated using automated algorithms, parsing
                      routines, and third-party valuation updates, you
                      explicitly acknowledge that the tracked metrics, balances,
                      insurance timelines, and financial numbers displayed in
                      the App can occasionally be incorrect, delayed, or
                      out-of-sync. Nidhify processes this structural layout
                      purely for directional tracking, and you are solely
                      responsible for cross-checking vital asset values directly
                      with your respective financial institutions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3 leading-relaxed">
                  We leverage your calculated numbers solely to keep your
                  application instance responsive and personalized:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To calculate, populate, and display your unified net worth
                      tracking screen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To chart visual spending trends, budget allocations, and
                      portfolio compound returns.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      To dispatch necessary security updates, session alerts, or
                      customer support notifications.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. Financial Disclaimer
                </h2>
                <p className="leading-relaxed">
                  Nidhify is a personal wealth tracking and visualization
                  application. It helps users organize, monitor, and analyze
                  their financial information in one place. Nidhify does not
                  provide financial advice, investment recommendations, research
                  reports, or guarantee any investment returns. The information
                  displayed in the App is intended for tracking and
                  informational purposes only. Users should verify all
                  investment values, transactions, and financial decisions with
                  their respective financial institutions or qualified financial
                  professionals.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  5. Absolute Zero Data Selling Policy
                </h2>
                <p className="leading-relaxed font-semibold text-gray-900 bg-emerald-50 p-4 border-l-4 border-emerald-500 rounded-r">
                  We maintain a strict zero data-selling mandate. Nidhify does
                  not sell, rent, trade, market, or lease your private asset
                  calculations, salary logs, spending parameters, or investment
                  records to third-party brokers, digital marketers, lending
                  corporations, or advertising syndicates under any
                  circumstances.
                </p>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  6. Data Sharing & Future Corporate Transition
                </h2>
                <p className="mb-3 leading-relaxed">
                  We only disclose or relocate your database components in the
                  following highly restricted situations:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Corporate Growth & Handover:</strong> Nidhify is
                      currently managed as a proprietary application by an
                      individual creator. If the application expands operational
                      frameworks into a registered corporate structure (e.g.,
                      Private Limited entity, LLP, or corporate partnership),
                      all user profiles, tokens, and dashboard variables will
                      transfer to the newly formed corporate body under the
                      exact same privacy commitments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Statutory Obligations:</strong> We may share
                      metrics if compelled by law, court order, or official
                      regulatory mandates issued by competent judicial
                      authorities in India.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  7. Architectural Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement production-grade electronic encryption, access
                  tokens, and structural security firewalls to isolate your
                  tracking parameters against unintended intrusion or leaks.
                  However, please be aware that no methodology of web-based
                  delivery or data compilation can guarantee absolute 100%
                  invulnerability. You acknowledge that you provide and input
                  your portfolio tracking values entirely at your own
                  operational risk.
                </p>
              </div>

              {/* SECTION 8 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  8. User Ownership: Modification and Permanent Erasure
                </h2>
                <p className="mb-3 leading-relaxed">
                  You maintain clear ownership of every financial data point you
                  upload or configure:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Delinking Records:</strong> You can wipe out your
                      automatically processed Mutual Fund lines at any point via
                      settings. Delinking immediately deletes your parsed asset
                      variables from our live databases while preserving
                      manually input logs (like your FD values).
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Complete Erasure:</strong> You can request
                      deletion of your Nidhify account at any time from the
                      account settings section of the application. You may also
                      request account deletion by contacting us at{" "}
                      <a
                        href="mailto:nidhifyhq@gmail.com"
                        className="text-primary hover:underline font-semibold"
                      >
                        nidhifyhq@gmail.com
                      </a>
                      . Upon account deletion, your account information,
                      manually entered tracking data, portfolio records, and
                      budgeting information will be deleted from our active
                      systems, subject to any legal, security, or operational
                      retention requirements.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 9 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  9. Third-Party Services and Links
                </h2>
                <p className="leading-relaxed">
                  Nidhify may use third-party service providers to support
                  application functionality, security, hosting, authentication,
                  notifications, and technical operations. These services may
                  include Firebase Cloud Messaging for push notifications and
                  other infrastructure providers.
                  <br />
                  <br />
                  Nidhify only shares information necessary for providing these
                  services and does not sell personal or financial tracking data
                  to third parties.
                  <br />
                  <br />
                  Nidhify may also provide links to external platforms such as
                  CAMS Online or KFintech for obtaining official investment
                  statements. These external platforms operate under their own
                  privacy policies, and Nidhify is not responsible for their
                  data handling practices.
                </p>
              </div>

              {/* SECTION 10 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to modify or adjust this Privacy Policy
                  at any time. Changes take effect the moment they are posted
                  here with a refreshed &ldquo;Last Updated&rdquo; date stamp.
                  Your continued utilization of Nidhify following the
                  publication of changes constitutes full acceptance of the
                  updated terms.
                </p>
              </div>

              {/* SECTION 11 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  11. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions, architectural safety suggestions,
                  or operational concerns regarding your data handling under
                  this Privacy Policy, please contact us directly via email at:
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:nidhifyhq@gmail.com"
                    className="text-primary hover:underline font-semibold"
                  >
                    nidhifyhq@gmail.com
                  </a>
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
