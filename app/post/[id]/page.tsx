import Link from "next/link";
import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { Icon } from "@/components/icon";
import { findPost, findUser, posts, repliesFor } from "@/lib/mock-data";

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
        <div className="mx-auto max-w-[690px] pt-[54px] pb-[84px] max-[760px]:pt-8">
          <Link href="/home" className="mb-[25px] inline-flex items-center gap-[9px] text-[13px] text-[#6f7774] hover:text-accent">
            <Icon name="arrow" className="size-[17px] rotate-180" />
            Back to feed
          </Link>
          <section className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="grid size-14 place-items-center rounded-full border border-green-border-dark bg-gradient-to-br from-green-pale to-green-light font-serif text-xl text-[#426b62]">?</div>
            <h1 className="mt-5 mb-2 font-serif text-[25px] font-medium">That post isn’t here</h1>
            <p className="mb-[22px] text-sm text-[#848b88]">It may have been moved, or the link may be incomplete.</p>
            <Link className="rounded-[9px] bg-accent px-[15px] py-2.5 text-[13px] text-white" href="/home">
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
      <div className="mx-auto max-w-[690px] pt-[54px] pb-[84px] max-[760px]:pt-8">
        <Link href="/home" className="mb-[25px] inline-flex items-center gap-[9px] text-[13px] text-[#6f7774] hover:text-accent">
          <Icon name="arrow" className="size-[17px] rotate-180" />
          Feed
        </Link>
        <div className="pt-px pb-[13px] text-[10px] font-bold tracking-[1.2px] text-[#999f9b]">POST</div>
        <div className="border-t border-line [&>article]:pt-6">
          <PostCard post={post} />
        </div>
        {author && (
          <p className="mt-[13px] mb-8 ml-14 text-xs text-[#89908d]">
            A note from <Link className="font-semibold text-accent-muted hover:text-accent hover:underline hover:underline-offset-[3px]" href={`/profile/${author.id}`}>{author.id}</Link>
          </p>
        )}
        <div className="flex items-baseline justify-between border-t border-line pt-[26px] pb-[15px]">
          <h2 className="m-0 font-serif text-[19px] font-medium">Replies</h2>
          <span className="text-xs text-[#929795]">{replies.length}</span>
        </div>
        {replies.length ? (
          <div className="border-t border-line">
            {replies.map((reply) => (
              <PostCard key={reply.id} post={reply} />
            ))}
          </div>
        ) : (
          <p className="m-0 px-0.5 py-5 text-[13px] text-[#909693]">
            No replies yet. A little room for the first one.
          </p>
        )}
      </div>
    </AppShell>
  );
}
