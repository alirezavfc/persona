import Link from "next/link";
import type { PersonaPost } from "@/lib/types";
import { findUser } from "@/lib/mock-data";
import { Icon } from "@/components/icon";
import { LikeButton } from "@/components/like-button";

export function PostCard({ post }: { post: PersonaPost }) {
  const author = findUser(post.authorId);
  if (!author) return null;
  return (
    <article className="post-card">
      <div className="avatar" aria-hidden="true">
        P
      </div>
      <div className="post-content">
        <div className="post-meta">
          <Link href={`/profile/${author.id}`} className="author-name">
            {author.id}
          </Link>
          <span className="meta-dot">·</span>
          <time>{post.createdAt}</time>
        </div>
        <Link href={`/post/${post.id}`} className="post-copy-link">
          <p className="post-copy">{post.text}</p>
        </Link>
        <div className="post-actions">
          <LikeButton count={post.likes} />
          <Link
            href={`/post/${post.id}`}
            className="post-action"
            aria-label={`View ${post.replyIds.length} replies`}
          >
            <Icon name="reply" className="action-icon" />
            <span>{post.replyIds.length}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
