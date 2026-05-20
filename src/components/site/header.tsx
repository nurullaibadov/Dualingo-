import { Link } from "@tanstack/react-router";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-xl bg-primary-gradient grid place-items-center shadow-glow">
            <Languages className="size-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Lingua<span className="text-gradient-gold">Verse</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#languages" className="text-muted-foreground hover:text-foreground transition-colors">Languages</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Try a Lesson</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button className="rounded-full bg-primary-gradient text-primary-foreground hover:opacity-90 shadow-glow hidden sm:inline-flex">
            Start free
          </Button>
        </div>
      </div>
    </header>
  );
}
