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
      className={`post-action like-action ${liked ? "liked" : ""}`}
      onClick={() => setLiked((value) => !value)}
    >
      <Icon name="heart" className="action-icon" />
      <span>{count + Number(liked)}</span>
    </button>
  );
}
