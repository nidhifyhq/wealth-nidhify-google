import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using Nidhify wealth management platform. Please read these terms carefully before using our services.",
  alternates: {
    canonical: "https://nidhify.com/terms",
  },
};

export default async function TermsPage({ searchParams }) {
  const params = await searchParams;
  const isEmbedded = params?.redirectApp === "1";

  return (
    <>
      {!isEmbedded && (
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
      )}

      <main className={isEmbedded ? "" : "pt-16"}>
        <section className={isEmbedded ? "py-10 md:py-14" : "py-20 md:py-28"}>
          <div
            className={`container max-w-3xl mx-auto${isEmbedded ? " text-sm" : ""}`}
          >
            {!isEmbedded && (
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                TERMS AND CONDITIONS
              </h1>
            )}
            <p
              className={`text-gray-400${isEmbedded ? " text-xs mb-4" : " text-sm mb-8"}`}
            >
              Last Updated: July 12, 2026
            </p>

            <div
              className={`text-gray-600${isEmbedded ? " space-y-4 [&_h2]:text-sm [&_h3]:text-xs" : " space-y-8"}`}
            >
              <p className="leading-relaxed">
                Welcome to Nidhify (&ldquo;the Web Application,&rdquo;
                &ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). Please read these Terms and Conditions
                (&ldquo;Terms&rdquo;) carefully before using our platform.
              </p>
              <p className="leading-relaxed">
                By accessing or using Nidhify, you agree to be bound by these
                Terms. If you do not agree to all of these Terms, do not use the
                App.
              </p>

              {/* SECTION 1 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  1. NATURE OF SERVICE & NO FINANCIAL ADVICE
                </h2>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  1.1 Informational and Tracking Tool Only
                </h3>
                <p className="mb-3 leading-relaxed">
                  Nidhify is a wealth management, investment tracking, and
                  budgeting tool designed solely for personal financial tracking
                  and organizational purposes. The App aggregates data provided
                  by you (either via manual input or document upload, such as a
                  Consolidated Account Statement or CAS) to display an overview
                  of your financial portfolio (including Mutual Funds, Fixed
                  Deposits, Recurring Deposits, Digital Gold, Insurance, and
                  Budgets).
                </p>
                <p className="mb-4 text-amber-800 font-medium bg-amber-50 p-3 border-l-4 border-amber-500 rounded-r">
                  DATA ACCURACY NOTICE: Because data compilation relies on
                  automated algorithms, parsing routines, and third-party feeds,
                  you explicitly acknowledge that calculations, portfolio
                  charts, historical metrics, and data displayed within the App
                  can be wrong, incomplete, or out-of-sync. Nidhify is a
                  directional aggregation interface only.
                </p>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  1.2 No Certified Financial Advice
                </h3>
                <p className="mb-3 font-semibold text-gray-900 bg-gray-50 p-3 border-l-4 border-primary rounded-r">
                  CRITICAL NOTICE TO ALL USERS: The creator(s) and operators of
                  Nidhify are not certified financial planners, brokers, tax
                  advisors, or registered investment advisors (such as under
                  SEBI or any other regulatory body).
                </p>
                <p className="leading-relaxed">
                  All charts, insights, graphs, calculations, and automated
                  metrics generated by Nidhify are for educational and
                  informational purposes only. Nothing on this platform
                  constitutes a solicitation, recommendation, endorsement, or
                  financial, investment, or legal advice. You assume sole
                  responsibility for evaluating the merits and risks associated
                  with the use of any information or data on Nidhify before
                  making any financial decisions.
                </p>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  2. ELIGIBILITY & USER ACCOUNTS
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Age Requirement:</strong> You must be at least 18
                      years of age to use this App.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Accuracy:</strong> You agree to provide
                      accurate, current, and complete information during
                      registration and manual data entry.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Security:</strong> You are entirely
                      responsible for maintaining the confidentiality of your
                      login credentials and for any activity that occurs under
                      your account. You agree to notify us immediately of any
                      unauthorized use of your account.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  3. USER DATA & CAS UPLOADS
                </h2>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  3.1 Data Ownership and License
                </h3>
                <p className="mb-4 leading-relaxed">
                  You retain all rights to the financial data, text, and
                  documents you upload or input into Nidhify. By uploading data
                  (including password-protected CAS files), you grant Nidhify a
                  localized, secure license to process, parse, and display this
                  data strictly for the purpose of rendering your personal
                  dashboard.
                </p>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  3.2 Automated Parsing (CAS Statements)
                </h3>
                <p className="leading-relaxed">
                  When you upload a password-protected CAS file, the App
                  decrypts and parses the file locally or securely via our
                  backend to extract transaction data. Nidhify does not
                  permanently store your master statement password unless
                  explicitly requested by you for session persistence, and such
                  data is handled in accordance with our Privacy Policy. You
                  represent that you have the lawful right to upload and decrypt
                  such financial statements.
                </p>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  4. INTELLECTUAL PROPERTY
                </h2>
                <p className="leading-relaxed">
                  All content, features, functionality, UI/UX design, logos
                  (including the name &ldquo;Nidhify&rdquo;), code, software,
                  graphics, and icons are the exclusive property of Nidhify's
                  creator(s) and are protected by copyright, trademark, and
                  other intellectual property laws. You may not copy, modify,
                  replicate, reverse-engineer, or distribute any part of the App
                  without explicit written permission.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  5. FUTURE ROADMAP, COMPANY REGISTRATION, & AMENDMENTS
                </h2>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  5.1 Business Scaling and Future Entities
                </h3>
                <p className="mb-4 leading-relaxed">
                  You explicitly acknowledge that Nidhify is currently operated
                  as a proprietary project by an individual creator. However, we
                  reserve the right to transfer, assign, or delegate these Terms
                  and all operational responsibilities to a newly registered
                  corporate entity (e.g., Private Limited company, LLP, or
                  registered firm) at any time in the future without prior
                  individual consent.
                </p>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  5.2 Product Expansion
                </h3>
                <p className="mb-4 leading-relaxed">
                  We reserve the right to introduce new products, paid premium
                  features, investment gateways (such as direct mutual fund
                  execution, digital gold buying, or insurance tie-ups), or
                  alter existing features without liability.
                </p>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  5.3 Changes to Terms
                </h3>
                <p className="leading-relaxed">
                  We may modify these Terms at any time. If we make material
                  changes, we will notify you by updating the &ldquo;Last
                  Updated&rdquo; date at the top of this document or via an
                  in-app notification. Your continued use of the App after
                  changes are posted constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  6. LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES
                </h2>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  6.1 &ldquo;As-Is&rdquo; Provision
                </h3>
                <p className="mb-4 leading-relaxed font-medium text-amber-800 bg-amber-50/50 p-3 border-l-2 border-amber-400 rounded-r">
                  Nidhify is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS
                  AVAILABLE&rdquo; basis. We make no warranties, expressed or
                  implied, regarding the accuracy, reliability, updates,
                  calculation completeness, uptime, or error-free nature of the
                  data displayed in the App. Financial metrics, asset
                  valuations, interest totals, and third-party market data feeds
                  can be wrong, missing, delayed, or corrupt. You must
                  cross-verify all values directly with your financial
                  institution.
                </p>
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  6.2 Limitation of Damages
                </h3>
                <p className="mb-3 leading-relaxed">
                  To the maximum extent permitted by applicable law, in no event
                  shall the creator(s), operators, or future corporate entity of
                  Nidhify be liable for any direct, indirect, incidental,
                  special, consequential, or punitive damages, including but not
                  limited to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Loss of profits, financial losses, or bad investment
                      outcomes based on data displayed in the App.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Data loss, system downtime, or unauthorized third-party
                      access resulting from malware or hacking on the user's
                      device.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Errors, formatting lags, or structural discrepancies
                      between Nidhify's dashboard metrics and your actual asset
                      values at financial institutions.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  7. PROHIBITED USES
                </h2>
                <p className="mb-3 leading-relaxed">
                  You agree not to use the App to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Violate any local, national, or international laws or
                      regulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Attempt to bypass, test the vulnerability of, or breach
                      any security or authentication measures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Use any automated bots, scrapers, or scripts to extract
                      data from Nidhify.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      Impersonate others or upload financial statements that do
                      not belong to you.
                    </span>
                  </li>
                </ul>
              </div>

              {/* SECTION 8 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  8. GOVERNING LAW AND JURISDICTION
                </h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, without regard to its conflict of law
                  provisions. Any legal action or proceeding arising under these
                  Terms shall be brought exclusively in the courts located in
                  Mumbai, Maharashtra, and you hereby consent to the personal
                  jurisdiction and venue therein.
                </p>
              </div>

              {/* SECTION 9 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  9. TERMINATION
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend your account and
                  access to Nidhify at our sole discretion, without notice or
                  liability, for conduct that we believe violates these Terms or
                  is harmful to other users or the platform. You may also delete
                  your account at any time, which will result in the removal of
                  your personal financial data from our active databases.
                </p>
              </div>

              {/* SECTION 10 */}
              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  10. CONTACT INFORMATION
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms, please contact us
                  at:
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:support@nidhify.com"
                    className="text-primary hover:underline font-semibold"
                  >
                    support@nidhify.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {!isEmbedded && (
        <footer className="bg-primary text-white py-8">
          <div className="container text-center text-sm text-gray-400">
            &copy; 2026 Nidhify. All Rights Reserved.
          </div>
        </footer>
      )}
    </>
  );
}


