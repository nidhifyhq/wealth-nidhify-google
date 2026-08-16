"use client";

import { useState, useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nidhify.app";
const APP_URL = "https://app.nidhify.com/";

function detectIOS(userAgent) {
  if (!userAgent) return false;
  if (/iPad|iPhone|iPod/.test(userAgent)) return true;
  if (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1) return true;
  return false;
}

function detectAndroid(userAgent) {
  if (!userAgent) return false;
  return /Android/i.test(userAgent);
}

export function useDevice() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const ua =
      navigator.userAgentData?.userAgent ||
      navigator.userAgent ||
      "";
    setIsIOS(detectIOS(ua));
    setIsAndroid(detectAndroid(ua));
  }, []);

  return { isIOS, isAndroid, PLAY_STORE_URL, APP_URL };
}