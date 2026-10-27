import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/mock-data";

export default function FeedPage() {
  return (
    <AppShell active="Feed">
      <div className="mx-auto max-w-[690px] pt-[54px] pb-[84px] max-[760px]:pt-8">
        <header className="flex items-end justify-between border-b border-line pb-[25px]">
          <div>
            <p className="mb-[9px] text-[10px] leading-[1.4] font-bold tracking-[1.25px] text-[#8b918d]">A QUIETER KIND OF SOCIAL</p>
            <h1 className="m-0 font-serif text-[34px] font-medium tracking-[-1px] max-[760px]:text-[30px]">Your feed</h1>
          </div>
          <span className="font-serif text-[34px] font-semibold tracking-[-4px] text-[#d4dfdb]">p.</span>
        </header>
        <div className="border-t border-line">
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