// ---------------------------With Text large and IsRedirect------

// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// export const metadata = {
//   title: "Terms of Service",
//   description:
//     "Terms of Service for using Nidhify wealth management platform. Please read these terms carefully before using our services.",
//   alternates: {
//     canonical: 'https://nidhify.com/terms',
//   },
// };

// export default async function TermsPage({ searchParams }) {
//   const params = await searchParams;
//   const isEmbedded = params?.redirectApp === '1';

//   return (
//     <>
//       {!isEmbedded && (
//         <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
//           <div className="container flex items-center justify-between h-16">
//             <Link href="/" className="flex items-center gap-2 text-xl font-bold gradient-text">
//               <ArrowLeft size={20} />
//               Nidhify
//             </Link>
//             <nav className="hidden md:flex items-center gap-6">
//               <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
//                 Home
//               </Link>
//               <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
//                 About
//               </Link>
//               <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         </header>
//       )}

//       <main className={isEmbedded ? "" : "pt-16"}>
//         <section className={isEmbedded ? "py-10 md:py-14" : "py-20 md:py-28"}>
//           <div className={`container max-w-3xl mx-auto${isEmbedded ? " text-sm" : ""}`}>
//             {!isEmbedded && (
//               <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
//                 TERMS AND CONDITIONS
//               </h1>
//             )}
//             <p className={`text-gray-400${isEmbedded ? " text-xs mb-4" : " text-sm mb-8"}`}>Last Updated: July 12, 2026</p>

