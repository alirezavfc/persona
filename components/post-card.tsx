import Link from "next/link";
import type { PersonaPost } from "@/lib/types";
import { findUser } from "@/lib/mock-data";
import { Icon } from "@/components/icon";
import { LikeButton } from "@/components/like-button";

export function PostCard({
  post,
  linkToPost = false,
}: {
  post: PersonaPost;
  linkToPost?: boolean;
}) {
  const author = findUser(post.authorId);
  if (!author) return null;
  return (
    <article className="py-5">
      <div className="flex items-center gap-2 text-sm text-stone-600">
        <Link href={`/profile/${author.id}`} className="font-semibold text-ink hover:underline">
          {author.id}
        </Link>
        {linkToPost ? (
          <Link href={`/post/${post.id}`} className="hover:underline">
            <time>{post.createdAt}</time>
          </Link>
        ) : (
          <time>{post.createdAt}</time>
        )}
      </div>
      {linkToPost ? (
        <Link href={`/post/${post.id}`} className="block py-3">
          <p className="leading-relaxed">{post.text}</p>
        </Link>
      ) : (
        <p className="py-3 leading-relaxed">{post.text}</p>
      )}
      <div className="flex gap-6 text-sm text-stone-600">
        <LikeButton count={post.likes} />
        <Link
          href={`/post/${post.id}`}
          className="inline-flex items-center gap-1 hover:text-accent"
          aria-label={`View ${post.replyIds.length} replies`}
        >
          <Icon name="reply" className="size-4" />
          <span>{post.replyIds.length}</span>
        </Link>
      </div>
    </article>
  );
}
