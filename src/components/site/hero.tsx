import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grain text-primary" />
      <div className="absolute -top-20 -right-32 size-[480px] rounded-full bg-primary-gradient opacity-20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-20 size-[420px] rounded-full bg-gold-gradient opacity-25 blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-foreground">
              <Sparkles className="size-3.5 text-gold" />
              40+ languages · AI tutor · 100% free to start
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[1.02]">
              Speak the world.
              <span className="block text-gradient-gold">One word at a time.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Learn any language with daily 5-minute lessons, native-speaker audio,
              spaced-repetition flashcards, and an AI conversation partner that adapts
              to your pace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full h-12 px-7 bg-primary-gradient text-primary-foreground hover:opacity-90 shadow-glow">
                Start learning free
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 border-2">
                Watch a demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="size-8 rounded-full border-2 border-background bg-primary-gradient" style={{ opacity: 0.6 + i * 0.1 }} />
                ))}
              </div>
              <span><span className="font-semibold text-foreground">2.4M+ learners</span> on a streak today</span>
            </div>
          </div>

          {/* Floating lesson card */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 bg-primary-gradient opacity-20 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-border bg-card p-8 shadow-glow">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Lesson 12 · Greetings</span>
                  <span className="text-gold font-semibold">+15 XP</span>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">Translate to Japanese</p>
                <p className="mt-2 font-display text-3xl font-bold">"Good morning, friend."</p>
                <div className="mt-6 space-y-2">
                  {["おはよう、友達。", "こんばんは、先生。", "さようなら、皆さん。"].map((opt, i) => (
                    <button
                      key={opt}
                      className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all hover:border-primary hover:bg-primary/5 ${
                        i === 0 ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="mt-6 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/5 bg-gold-gradient" />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-gold rotate-3 animate-float-slow">
                <div className="text-xs text-muted-foreground">Streak</div>
                <div className="font-display text-2xl font-bold text-gradient-gold">🔥 47 days</div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-glow -rotate-2">
                <div className="text-xs text-muted-foreground">Today</div>
                <div className="font-display text-lg font-bold">120 XP earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
