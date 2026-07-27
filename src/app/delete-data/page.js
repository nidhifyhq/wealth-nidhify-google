import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Data Deletion Request — Nidhify",
  description:
    "Request to delete specific data entries from your Nidhify account, such as Fixed Deposits, Recurring Deposits, Gold holdings, or other assets, without deleting your entire account.",
  alternates: {
    canonical: "https://nidhify.com/delete-data",
  },
};

export default async function DeleteDataPage({ searchParams }) {
  const params = await searchParams;
  const isEmbedded = params?.redirectApp === "1";

  return (
    <>
      {!isEmbedded && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="container flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
            >
              <ArrowLeft size={20} />
              <Image src="/transBlackLogo.png" alt="Nidhify" width={80} height={22} className="h-6 w-auto" />
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
                Data Deletion Request — Nidhify
              </h1>
            )}

            <div
              className={`text-gray-600${isEmbedded ? " space-y-4 [&_h2]:text-sm [&_h3]:text-xs" : " space-y-8"}`}
            >
              <p className="leading-relaxed">
                At <strong>Nidhify</strong>, we believe in giving you complete
                control over your financial records. You can easily remove
                specific data entries (such as Fixed Deposits, Recurring
                Deposits, Gold holdings, or other assets) from your profile at
                any time, without needing to delete your entire Nidhify account.
              </p>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  How to Delete Specific Data In-App
                </h2>
                <p className="mb-4 leading-relaxed">
                  You can remove individual investment or asset records directly
                  inside the Nidhify mobile application in just a few taps:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="leading-relaxed">
                    Open the <strong>Nidhify</strong> app and log in.
                  </li>
                  <li className="leading-relaxed">
                    Go to your <strong>Dashboard</strong>
                  </li>
                  <li className="leading-relaxed">
                    Select the specific product you want to manage (e.g.,{" "}
                    <strong>Fixed Deposits (FD)</strong>,{" "}
                    <strong>Recurring Deposits (RD)</strong>,{" "}
                    <strong>Gold</strong>, or <strong>Others</strong>).
                  </li>
                  <li className="leading-relaxed">
                    Tap on the specific entry/record you want to delete.
                  </li>
                  <li className="leading-relaxed">
                    Tap the <strong>Delete / Trash</strong> icon (🗑️) or select{" "}
                    <strong>Delete Entry</strong>.
                  </li>
                  <li className="leading-relaxed">
                    Confirm the deletion to permanently remove that record from
                    your portfolio.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  Request Custom Data Deletion Online
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you want to clear multiple entries, wipe a full section, or
                  need assistance deleting specific records without closing your
                  account, you can submit a manual request:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Send an email to:</strong>{" "}
                      <a
                        href="mailto:support@nidhify.com"
                        className="text-primary hover:underline font-semibold"
                      >
                        support@nidhify.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Subject line:</strong>{" "}
                      <em>Specific Data Deletion Request - Nidhify</em>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Email Body:</strong> Please provide:
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Your registered phone number or email address.
                        </li>
                        <li>
                          A brief description of the specific data you want
                          deleted (e.g., "Please remove all my Fixed Deposit
                          entries" or "Delete my Gold transaction history").
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  What Happens When Data Is Deleted?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Immediate Removal:</strong> The selected records
                      (FD, RD, Gold, etc.) are permanently erased from your
                      profile and will no longer be included in your portfolio
                      summary or calculations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Account Remains Active:</strong> Your Nidhify
                      account and all other non-selected data remain completely
                      intact.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Irreversible:</strong> Deleting an entry is
                      permanent. If you delete a record by mistake, you will
                      need to add it again manually.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Need Assistance?
                </h3>
                <p className="leading-relaxed">
                  If you have any questions or need help managing your data,
                  reach out to us anytime at{" "}
                  <a
                    href="mailto:support@nidhify.com"
                    className="text-primary hover:underline font-semibold"
                  >
                    support@nidhify.com
                  </a>
                  .
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
