import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the full disclaimer for Nidhify. Nidhify is a software utility tool and does not provide financial, investment, or tax advice.",
  alternates: {
    canonical: 'https://nidhify.com/disclaimer',
  },
};

export default function DisclaimerPage() {
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
              Disclaimer
            </h1>
            <p className="mb-8 text-sm text-gray-400">Last Updated: June 2026</p>

            <div className="space-y-8 text-gray-600">
              <p className="leading-relaxed">
                The information, analytics, and tracking tools provided on
                Nidhify.com (the &ldquo;Platform&rdquo; or
                &ldquo;Website&rdquo;) are for informational and educational
                purposes only. By using this Platform, you acknowledge and agree
                to the terms of this Disclaimer in full.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. No Financial, Investment, or Tax Advice
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Non-Licensed Platform:</strong> Nidhify is a
                      software utility tool. The platform, its owner(s), and its
                      operators do not hold any financial degrees, certifications,
                      or regulatory licenses. Nidhify is not registered with the
                      Securities and Exchange Board of India (SEBI), the
                      Association of Mutual Funds in India (AMFI), or any other
                      financial regulatory authority.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Not an Advisory Service:</strong> Nothing displayed
                      on this Website—including portfolio metrics, charts,
                      automated analytics, or blog content—constitutes
                      professional investment, legal, tax, or financial advice.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Consult a Professional:</strong> All financial
                      decisions involve risk. You should consult a SEBI-registered
                      investment advisor or a qualified financial professional
                      before making any investment or purchasing insurance
                      products. You are entirely responsible for your own
                      financial actions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. &ldquo;As-Is&rdquo; Data & Accuracy Warning (System Errors
                  Disclaimer)
                </h2>
                <p className="mb-3 leading-relaxed">
                  Nidhify uses automated parsing scripts to read uploaded
                  password-protected CAS PDFs and displays asset details based on
                  manual user entries for Fixed Deposits (FDs), Stocks, Gold, and
                  Insurance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Data Can Be Wrong:</strong> Nidhify does not
                      guarantee the 100% accuracy, completeness, or real-time
                      correctness of any data shown on the dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Potential Discrepancies:</strong> System
                      calculations may contain errors due to third-party data
                      feed lags, parsing bugs, sync delays, or unexpected
                      formatting changes in uploaded statement PDFs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Mandatory Verification:</strong> All portfolio
                      tracking metrics are approximate estimates. Users must
                      independently cross-verify all investment values, NAVs,
                      units, maturity amounts, and balances directly with their
                      official banks, Asset Management Companies (AMCs), or
                      official investment portals before taking any financial
                      action.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  3. Absolute Limitation of Liability (Nidhify Jimedaar Nahi Hai)
                </h2>
                <p className="mb-3 leading-relaxed">
                  Under no circumstances shall Nidhify, its creator, or its
                  affiliates be held liable for any direct, indirect, incidental,
                  or consequential financial losses, lost profits, capital
                  depreciation, or data inaccuracies arising out of your use of
                  this platform.
                </p>
                <p className="leading-relaxed">
                  If you rely on any metrics shown on Nidhify to buy, sell,
                  redeem, or switch investments, you do so entirely at your own
                  risk. Nidhify assumes zero responsibility for your investment
                  outcomes.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. Third-Party Portals and Market Risks
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No Endorsement:</strong> Links or references to
                      third-party official sites (such as CAMS Online) are
                      provided purely for user convenience to download statement
                      files. Nidhify does not manage, secure, or endorse these
                      third-party platforms.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Market Risk:</strong> Mutual fund and equity
                      investments are subject to market risks. Please read all
                      scheme-related documents carefully before investing.
                    </span>
                  </li>
                </ul>
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
