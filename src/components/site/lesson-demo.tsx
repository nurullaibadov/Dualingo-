import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, RotateCcw, Volume2, X } from "lucide-react";

type Card = { word: string; translation: string; pronunciation: string; options: string[]; answer: string };

const DECKS: Record<string, Card[]> = {
  Spanish: [
    { word: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nos DEE-as", options: ["Good night", "Good morning", "Goodbye", "Hello friend"], answer: "Good morning" },
    { word: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh es-TAHS", options: ["Who are you?", "Where are you?", "How are you?", "What is this?"], answer: "How are you?" },
    { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-syas", options: ["Please", "Sorry", "Yes", "Thank you"], answer: "Thank you" },
  ],
  Japanese: [
    { word: "おはよう", translation: "Good morning", pronunciation: "o-ha-yoh", options: ["Good evening", "Good morning", "Good night", "Hello"], answer: "Good morning" },
    { word: "ありがとう", translation: "Thank you", pronunciation: "a-ri-ga-toh", options: ["Sorry", "Thank you", "Please", "Goodbye"], answer: "Thank you" },
    { word: "猫", translation: "Cat", pronunciation: "neko", options: ["Dog", "Bird", "Cat", "Fish"], answer: "Cat" },
  ],
  French: [
    { word: "Bonjour", translation: "Hello", pronunciation: "bohn-ZHOOR", options: ["Goodbye", "Hello", "Thank you", "Please"], answer: "Hello" },
    { word: "Merci beaucoup", translation: "Thank you very much", pronunciation: "mehr-SEE bo-KOO", options: ["Excuse me", "Thank you very much", "See you soon", "I love you"], answer: "Thank you very much" },
    { word: "Je m'appelle", translation: "My name is", pronunciation: "zhuh mah-PEL", options: ["I am from", "I love", "My name is", "I want"], answer: "My name is" },
  ],
};

export function LessonDemo() {
  const [lang, setLang] = useState<keyof typeof DECKS>("Spanish");
  const cards = useMemo(() => DECKS[lang], [lang]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const card = cards[idx];
  const isCorrect = picked === card.answer;

  const next = () => {
    if (picked === card.answer) setScore((s) => s + 10);
    setPicked(null);
    setIdx((i) => (i + 1) % cards.length);
  };

  const reset = (l?: keyof typeof DECKS) => {
    if (l) setLang(l);
    setIdx(0);
    setPicked(null);
    setScore(0);
  };

  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(card.word);
    u.lang = lang === "Spanish" ? "es-ES" : lang === "Japanese" ? "ja-JP" : "fr-FR";
    window.speechSynthesis.speak(u);
  };

  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Try it now</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold tracking-tight">
            A real lesson. Right here.
          </h2>
          <p className="mt-4 text-muted-foreground">No signup. Click an answer to see how a LinguaVerse lesson feels.</p>
        </div>

        <div className="mt-12 flex justify-center gap-2 flex-wrap">
          {(Object.keys(DECKS) as (keyof typeof DECKS)[]).map((l) => (
            <button
              key={l}
              onClick={() => reset(l)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all border ${
                lang === l
                  ? "bg-primary-gradient text-primary-foreground border-transparent shadow-glow"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-8 relative">
          <div className="absolute -inset-8 bg-primary-gradient opacity-10 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl border border-border bg-card p-8 md:p-12 shadow-glow">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Card {idx + 1} / {cards.length}</span>
                <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary-gradient transition-all" style={{ width: `${((idx + 1) / cards.length) * 100}%` }} />
                </div>
              </div>
              <span className="font-semibold text-gold">⚡ {score} XP</span>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={speak}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Volume2 className="size-3.5" /> {card.pronunciation}
              </button>
              <p className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight">{card.word}</p>
              <p className="mt-3 text-sm text-muted-foreground">Tap the English meaning</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {card.options.map((opt) => {
                const chosen = picked === opt;
                const showCorrect = picked && opt === card.answer;
                const showWrong = chosen && opt !== card.answer;
                return (
                  <button
                    key={opt}
                    disabled={!!picked}
                    onClick={() => setPicked(opt)}
                    className={`relative rounded-2xl border-2 px-5 py-4 text-left font-medium transition-all ${
                      showCorrect
                        ? "border-primary bg-primary/10 text-foreground"
                        : showWrong
                        ? "border-destructive bg-destructive/10 text-foreground"
                        : "border-border hover:border-primary hover:bg-primary/5"
                    } disabled:cursor-not-allowed`}
                  >
                    {opt}
                    {showCorrect && <Check className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-primary" />}
                    {showWrong && <X className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-destructive" />}
                  </button>
                );
              })}
            </div>

            {picked && (
              <div className="mt-8 flex items-center justify-between gap-4 animate-fade-up">
                <p className={`text-sm font-medium ${isCorrect ? "text-primary" : "text-destructive"}`}>
                  {isCorrect ? `Nice! "${card.word}" = "${card.translation}"` : `Not quite. "${card.word}" means "${card.translation}".`}
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => reset()} className="rounded-full">
                    <RotateCcw className="size-3.5" /> Reset
                  </Button>
                  <Button size="sm" onClick={next} className="rounded-full bg-primary-gradient text-primary-foreground">
                    Next card
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
