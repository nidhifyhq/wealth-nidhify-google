import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the full disclaimer for Nidhify. Nidhify is a software portfolio utility tool and does not provide financial, investment, or tax advice.",
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
            <p className="mb-8 text-sm text-gray-400">Last Updated: July 12, 2026</p>

            <div className="space-y-8 text-gray-600">
              <p className="leading-relaxed">
                The information, computational analytics, budgeting algorithms, and tracking tools provided on Nidhify.com (the &ldquo;Platform,&rdquo; &ldquo;App,&rdquo; or &ldquo;Website&rdquo;) are intended solely for general informational, educational, and personal tracking purposes. By accessing or using this Platform, you acknowledge and agree to all terms of this Disclaimer in full.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. No Certified Financial, Investment, or Tax Advice
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Non-Licensed Platform:</strong> Nidhify is purely a software aggregation and portfolio utility tool. The platform, its individual developer, and its operators do not hold any professional financial degrees, advisory certifications, or regulatory credentials. Nidhify is not registered with the Securities and Exchange Board of India (SEBI), the Association of Mutual Funds in India (AMFI), or any other regulatory authority.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Not an Advisory Interface:</strong> Nothing displayed on this Website—including interactive tracking graphs, automated compound calculations, projected budget metrics, or contextual insights—constitutes a solicitation, recommendation, endorsement, or professional investment, tax, legal, or insurance advice.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Consult a Professional:</strong> All wealth allocations involve material risk. You should consult a SEBI-registered investment advisor, chartered accountant, or licensed insurance professional before committing capital or purchasing insurance policies. You are entirely responsible for your own financial actions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. &ldquo;As-Is&rdquo; Data & Accuracy Warning (System Errors Disclaimer)
                </h2>
                <p className="mb-3 leading-relaxed">
                  Nidhify uses automated parsing scripts to decode uploaded password-protected CAS PDFs and displays asset parameters based on manual entries for Fixed Deposits (FDs), Recurring Deposits (RDs), Digital Gold, and Insurance configurations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed text-amber-800 font-medium">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>
                      <strong>Data Can Be Wrong:</strong> Nidhify does not warrant or guarantee the 100% precision, completeness, operational correctness, or real-time update metrics of any data shown on the dashboard panels.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Potential Discrepancies:</strong> System variables and compound calculations may contain errors driven by third-party database API lags, formula omissions, file layout changes in uploaded statements, parsing edge-cases, or system synchronization delays.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Mandatory Verification Required:</strong> All wealth tracking screens present approximate structural estimations. You must independently cross-verify all unit values, interest returns, net balances, and maturity timelines directly with your banking institutions, Asset Management Companies (AMCs), or insurance carriers before making financial decisions.
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
                  To the maximum extent permitted under applicable law, in no event shall Nidhify, its creator, or future corporate entities be held liable for any direct, indirect, incidental, special, or consequential financial losses, lost capital appreciation, investment downside, asset variances, or system downtime arising out of your utilization of or inability to interface with this platform.
                </p>
                <p className="leading-relaxed bg-gray-50 p-4 border-l-4 border-primary rounded-r font-medium text-gray-900">
                  If you rely on any visual graphs or numbers shown on Nidhify to execute buys, redemptions, switches, or premium updates, you do so entirely at your own risk. Nidhify assumes absolute zero liability for your portfolio performance or personal cash flow outcomes.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. Third-Party Engines and Market Risks
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>No External Endorsement:</strong> Links, redirection frameworks, or technical pathways to official portals (such as CAMS Online or KFintech) are placed solely for individual convenience to obtain raw statement components. Nidhify does not maintain, administer, or assume liability for the data safety rules deployed on external platforms.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Market Volatility:</strong> Mutual fund products, corporate equity structures, and commodity indices (including gold) are subject to active market risks. Please read all scheme-related risk parameters and documentation closely before making monetary commitments.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  5. Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have queries regarding the specific mathematical models, architectural exclusions, or operational disclaimers outlined on this page, please contact us directly via email at:
                  <br />
                  Email:{" "}
                  <a href="mailto:nidhifyhq@gmail.com" className="text-primary hover:underline font-semibold">
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