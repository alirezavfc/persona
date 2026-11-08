import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Persona — a space to learn and grow",
  description: "An educational social project for learning Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
