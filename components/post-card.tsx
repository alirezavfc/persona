import Link from "next/link";
import type { PersonaPost } from "@/lib/types";
import { findUser } from "@/lib/mock-data";
import { Icon } from "@/components/icon";
import { LikeButton } from "@/components/like-button";

export function PostCard({ post }: { post: PersonaPost }) {
  const author = findUser(post.authorId);
  if (!author) return null;
  return (
    <article className="grid grid-cols-[42px_minmax(0,1fr)] gap-[14px] border-b border-line px-0.5 pt-[23px] pb-[19px] max-[430px]:grid-cols-[36px_minmax(0,1fr)] max-[430px]:gap-[11px] max-[430px]:pt-5">
      <div className="grid size-10 shrink-0 place-items-center rounded-full border border-green-border bg-gradient-to-br from-green-pale to-green-light font-serif text-[13px] tracking-[0.3px] text-[#426b62] max-[430px]:size-9 max-[430px]:text-xs" aria-hidden="true">
        P
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-xs text-[#8b9091]">
          <Link href={`/profile/${author.id}`} className="text-[13px] font-[650] text-[#343a3b] hover:text-accent hover:underline hover:underline-offset-[3px]">
            {author.id}
          </Link>
          <span className="text-[#b4b7b4]">·</span>
          <time>{post.createdAt}</time>
        </div>
        <Link href={`/post/${post.id}`} className="block">
          <p className="mt-[9px] mb-[15px] text-[15px] leading-[1.66] tracking-[0.02px] text-text-soft max-[430px]:text-sm">{post.text}</p>
        </Link>
        <div className="flex items-center gap-[31px]">
          <LikeButton count={post.likes} />
          <Link
            href={`/post/${post.id}`}
            className="inline-flex cursor-pointer items-center gap-[7px] border-0 bg-transparent px-0 py-0.5 text-xs text-[#929795] hover:text-accent"
            aria-label={`View ${post.replyIds.length} replies`}
          >
            <Icon name="reply" className="size-[17px]" />
            <span>{post.replyIds.length}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
