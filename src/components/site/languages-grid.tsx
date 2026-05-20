const LANGUAGES = [
  { name: "Spanish", flag: "🇪🇸", learners: "8.2M", level: "Beginner → C2" },
  { name: "Japanese", flag: "🇯🇵", learners: "3.4M", level: "Hiragana → JLPT N1" },
  { name: "French", flag: "🇫🇷", learners: "6.1M", level: "Beginner → C2" },
  { name: "Mandarin", flag: "🇨🇳", learners: "2.8M", level: "Pinyin → HSK 6" },
  { name: "German", flag: "🇩🇪", learners: "4.5M", level: "Beginner → C2" },
  { name: "Korean", flag: "🇰🇷", learners: "2.1M", level: "Hangul → TOPIK 6" },
  { name: "Italian", flag: "🇮🇹", learners: "3.9M", level: "Beginner → C2" },
  { name: "Portuguese", flag: "🇵🇹", learners: "2.7M", level: "Beginner → C2" },
  { name: "Arabic", flag: "🇸🇦", learners: "1.6M", level: "Alphabet → Fluent" },
  { name: "Russian", flag: "🇷🇺", learners: "1.9M", level: "Cyrillic → C2" },
  { name: "Hindi", flag: "🇮🇳", learners: "1.4M", level: "Devanagari → Fluent" },
  { name: "Dutch", flag: "🇳🇱", learners: "0.9M", level: "Beginner → C2" },
];

export function LanguagesGrid() {
  return (
    <section id="languages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Languages</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Pick your next tongue.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From the romance of Italian to the precision of Mandarin — start at
            zero or level up with structured paths to C2 fluency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {LANGUAGES.map((lang, i) => (
            <button
              key={lang.name}
              className="group relative text-left rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="text-4xl mb-4 transition-transform group-hover:scale-110">{lang.flag}</div>
              <h3 className="font-display text-xl font-bold">{lang.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{lang.level}</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{lang.learners} learners</span>
                <span className="text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Start →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
