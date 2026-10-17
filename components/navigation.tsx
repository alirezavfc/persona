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
    <aside className="sidebar">
      <Link href="/home" aria-label="Persona home" className="brand">
        <span className="brand-mark">p.</span>
        <span className="brand-name">persona</span>
      </Link>
      <nav aria-label="Main navigation" className="nav-list">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            aria-current={active === item.label ? "page" : undefined}
            className={`nav-item ${active === item.label ? "nav-active" : ""}`}
          >
            <Icon name={item.icon} className="nav-icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <p className="sidebar-note">A little space to be yourself.</p>
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
    <div className="app-shell">
      <Navigation active={active} />
      <main className="app-main">{children}</main>
    </div>
  );
}
