import { Brain, Mic, MessageCircle, Trophy, Globe, Zap } from "lucide-react";

const FEATURES = [
  { icon: Brain, title: "Spaced repetition", desc: "Smart flashcards resurface words right before you forget them — 4× retention vs. flat drilling." },
  { icon: Mic, title: "Speech coach", desc: "Real-time pronunciation scoring with native-speaker waveforms. Stop guessing if you sound right." },
  { icon: MessageCircle, title: "AI conversation partner", desc: "Chat with an AI tutor who roleplays as a barista, customs officer, or first date — at your level." },
  { icon: Trophy, title: "Streaks & leagues", desc: "Daily XP goals, weekly leagues, and friend challenges keep you coming back without burnout." },
  { icon: Globe, title: "Cultural deep-dives", desc: "Beyond grammar: idioms, etiquette, holidays, and film clips that make the language stick." },
  { icon: Zap, title: "5-minute lessons", desc: "Bite-sized sessions designed for commutes, lunch breaks, and the 4 minutes before bed." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">How it works</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Every tool a polyglot needs, in one place.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-glow"
            >
              <div className="size-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5">
                <f.icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
