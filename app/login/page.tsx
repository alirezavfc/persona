import Link from "next/link";
import { LoginForm } from "@/app/login/login-form";
import { Icon } from "@/components/icon";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[radial-gradient(ellipse_at_50%_45%,#fff_0%,#fafbf9_70%)] px-6 pt-[35px] pb-[25px]">
      <Link href="/" className="inline-flex items-center gap-2.5 self-start">
        <span className="inline-grid size-[34px] place-items-center rounded-[11px] bg-accent pt-0 pr-0 pb-1 pl-0 font-serif text-[22px] font-semibold tracking-[-2px] text-white shadow-[0_2px_5px_#345b5222]">p.</span>
        <span className="font-serif text-[22px] tracking-[-0.8px]">persona</span>
      </Link>
      <section className="m-auto w-full max-w-[410px] rounded-[18px] border border-[#eceeea] bg-white px-9 pt-[33px] pb-[30px] shadow-[0_14px_44px_#27372d0b] max-[430px]:px-[23px] max-[430px]:pt-7 max-[430px]:pb-6">
        <Link href="/home" className="mb-[30px] inline-flex items-center gap-[9px] text-[13px] text-[#6f7774] hover:text-accent">
          <Icon name="arrow" className="size-[17px] rotate-180" />
          Back to feed
        </Link>
        <p className="mb-[9px] text-[10px] leading-[1.4] font-bold tracking-[1.25px] text-[#8b918d]">WELCOME BACK</p>
        <h1 className="m-0 font-serif text-[32px] font-medium tracking-[-1px]">Come on in.</h1>
        <p className="mt-2 mb-[27px] text-sm text-[#848b88]">Sign in to your Persona account.</p>
        <LoginForm />
      </section>
      <p className="mt-auto mb-0 font-serif text-xs italic text-[#a1a5a1]">
        A calmer corner of the internet, still taking shape.
      </p>
    </main>
  );
}
