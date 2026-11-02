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
      className={`inline-flex items-center gap-1 hover:text-accent ${liked ? "text-red-600" : "text-stone-600"}`}
      onClick={() => setLiked((value) => !value)}
    >
      <Icon
        name="heart"
        className={`size-4 ${liked ? "fill-red-100" : ""}`}
      />
      <span>{count + Number(liked)}</span>
    </button>
  );
}
