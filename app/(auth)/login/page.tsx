import Link from "next/link";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col px-5 py-6">
      <Link
        href="/home"
        className="mx-auto w-full max-w-sm text-sm text-accent hover:underline"
      >
        Back to feed
      </Link>
      <section className="mx-auto my-auto w-full max-w-sm py-12">
        <p className="mb-2 text-sm text-stone-600">Welcome back</p>
        <h1 className="mb-2 font-serif text-3xl">Come on in.</h1>
        <p className="mb-6 text-sm text-stone-600">
          Sign in to your Persona account.
        </p>
        <LoginForm />
      </section>
      <p className="mx-auto w-full max-w-sm text-center text-sm text-stone-500">
        A calmer corner of the internet, still taking shape.
      </p>
    </main>
  );
}
