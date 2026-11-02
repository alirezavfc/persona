import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/mock-data";

export default function FeedPage() {
  return (
    <AppShell active="Feed">
      <header className="mb-4 border-b border-line pb-4">
        <h1 className="font-serif text-3xl">Your feed</h1>
      </header>
      <div className="divide-y divide-line">
        {posts
          .filter((post) => !post.replyTo)
          .map((post) => (
            <PostCard key={post.id} post={post} linkToPost />
          ))}
      </div>
    </AppShell>
  );
}
