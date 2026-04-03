import { Link2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <div className="flex justify-center items-center gap-2">
          <Link2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">ShortLink</span>
        </div>
      </div>
    </header>
  )
}