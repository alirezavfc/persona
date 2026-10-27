import Link from "next/link";
import { Icon } from "@/components/icon";

export default function IntroductionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_49%_42%,#fff_0%,#fff_22%,#fbfbf9_56%,#f7f8f5_100%)] px-[max(7vw,28px)] pt-[35px] pb-7 max-[430px]:px-[23px] max-[430px]:pt-[25px] max-[430px]:pb-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex w-fit items-center gap-2.5">
          <span className="inline-grid size-[34px] place-items-center rounded-[11px] bg-accent pt-0 pr-0 pb-1 pl-0 font-serif text-[22px] font-semibold tracking-[-2px] text-white shadow-[0_2px_5px_#345b5222]">p.</span>
          <span className="font-serif text-[22px] tracking-[-0.8px]">persona</span>
        </Link>
        <span className="text-[10px] tracking-[1.1px] text-[#999e9a] max-[430px]:max-w-[138px] max-[430px]:text-right max-[430px]:text-[9px] max-[430px]:leading-[1.5]">AN OPEN-ENDED LEARNING PROJECT</span>
      </div>
      <section className="m-auto w-full max-w-[560px] px-0 pt-14 pb-20 text-center">
        <div className="mx-auto mb-[30px] grid size-[59px] place-items-center rounded-[17px] border border-green-border bg-gradient-to-br from-white to-[#eef4f0] text-[#50766b] shadow-[0_7px_20px_#253e3210]">
          <Icon name="persona" className="size-[25px]" />
        </div>
        <p className="mb-[9px] text-[10px] leading-[1.4] font-bold tracking-[1.25px] text-[#8b918d]">یه شروع کوچک</p>
        <h1 className="m-0 font-serif text-[clamp(44px,7vw,66px)] leading-[1.08] font-normal tracking-[-2.5px]">
          محلی برای یادگیری
          <br />و پیشرفت
        </h1>
        <p className="mx-auto mt-[22px] mb-[27px] max-w-[430px] text-[15px] leading-[1.75] text-[#7e8581]" dir="rtl">
          پرسونا یک پروژه‌ی شخصی و آموزشی برای یادگیری و تمرین توسعه‌ی نرم‌افزار
          هست. هدفم اینه که در طول توسعه‌ی این پروژه، مباحث مختلفی از
          برنامه‌نویسی فرانت‌اند و بک‌اند گرفته تا امنیت و شبکه رو به‌صورت عملی
          یاد بگیرم. در حال حاضر تمرکزم روی یادگیری Next.js و توسعه‌ی فرانت‌اند
          است. برای طراحی رابط کاربری این نسخه نیز از ابزارهای هوش مصنوعی کمک
          گرفته‌ام. این پروژه به‌مرور توسعه پیدا می‌کنه و قابلیت‌های جدیدی بهش
          اضافه می‌شه.
        </p>
        <Link href="/home" className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#41685f] bg-accent px-[18px] py-[13px] text-[13px] text-white shadow-[0_5px_14px_#426d6525] transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_8px_18px_#426d6535]">
          Explore Persona <Icon name="arrow" className="size-4" />
        </Link>
      </section>
      <footer className="flex justify-between text-[11px] text-[#a1a5a1] max-[430px]:gap-3 max-[430px]:text-[10px]">
        <span>Made for learning, open to what comes next.</span>
        <span>Persona · 2026</span>
      </footer>
    </main>
  );
}
