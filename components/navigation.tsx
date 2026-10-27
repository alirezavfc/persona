import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";

const items: { label: string; href: string; icon: IconName }[] = [
  { label: "Feed", href: "/home", icon: "feed" },
  { label: "Search", href: "/search", icon: "search" },
  { label: "Notifications", href: "/notifications", icon: "bell" },
  { label: "Messaging", href: "/messages", icon: "message" },
  { label: "Profile", href: "/login", icon: "person" },
];

export function Navigation({ active }: { active?: string }) {
  return (
    <aside className="sticky top-0 flex h-screen flex-col border-r border-line bg-white/75 pr-6 pt-9 pb-7 pl-[34px] max-[760px]:fixed max-[760px]:inset-x-0 max-[760px]:top-auto max-[760px]:bottom-0 max-[760px]:z-5 max-[760px]:h-[68px] max-[760px]:w-full max-[760px]:border-t max-[760px]:border-r-0 max-[760px]:bg-white/95 max-[760px]:px-[11px] max-[760px]:pt-0 max-[760px]:pb-[env(safe-area-inset-bottom)] max-[760px]:backdrop-blur-lg">
      <Link href="/home" aria-label="Persona home" className="inline-flex w-fit items-center gap-2.5 max-[760px]:hidden">
        <span className="inline-grid size-[34px] place-items-center rounded-[11px] bg-accent pt-0 pr-0 pb-1 pl-0 font-serif text-[22px] font-semibold tracking-[-2px] text-white shadow-[0_2px_5px_#345b5222]">p.</span>
        <span className="font-serif text-[22px] tracking-[-0.8px]">persona</span>
      </Link>
      <nav aria-label="Main navigation" className="mt-[74px] grid gap-[7px] max-[760px]:mt-0 max-[760px]:flex max-[760px]:h-full max-[760px]:items-center max-[760px]:justify-around max-[760px]:gap-0.5">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            aria-current={active === item.label ? "page" : undefined}
            className={`flex h-12 items-center gap-4 rounded-xl px-[15px] text-[15px] font-medium text-text-subtle transition-colors max-[760px]:grid max-[760px]:size-[54px] max-[760px]:place-items-center max-[760px]:p-0 ${active === item.label ? "bg-accent-soft font-semibold text-accent-text hover:bg-accent-soft hover:text-accent-text" : "hover:bg-[#f2f4f1] hover:text-ink"}`}
          >
            <Icon name={item.icon} className="size-[21px] shrink-0 max-[760px]:size-[22px]" />
            <span className="max-[760px]:hidden">{item.label}</span>
          </Link>
        ))}
      </nav>
      <p className="mt-auto mb-0 font-serif text-[13px] italic text-[#9a9e9d] max-[760px]:hidden">A little space to be yourself.</p>
    </aside>
  );
}

export function AppShell({
  children,
  active,
}: {
  children: ReactNode;
  active?: string;
}) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1280px] grid-cols-[264px_minmax(0,1fr)] max-[760px]:block max-[760px]:pb-[78px]">
      <Navigation active={active} />
      <main className="min-w-0 px-[42px] max-[760px]:px-[22px] max-[430px]:px-[17px]">{children}</main>
    </div>
  );
}
