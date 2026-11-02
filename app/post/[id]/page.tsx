import Link from "next/link";
import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { findPost, posts, repliesFor } from "@/lib/mock-data";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: PageProps<"/post/[id]">) {
  const { id } = await params;
  const post = findPost(id);
  if (!post)
    return (
      <AppShell>
        <Link href="/home" className="text-sm text-accent hover:underline">
          Back to feed
        </Link>
        <section className="py-16 text-center">
          <h1 className="mb-2 font-serif text-2xl">That post isn’t here</h1>
          <p className="mb-4 text-sm text-stone-600">
            It may have been moved, or the link may be incomplete.
          </p>
          <Link className="text-sm text-accent hover:underline" href="/home">
            Return to the feed
          </Link>
        </section>
      </AppShell>
    );
  const replies = repliesFor(post);
  return (
    <AppShell>
      <Link href="/home" className="text-sm text-accent hover:underline">
        Back to feed
      </Link>
      <h1 className="my-6 font-serif text-2xl">Post</h1>
      <PostCard post={post} />
      <input
        aria-label="Write a reply"
        className="my-4 w-full rounded border border-line bg-white px-3 py-2 text-sm"
        placeholder="Write a reply..."
        type="text"
      />
      <section>
        <div className="flex justify-between py-3">
          <h2 className="font-serif text-xl">Replies</h2>
          <span className="text-sm text-stone-600">{replies.length}</span>
        </div>
        {replies.length ? (
          <div className="divide-y divide-line">
            {replies.map((reply) => (
              <PostCard key={reply.id} post={reply} />
            ))}
          </div>
        ) : (
          <p className="py-5 text-sm text-stone-600">
            No replies yet. A little room for the first one.
          </p>
        )}
      </section>
    </AppShell>
  );
}
