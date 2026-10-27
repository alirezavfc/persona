"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

export function LikeButton({ count }: { count: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <button
      type="button"
      aria-label={liked ? "Unlike post" : "Like post"}
      aria-pressed={liked}
      className={`inline-flex cursor-pointer items-center gap-[7px] border-0 bg-transparent px-0 py-0.5 text-xs text-[#929795] hover:text-accent ${liked ? "text-red-muted" : ""}`}
      onClick={() => setLiked((value) => !value)}
    >
      <Icon name="heart" className={`size-[17px] ${liked ? "fill-[#b4616122]" : ""}`} />
      <span>{count + Number(liked)}</span>
    </button>
  );
}
