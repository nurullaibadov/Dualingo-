import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { LanguagesGrid } from "@/components/site/languages-grid";
import { Features } from "@/components/site/features";
import { LessonDemo } from "@/components/site/lesson-demo";
import { Pricing } from "@/components/site/pricing";
import { Stats, Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <LanguagesGrid />
        <Features />
        <LessonDemo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
