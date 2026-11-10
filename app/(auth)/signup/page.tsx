import Link from "next/link";
import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col px-5 py-6">
      <Link
        href="/home"
        className="mx-auto w-full max-w-sm text-sm text-stone-600 hover:text-stone-900 hover:underline"
      >
        Back to feed
      </Link>

      <section className="mx-auto my-auto w-full max-w-sm py-12">
        <p className="mb-2 text-sm text-stone-600">Join Persona</p>
        <SignupForm />
      </section>

      <p className="mx-auto w-full max-w-sm text-center text-sm text-stone-500">
        Already have an account?{" "}
        <Link href="/login" className="text-stone-900 hover:underline">
          Sign in
        </Link>
      </p>
    </main>
  );
}
