import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    name: "Free",
    price: "0",
    desc: "Everything you need to fall in love with a language.",
    features: ["3 languages at once", "Daily lessons", "Streak tracking", "Community leagues"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Plus",
    price: "9",
    desc: "For learners chasing real fluency.",
    features: ["Unlimited languages", "AI conversation partner", "Speech coach with feedback", "Offline lessons", "No ads"],
    cta: "Go Plus",
    featured: true,
  },
  {
    name: "Family",
    price: "16",
    desc: "Up to 6 accounts. One bill.",
    features: ["Everything in Plus", "6 separate profiles", "Parental progress view", "Shared family league"],
    cta: "Get Family",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Honest pricing. Cancel anytime.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 transition-all ${
                t.featured
                  ? "border-primary bg-card shadow-glow md:-translate-y-3"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-gold-foreground">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${t.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <Button
                className={`mt-6 w-full rounded-full ${
                  t.featured
                    ? "bg-primary-gradient text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {t.cta}
              </Button>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
