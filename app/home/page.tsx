import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/mock-data";

export default function FeedPage() {
  return (
    <AppShell active="Feed">
      <div className="feed-column">
        <header className="page-header">
          <div>
            <p className="eyebrow">A QUIETER KIND OF SOCIAL</p>
            <h1>Your feed</h1>
          </div>
          <span className="header-mark">p.</span>
        </header>
        <div className="feed-list">
          {posts
            .filter((post) => !post.replyTo)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </AppShell>
  );
}
