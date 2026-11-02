import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "feed"
  | "search"
  | "bell"
  | "message"
  | "person"
  | "heart"
  | "reply";

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    feed: <path d="M4 5.5h16M4 12h16M4 18.5h10" />,
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.3" />
        <path d="m16 16 4.2 4.2" />
      </>
    ),
    bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />,
    message: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-9.5a7.5 7.5 0 1 1 17 0Z" />
        <path d="M7 11h8M7 14h5" />
      </>
    ),
    person: <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>,
    heart: (
      <path d="M20.8 8.8c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10a4.5 4.5 0 0 1 8.8-1.4 4.5 4.5 0 0 1 8.8 1.4Z" />
    ),
    reply: <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-9.5a7.5 7.5 0 1 1 17 0Z" />,
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
