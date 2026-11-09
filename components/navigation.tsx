"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import { usePathname } from "next/navigation";

const items: { label: string; href: string; icon: IconName }[] = [
  { label: "Feed", href: "/home/", icon: "feed" },
  { label: "Search", href: "/search/", icon: "search" },
  { label: "Notifications", href: "/notifications/", icon: "bell" },
  { label: "Messaging", href: "/messages/", icon: "message" },
  { label: "Profile", href: "/login/", icon: "person" },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <aside
      className="
        fixed inset-x-0 bottom-0 z-10 border-t border-line bg-white
        pb-[env(safe-area-inset-bottom)] md:sticky md:top-0 md:h-screen
        md:border-t-0 md:border-r md:pb-0
      "
    >
      <nav
        aria-label="Main navigation"
        className="flex justify-around p-2 md:flex-col md:justify-start md:gap-1 md:p-4"
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`
              grid size-12 place-items-center rounded-lg text-sm
              md:flex md:w-full md:justify-start md:gap-3 md:px-3
              ${
                pathname === item.href
                  ? "bg-accent/10 font-semibold text-accent"
                  : "text-ink hover:bg-stone-100"
              }
            `}
          >
            <Icon name={item.icon} className="size-5 shrink-0" />
            <span className="sr-only md:not-sr-only">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function Appshell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[14rem_1fr]">
      <Navigation />
      <main className="min-w-0 w-full px-4 py-8 pb-24 md:px-8 md:py-10">
        {children}
      </main>
    </div>
  );
}
