"use client";

import Image from "next/image";
import { useDevice } from "@/lib/use-device";

export default function DeviceCTA() {
  const { isIOS, PLAY_STORE_URL } = useDevice();

  if (isIOS) {
    return (
      <a
        href="https://app.nidhify.com/"
        className="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-4 py-2 text-sm font-medium hover:bg-secondary/90 transition-colors"
      >
        Get Started
      </a>
    );
  }

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Nidhify on Google Play"
      className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
    >
      <Image
        src="/playstore-img.png"
        alt="Get it on Google Play"
        width={880}
        height={572}
        className="w-32 h-auto"
      />
    </a>
  );
}