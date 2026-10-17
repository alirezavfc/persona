import Link from "next/link";
import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { Icon } from "@/components/icon";
import { findPost, findUser, repliesFor } from "@/lib/mock-data";
export const instant = false;

export default async function PostPage({ params }: PageProps<"/post/[id]">) {
  const { id } = await params;
  const post = findPost(id);
  if (!post)
    return (
      <AppShell>
        <div className="feed-column">
          <Link href="/home" className="back-link">
            <Icon name="arrow" className="back-icon" />
            Back to feed
          </Link>
          <section className="empty-state">
            <div className="avatar avatar-large">?</div>
            <h1>That post isn’t here</h1>
            <p>It may have been moved, or the link may be incomplete.</p>
            <Link className="primary-link" href="/home">
              Return to the feed
            </Link>
          </section>
        </div>
      </AppShell>
    );
  const author = findUser(post.authorId);
  const replies = repliesFor(post);
  return (
    <AppShell>
      <div className="feed-column">
        <Link href="/home" className="back-link">
          <Icon name="arrow" className="back-icon" />
          Feed
        </Link>
        <div className="detail-label">POST</div>
        <PostCard post={post} />
        {author && (
          <p className="detail-context">
            A note from <Link href={`/profile/${author.id}`}>{author.id}</Link>
          </p>
        )}
        <div className="section-heading replies-heading">
          <h2>Replies</h2>
          <span>{replies.length}</span>
        </div>
        {replies.length ? (
          <div className="feed-list">
            {replies.map((reply) => (
              <PostCard key={reply.id} post={reply} />
            ))}
          </div>
        ) : (
          <p className="no-replies">
            No replies yet. A little room for the first one.
          </p>
        )}
      </div>
    </AppShell>
  );
}
