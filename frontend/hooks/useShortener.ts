"use client";

import { useState } from "react";
import { showToast } from "@/utils/showToast";

export const useShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const shorten = async () => {
    if (!url.trim()) {
      showToast("Please enter a URL", "error");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      const finalUrl = `${window.location.origin}/${data.shortID}`;
      setShortUrl(finalUrl);
      setCopied(false);

    } catch (err: any) {
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      showToast("Copied!", "info");

      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Copy failed", "error");
    }
  };

  return {
    url,
    setUrl,
    shortUrl,
    setShortUrl,
    isLoading,
    copied,
    shorten,
    copy,
  };
};