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
          <Icon name="persona" />
        </div>
        <p className="eyebrow">یه شروع کوچک</p>
        <h1>
          محلی برای یادگیری
          <br />و پیشرفت
        </h1>
        <p className="intro-copy" dir="rtl">
          پرسونا یک پروژه‌ی شخصی و آموزشی برای یادگیری و تمرین توسعه‌ی نرم‌افزار
          هست. هدفم اینه که در طول توسعه‌ی این پروژه، مباحث مختلفی از
          برنامه‌نویسی فرانت‌اند و بک‌اند گرفته تا امنیت و شبکه رو به‌صورت عملی
          یاد بگیرم. در حال حاضر تمرکزم روی یادگیری Next.js و توسعه‌ی فرانت‌اند
          است. برای طراحی رابط کاربری این نسخه نیز از ابزارهای هوش مصنوعی کمک
          گرفته‌ام. این پروژه به‌مرور توسعه پیدا می‌کنه و قابلیت‌های جدیدی بهش
          اضافه می‌شه.
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