//             <div className={`text-gray-600${isEmbedded ? " space-y-4 [&_h2]:text-sm [&_h3]:text-xs" : " space-y-8"}`}>
//               <p className="leading-relaxed">
//                 Welcome to Nidhify (&ldquo;the Web Application,&rdquo; &ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before using our platform.
//               </p>
//               <p className="leading-relaxed">
//                 By accessing or using Nidhify, you agree to be bound by these Terms. If you do not agree to all of these Terms, do not use the App.
//               </p>

//               {/* SECTION 1 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   1. NATURE OF SERVICE & NO FINANCIAL ADVICE
//                 </h2>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   1.1 Informational and Tracking Tool Only
//                 </h3>
//                 <p className="mb-3 leading-relaxed">
//                   Nidhify is a wealth management, investment tracking, and budgeting tool designed solely for personal financial tracking and organizational purposes. The App aggregates data provided by you (either via manual input or document upload, such as a Consolidated Account Statement or CAS) to display an overview of your financial portfolio (including Mutual Funds, Fixed Deposits, Recurring Deposits, Digital Gold, Insurance, and Budgets).
//                 </p>
//                 <p className="mb-4 text-amber-800 font-medium bg-amber-50 p-3 border-l-4 border-amber-500 rounded-r">
//                   DATA ACCURACY NOTICE: Because data compilation relies on automated algorithms, parsing routines, and third-party feeds, you explicitly acknowledge that calculations, portfolio charts, historical metrics, and data displayed within the App can be wrong, incomplete, or out-of-sync. Nidhify is a directional aggregation interface only.
//                 </p>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   1.2 No Certified Financial Advice
//                 </h3>
//                 <p className="mb-3 font-semibold text-gray-900 bg-gray-50 p-3 border-l-4 border-primary rounded-r">
//                   CRITICAL NOTICE TO ALL USERS: The creator(s) and operators of Nidhify are not certified financial planners, brokers, tax advisors, or registered investment advisors (such as under SEBI or any other regulatory body).
//                 </p>
//                 <p className="leading-relaxed">
//                   All charts, insights, graphs, calculations, and automated metrics generated by Nidhify are for educational and informational purposes only. Nothing on this platform constitutes a solicitation, recommendation, endorsement, or financial, investment, or legal advice. You assume sole responsibility for evaluating the merits and risks associated with the use of any information or data on Nidhify before making any financial decisions.
//                 </p>
//               </div>

