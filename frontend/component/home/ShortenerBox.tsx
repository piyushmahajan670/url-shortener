import { Check, Copy, Link2 } from "lucide-react";
import Button from "../ui/Button";

export function ShortenerBox({
  url,
  setUrl,
  shortUrl,
  setShortUrl,
  isLoading,
  copied,
  generateShortLink,
  copyToClipboard,
}: {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  shortUrl: string;
  setShortUrl: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  copied: boolean;
  generateShortLink: () => Promise<void>;
  copyToClipboard: () => void;
}) {
  return (
    <section className="gradient-hero py-24 md:py-36">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
          Create Short Links!
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Simplify your URLs and track every click with powerful analytics.
        </p>

        <div className="p-6 md:p-8 shadow-lg border-border/50 max-w-2xl mx-auto bg-card">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setShortUrl("");
              }}
              placeholder="Paste Your Link To Shorten It!"
              className="flex-1 h-12 flex w-full rounded-md border border-input bg-background px-3 py-2
                  text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm
                  file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              onKeyDown={(e) => e.key === "Enter" && generateShortLink()}
            />
            <Button
              onClick={generateShortLink}
              disabled={isLoading}
              className="h-12 px-8 text-base font-medium bg-primary text-primary-foreground
                hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md   ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none cursor-pointer"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Shortening...
                </span>
              ) : (
                "Shorten"
              )}
            </Button>
          </div>

          {shortUrl && (
            <div className="mt-5 flex items-center gap-3 p-4 rounded-lg bg-accent border border-border/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Link2 className="h-5 w-5 text-primary shrink-0" />
              <span className="text-accent-foreground font-medium truncate flex-1 text-left">
                {shortUrl}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="shrink-0 text-primary hover:text-primary/80 hover:bg-accent"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}