"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "@/lib/use-device";

export default function DownloadRedirect() {
  const { isIOS, isAndroid, PLAY_STORE_URL, APP_URL } = useDevice();

  useEffect(() => {
    if (!isIOS && !isAndroid) return;
    window.location.replace(isIOS ? APP_URL : PLAY_STORE_URL);
  }, [isIOS, isAndroid, APP_URL, PLAY_STORE_URL]);

  const downloadHref = isIOS ? APP_URL : PLAY_STORE_URL;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container max-w-lg mx-auto px-4 text-center">
        {/* <Image
          src="/nidhifylogofull.png"
          alt="Nidhify"
          width={200}
          height={54}
          className="h-12 w-auto mx-auto mb-6"
        /> */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-3">
          Download Nidhify
        </h1>
        <p className="text-lg text-primary/60 leading-relaxed mb-10">
          Track your entire wealth in one place. Redirecting
          {isIOS ? " to the Nidhify web app" : " to the Google Play Store"}…
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={downloadHref}
            target={isIOS ? undefined : "_blank"}
            rel={isIOS ? undefined : "noopener noreferrer"}
            className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 border-0 px-8 py-4 text-base font-medium transition-colors"
          >
            Download Nidhify App
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 px-8 py-4 text-base font-medium transition-colors"
          >
            Go to Website
          </Link>
        </div>

        <p className="mt-8 text-sm text-primary/40">
          If you are not redirected automatically, tap the button above.
        </p>
      </div>
    </section>
  );
}