import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Account Deletion Request — Nidhify",
  description:
    "Request to delete your Nidhify account and permanently remove your personal data. Follow the in-app or online steps to initiate account deletion.",
  alternates: {
    canonical: "https://nidhify.com/delete-account",
  },
};

export default async function DeleteAccountPage({ searchParams }) {
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
                Account Deletion Request — Nidhify
              </h1>
            )}

            <div
              className={`text-gray-600${isEmbedded ? " space-y-4 [&_h2]:text-sm [&_h3]:text-xs" : " space-y-8"}`}
            >
              <p className="leading-relaxed">
                At <strong>Nidhify</strong>, we respect your privacy and give
                you full control over your personal data. If you wish to delete
                your account and remove your associated data permanently, you
                can easily do so either directly inside the app or by submitting
                a request online.
              </p>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  Method 1: Delete Account In-App (Instant)
                </h2>
                <p className="mb-4 leading-relaxed">
                  You can delete your account at any time directly through the
                  Nidhify mobile application:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="leading-relaxed">
                    Open the <strong>Nidhify</strong> app and log in.
                  </li>
                  <li className="leading-relaxed">
                    Tap on your <strong>Profile</strong> icon in the bottom
                    navigation bar.
                  </li>
                  <li className="leading-relaxed">
                    Select <strong>Settings</strong> (⚙️).
                  </li>
                  <li className="leading-relaxed">
                    Scroll down and tap on <strong>Delete Account</strong>.
                  </li>
                  <li className="leading-relaxed">
                    Type <strong>DELETE</strong> (in capital letters) into the
                    confirmation field.
                  </li>
                  <li className="leading-relaxed">
                    Tap the <strong>Delete Account</strong> button to
                    permanently wipe your account and data.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  Method 2: Request Account Deletion Online
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you no longer have the app installed or cannot access your
                  device, you can request account deletion by emailing our
                  support team:
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
                      <em>Account Deletion Request - Nidhify</em>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Email Body:</strong> Please include the{" "}
                      <strong>registered phone number or email address</strong>{" "}
                      associated with your Nidhify account.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-primary">
                  What Happens When You Delete Your Account?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Permanent Removal:</strong> Your Nidhify account,
                      profile details, and all personal identifiers will be
                      permanently deleted immediately upon confirmation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Associated Data:</strong> All transaction records,
                      preferences, and saved app data associated with your
                      profile will be wiped from our primary databases.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>
                      <strong>Data Retention Exceptions:</strong> In accordance
                      with financial regulations and legal obligations, minimal
                      transactional logs or record-keeping data may be retained
                      in secure archives for a limited legally required period
                      before complete destruction.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Need Help?
                </h3>
                <p className="leading-relaxed">
                  If you have any questions or face issues deleting your
                  account, feel free to contact us at{" "}
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