//               {/* SECTION 2 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   2. ELIGIBILITY & USER ACCOUNTS
//                 </h2>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       <strong>Age Requirement:</strong> You must be at least 18 years of age to use this App.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       <strong>Account Accuracy:</strong> You agree to provide accurate, current, and complete information during registration and manual data entry.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       <strong>Account Security:</strong> You are entirely responsible for maintaining the confidentiality of your login credentials and for any activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               {/* SECTION 3 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   3. USER DATA & CAS UPLOADS
//                 </h2>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   3.1 Data Ownership and License
//                 </h3>
//                 <p className="mb-4 leading-relaxed">
//                   You retain all rights to the financial data, text, and documents you upload or input into Nidhify. By uploading data (including password-protected CAS files), you grant Nidhify a localized, secure license to process, parse, and display this data strictly for the purpose of rendering your personal dashboard.
//                 </p>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   3.2 Automated Parsing (CAS Statements)
//                 </h3>
//                 <p className="leading-relaxed">
//                   When you upload a password-protected CAS file, the App decrypts and parses the file locally or securely via our backend to extract transaction data. Nidhify does not permanently store your master statement password unless explicitly requested by you for session persistence, and such data is handled in accordance with our Privacy Policy. You represent that you have the lawful right to upload and decrypt such financial statements.
//                 </p>
//               </div>

//               {/* SECTION 4 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   4. INTELLECTUAL PROPERTY
//                 </h2>
//                 <p className="leading-relaxed">
//                   All content, features, functionality, UI/UX design, logos (including the name &ldquo;Nidhify&rdquo;), code, software, graphics, and icons are the exclusive property of Nidhify's creator(s) and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, replicate, reverse-engineer, or distribute any part of the App without explicit written permission.
//                 </p>
//               </div>

