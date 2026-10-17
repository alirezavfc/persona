import Link from "next/link";
import { Icon } from "@/components/icon";

export default function IntroductionPage() {
  return (
    <main className="intro-page">
      <div className="intro-top">
        <Link href="/" className="brand">
          <span className="brand-mark">p.</span>
          <span className="brand-name">persona</span>
        </Link>
        <span className="intro-kicker">AN OPEN-ENDED LEARNING PROJECT</span>
      </div>
      <section className="intro-content">
        <div className="intro-symbol">
          <Icon name="spark" />
        </div>
        <p className="eyebrow">A SMALL BEGINNING</p>
        <h1>
          A space to learn
          <br />
          and grow into.
        </h1>
        <p className="intro-copy">
          Persona is an educational project for learning Next.js, developed with
          AI assistance. It’s a small first step, made to change and evolve over
          time.
        </p>
        <Link href="/home" className="intro-cta">
          Explore Persona <Icon name="arrow" />
        </Link>
      </section>
      <footer className="intro-footer">
        <span>Made for learning, open to what comes next.</span>
        <span>Persona · 2026</span>
      </footer>
    </main>
  );
}
