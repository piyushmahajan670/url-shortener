"use client"
import { Features } from "@/component/home/Features";
import { ShortenerBox } from "@/component/home/ShortenerBox";
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import { useShortener } from "@/hooks/useShortener";

export default function Home() {
  const { url, setUrl, shortUrl, isLoading, copied, shorten, copy, setShortUrl } = useShortener();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ShortenerBox
        url={url}
        setUrl={setUrl}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        isLoading={isLoading}
        generateShortLink={shorten}
        copied={copied}
        copyToClipboard={copy}
      />

      {/* Features */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
}