//               {/* SECTION 5 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   5. FUTURE ROADMAP, COMPANY REGISTRATION, & AMENDMENTS
//                 </h2>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   5.1 Business Scaling and Future Entities
//                 </h3>
//                 <p className="mb-4 leading-relaxed">
//                   You explicitly acknowledge that Nidhify is currently operated as a proprietary project by an individual creator. However, we reserve the right to transfer, assign, or delegate these Terms and all operational responsibilities to a newly registered corporate entity (e.g., Private Limited company, LLP, or registered firm) at any time in the future without prior individual consent.
//                 </p>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   5.2 Product Expansion
//                 </h3>
//                 <p className="mb-4 leading-relaxed">
//                   We reserve the right to introduce new products, paid premium features, investment gateways (such as direct mutual fund execution, digital gold buying, or insurance tie-ups), or alter existing features without liability.
//                 </p>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   5.3 Changes to Terms
//                 </h3>
//                 <p className="leading-relaxed">
//                   We may modify these Terms at any time. If we make material changes, we will notify you by updating the &ldquo;Last Updated&rdquo; date at the top of this document or via an in-app notification. Your continued use of the App after changes are posted constitutes acceptance of the new Terms.
//                 </p>
//               </div>

//               {/* SECTION 6 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   6. LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES
//                 </h2>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   6.1 &ldquo;As-Is&rdquo; Provision
//                 </h3>
//                 <p className="mb-4 leading-relaxed font-medium text-amber-800 bg-amber-50/50 p-3 border-l-2 border-amber-400 rounded-r">
//                   Nidhify is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, updates, calculation completeness, uptime, or error-free nature of the data displayed in the App. Financial metrics, asset valuations, interest totals, and third-party market data feeds can be wrong, missing, delayed, or corrupt. You must cross-verify all values directly with your financial institution.
//                 </p>
//                 <h3 className="text-md font-medium text-gray-800 mb-1">
//                   6.2 Limitation of Damages
//                 </h3>
//                 <p className="mb-3 leading-relaxed">
//                   To the maximum extent permitted by applicable law, in no event shall the creator(s), operators, or future corporate entity of Nidhify be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Loss of profits, financial losses, or bad investment outcomes based on data displayed in the App.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Data loss, system downtime, or unauthorized third-party access resulting from malware or hacking on the user's device.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Errors, formatting lags, or structural discrepancies between Nidhify's dashboard metrics and your actual asset values at financial institutions.
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               {/* SECTION 7 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   7. PROHIBITED USES
//                 </h2>
//                 <p className="mb-3 leading-relaxed">
//                   You agree not to use the App to:
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Violate any local, national, or international laws or regulations.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Attempt to bypass, test the vulnerability of, or breach any security or authentication measures.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Use any automated bots, scrapers, or scripts to extract data from Nidhify.
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-2 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                     <span>
//                       Impersonate others or upload financial statements that do not belong to you.
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               {/* SECTION 8 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   8. GOVERNING LAW AND JURISDICTION
//                 </h2>
//                 <p className="leading-relaxed">
//                   These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Mumbai, Maharashtra, and you hereby consent to the personal jurisdiction and venue therein.
//                 </p>
//               </div>

//               {/* SECTION 9 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   9. TERMINATION
//                 </h2>
//                 <p className="leading-relaxed">
//                   We reserve the right to terminate or suspend your account and access to Nidhify at our sole discretion, without notice or liability, for conduct that we believe violates these Terms or is harmful to other users or the platform. You may also delete your account at any time, which will result in the removal of your personal financial data from our active databases.
//                 </p>
//               </div>

//               {/* SECTION 10 */}
//               <div>
//                 <h2 className="mb-3 text-xl font-semibold text-primary">
//                   10. CONTACT INFORMATION
//                 </h2>
//                 <p className="leading-relaxed">
//                   If you have any questions about these Terms, please contact us at:
//                   <br />
//                   Email:{" "}
//                   <a href="mailto:support@nidhify.com" className="text-primary hover:underline font-semibold">
//                     support@nidhify.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-primary text-white py-8">
//         <div className="container text-center text-sm text-gray-400">
//           &copy; 2026 Nidhify. All Rights Reserved.
//         </div>
//       </footer>
//     </>
//   );
// }
