import Link from "next/link";
import { LoginForm } from "@/app/login/login-form";
import { Icon } from "@/components/icon";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <Link href="/" className="brand">
        <span className="brand-mark">p.</span>
        <span className="brand-name">persona</span>
      </Link>
      <section className="auth-card">
        <Link href="/home" className="back-link">
          <Icon name="arrow" className="back-icon" />
          Back to feed
        </Link>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Come on in.</h1>
        <p className="auth-copy">Sign in to your Persona account.</p>
        <LoginForm />
      </section>
      <p className="auth-footnote">
        A calmer corner of the internet, still taking shape.
      </p>
    </main>
  );
}
