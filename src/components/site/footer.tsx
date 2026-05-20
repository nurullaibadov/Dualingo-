import { Languages } from "lucide-react";

const STATS = [
  { n: "40+", l: "Languages" },
  { n: "2.4M", l: "Daily learners" },
  { n: "94%", l: "Hit their goal" },
  { n: "4.9★", l: "App Store rating" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-primary-gradient grid place-items-center shadow-glow">
              <Languages className="size-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">
              Lingua<span className="text-gradient-gold">Verse</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Built by polyglots in 14 cities. We believe every person on Earth
            should be able to talk to every other person on Earth.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Product</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Languages</li><li>Features</li><li>Pricing</li><li>Mobile app</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3 text-sm">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li><li>Careers</li><li>Press</li><li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} LinguaVerse. All rights reserved.</span>
          <span>Made with ♥ in 14 languages</span>
        </div>
      </div>
    </footer>
  );
}
