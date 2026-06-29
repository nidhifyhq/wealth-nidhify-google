import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using Nidhify wealth management platform. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="mb-8 text-sm text-gray-400">Last Updated: June 2026</p>

            <div className="space-y-8 text-gray-600">
              <p className="leading-relaxed">
                Welcome to Nidhify.com (the &ldquo;Website&rdquo; or
                &ldquo;Platform&rdquo;). By accessing, browsing, or using this
                Platform, creating an account, or uploading any data, you agree
                to comply with and be bound by the following Terms of Service. If
                you do not agree to these terms, please discontinue use of the
                platform immediately.
              </p>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. Scope of Service & Nature of Platform
                </h2>
                <p className="mb-3 leading-relaxed">
                  Nidhify is strictly an automated portfolio tracking,
                  aggregation, and analytics platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Tracking Utility Only:</strong> The platform allows
                      users to aggregate their investments by uploading
                      password-protected Consolidated Account Statements (CAS)
                      PDFs or by manually entering tracking details for Fixed
                      Deposits (FDs), Stocks, Digital Gold, Insurance, and other
                      wealth assets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Transacting Capabilities:</strong> Nidhify is
                      purely an informational interface. You cannot buy, sell,
                      trade, or execute financial transactions through Nidhify.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. Absolute Data Accuracy Disclaimer (No Liability for System
                  Errors)
                </h2>
                <p className="mb-3 leading-relaxed">
                  Nidhify processes financial statements and manual user entries
                  using automated algorithms to display dashboard metrics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Data May Contain Errors:</strong> You explicitly
                      acknowledge and agree that the data, valuations, current
                      NAVs, calculations, and analytics shown on Nidhify can be
                      wrong, delayed, incomplete, or corrupted. System sync
                      delays, third-party data feed errors, API lags, or PDF
                      parsing formatting mismatches can cause discrepancies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Independent Verification Required:</strong> All
                      data displayed on Nidhify is provided on an &ldquo;As-Is&rdquo;
                      and &ldquo;As-Available&rdquo; basis for approximate
                      tracking purposes only. You must cross-verify all balances,
                      units, values, and maturity amounts directly with your
                      Asset Management Companies (AMCs), banks, insurance
                      providers, or official portals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Financial Liability:</strong> Nidhify, its
                      owner(s), and affiliates assume absolute zero legal or
                      financial liability (Nidhify jimedaar nahi hai) for any
                      actions taken or decisions made based on the analytics or
                      data shown on this website.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  3. Absolute No Financial Advice Disclaimer
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Non-Certified Entity:</strong> Nidhify does not
                      hold any financial degrees, advisory certifications,
                      licenses, or SEBI (Securities and Exchange Board of India)
                      registrations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Not Investment Advice:</strong> No chart,
                      analytical report, blog post, text, or tool on Nidhify
                      constitutes professional investment, legal, financial, tax,
                      or medical insurance advice.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>User Responsibility:</strong> All investment
                      strategies, asset selections, and asset allocations are
                      entirely your own risk and responsibility. We strongly
                      recommend consulting a SEBI-registered financial advisor
                      before making any financial commitments.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. CAS Statement PDF & Password Processing
                </h2>
                <p className="mb-3 leading-relaxed">
                  To use the automated Mutual Fund tracking feature, you may
                  choose to upload your official CAS PDF statement and enter its
                  corresponding password.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Decryption Authorization:</strong> By uploading
                      your statement and entering the password, you grant Nidhify
                      explicit automated permission to decrypt, scan, and parse
                      the file to populate your dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Password Policy:</strong> Nidhify uses an automated
                      script to read the file one time. We do not store your raw
                      file or your CAS password on our servers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Voluntary Feature:</strong> Uploading your CAS PDF
                      is completely voluntary. If you do not wish to use this
                      automated feature, you may opt to input your investments
                      manually.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  5. Third-Party Portals and External Links
                </h2>
                <p className="mb-3 leading-relaxed">
                  The tracking setup may point you toward third-party official
                  platforms (such as CAMS Online) to generate and download your
                  statements.
                </p>
                <p className="leading-relaxed">
                  Nidhify has no control over, does not endorse, and assumes no
                  responsibility for the functionality, privacy policies, data
                  collection, or security protocols of third-party platforms. You
                  access external links entirely at your own risk.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  6. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by applicable law, Nidhify, its
                  creator, or associates shall not be liable for any direct,
                  indirect, incidental, consequential, special, or exemplary
                  damages, including but not limited to financial losses, loss of
                  capital, loss of profits, data errors, system downtime, or
                  security breaches arising from your use of or inability to use
                  the platform.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  7. Account Termination & Data Erasure
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>By User:</strong> You have the right to delete your
                      account or delink your CAS data at any time through your
                      dashboard settings. Delinking or deleting will permanently
                      wipe your processed tracking data from our databases.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>By Platform:</strong> Nidhify reserves the absolute
                      right to suspend, terminate, or restrict your access to the
                      platform at any time, without prior notice or liability,
                      for any reason whatsoever.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  8. Amendments to Terms
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to modify or replace these Terms of
                  Service at any time. Any changes will be posted on this page
                  with an updated &ldquo;Last Updated&rdquo; date. Continued use
                  of Nidhify.com after changes are posted constitutes full
                  acceptance of the revised terms.
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
