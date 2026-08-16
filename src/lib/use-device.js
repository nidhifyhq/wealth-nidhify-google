"use client";

import { useState, useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nidhify.app";

function detectIOS(userAgent) {
  if (!userAgent) return false;
  if (/iPad|iPhone|iPod/.test(userAgent)) return true;
  if (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1) return true;
  return false;
}

export function useDevice() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua =
      navigator.userAgentData?.userAgent ||
      navigator.userAgent ||
      "";
    setIsIOS(detectIOS(ua));
  }, []);

  return { isIOS, PLAY_STORE_URL };
}