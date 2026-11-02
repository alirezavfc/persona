import Link from "next/link";

export default function IntroductionPage() {
  return (
    <main className="flex min-h-screen flex-col px-5 py-6">
      <header className="mx-auto flex w-full max-w-4xl justify-between text-sm">
        <Link href="/" className="font-semibold">Persona</Link>
        <span className="text-stone-600">An open-ended learning project</span>
      </header>
      <section className="mx-auto my-auto max-w-xl py-16 text-center">
        <p className="mb-3 text-sm text-stone-600">یه شروع کوچک</p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          محلی برای یادگیری
          <br />و پیشرفت
        </h1>
        <p className="my-6 leading-relaxed text-stone-700" dir="rtl">
          پرسونا یک پروژه‌ی شخصی و آموزشی برای یادگیری و تمرین توسعه‌ی نرم‌افزار
          هست. هدفم اینه که در طول توسعه‌ی این پروژه، مباحث مختلفی از
          برنامه‌نویسی فرانت‌اند و بک‌اند گرفته تا امنیت و شبکه رو به‌صورت عملی
          یاد بگیرم. در حال حاضر تمرکزم روی یادگیری Next.js و توسعه‌ی فرانت‌اند
          است. برای طراحی رابط کاربری این نسخه نیز از ابزارهای هوش مصنوعی کمک
          گرفته‌ام. این پروژه به‌مرور توسعه پیدا می‌کنه و قابلیت‌های جدیدی بهش
          اضافه می‌شه.
        </p>
        <Link href="/home" className="inline-block rounded bg-accent px-4 py-2 text-white hover:bg-accent/90">
          Explore Persona
        </Link>
      </section>
      <footer className="mx-auto flex w-full max-w-4xl flex-wrap justify-between gap-2 text-xs text-stone-500">
        <span>Made for learning, open to what comes next.</span>
        <span>Persona · 2026</span>
      </footer>
    </main>
  );
}
