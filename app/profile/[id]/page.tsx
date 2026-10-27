import Link from "next/link";
import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { Icon } from "@/components/icon";
import { findUser, posts, users } from "@/lib/mock-data";

export function generateStaticParams() {
  return users.map((user) => ({
    id: user.id,
  }));
}

export default async function ProfilePage({
  params,
}: PageProps<"/profile/[id]">) {
  const { id } = await params;
  const user = findUser(decodeURIComponent(id));
  if (!user)
    return (
      <AppShell>
        <div className="mx-auto max-w-[690px] pt-[54px] pb-[84px] max-[760px]:pt-8">
          <Link href="/home" className="mb-[25px] inline-flex items-center gap-[9px] text-[13px] text-[#6f7774] hover:text-accent">
            <Icon name="arrow" className="size-[17px] rotate-180" />
            Back to feed
          </Link>
          <section className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="grid size-14 place-items-center rounded-full border border-green-border-dark bg-gradient-to-br from-green-pale to-green-light font-serif text-xl text-[#426b62]">?</div>
            <h1 className="mt-5 mb-2 font-serif text-[25px] font-medium">We couldn’t find that profile</h1>
            <p className="mb-[22px] text-sm text-[#848b88]">There’s no Persona user with that ID.</p>
            <Link className="rounded-[9px] bg-accent px-[15px] py-2.5 text-[13px] text-white" href="/home">
              Return to the feed
            </Link>
          </section>
        </div>
      </AppShell>
    );
  const initials = `P${user.id}`;
  return (
    <AppShell>
      <div className="mx-auto max-w-[690px] pt-[54px] pb-[84px] max-[760px]:pt-8">
        <Link href="/home" className="mb-[25px] inline-flex items-center gap-[9px] text-[13px] text-[#6f7774] hover:text-accent">
          <Icon name="arrow" className="size-[17px] rotate-180" />
          Feed
        </Link>
        <section className="grid grid-cols-[86px_1fr] items-start gap-[23px] border-b border-line pt-[31px] pb-[29px] max-[760px]:grid-cols-[66px_1fr] max-[760px]:gap-4">
          <div className="grid size-[82px] place-items-center rounded-full border border-[#d9e5df] bg-[radial-gradient(circle_at_36%_30%,#fbfdfb,#dce9e2)] font-serif text-2xl text-[#416b61] shadow-[inset_0_1px_3px_#fff] max-[760px]:size-16 max-[760px]:text-xl">{initials}</div>
          <div>
            <p className="mb-[9px] text-[10px] leading-[1.4] font-bold tracking-[1.25px] text-[#8b918d]">PERSONA PROFILE</p>
            <h1 className="m-0 font-serif text-[30px] font-medium tracking-[-0.8px]">{user.id}</h1>
            <p className="m-0 max-w-[460px] text-sm leading-[1.6] text-text-mid">{user.bio}</p>
            <div className="mt-[18px] flex gap-[22px] text-xs text-[#858a89]">
              <span>
                <strong className="font-[650] text-[#33393a]">
                  {user.followers.toLocaleString()}
                </strong>{" "}
                followers
              </span>
              <span>
                <strong className="font-[650] text-[#33393a]">
                  {user.following.toLocaleString()}
                </strong>{" "}
                following
              </span>
            </div>
          </div>
        </section>
        <div className="flex items-baseline justify-between pt-[26px] pb-[15px]">
          <h2 className="m-0 font-serif text-[19px] font-medium">Posts</h2>
          <span className="text-xs text-[#929795]">
            {
              posts.filter((post) => post.authorId === user.id && !post.replyTo)
                .length
            }{" "}
            notes
          </span>
        </div>
        <div className="border-t border-line">
          {posts
            .filter((post) => post.authorId === user.id && !post.replyTo)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </AppShell>
  );
}
