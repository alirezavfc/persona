import Link from "next/link";
import { PostCard } from "@/components/post-card";
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
      <>
        <Link href="/home" className="text-sm text-accent hover:underline">
          Back to feed
        </Link>
        <section className="py-16 text-center">
          <h1 className="mb-2 font-serif text-2xl">
            We couldn’t find that profile
          </h1>
          <p className="mb-4 text-sm text-stone-600">
            There’s no Persona user with that ID.
          </p>
          <Link className="text-sm text-accent hover:underline" href="/home">
            Return to the feed
          </Link>
        </section>
      </>
    );
  return (
    <>
      <Link href="/home" className="text-sm text-accent hover:underline">
        Back to feed
      </Link>
      <section className="my-6 border-b border-line pb-6">
        <h1 className="mb-2 font-serif text-2xl">{user.id}</h1>
        <p className="mb-4 text-sm text-stone-600">{user.bio}</p>
        <div className="flex gap-4 text-sm text-stone-600">
          <span>
            <strong className="text-ink">
              {user.followers.toLocaleString()}
            </strong>{" "}
            followers
          </span>
          <span>
            <strong className="text-ink">
              {user.following.toLocaleString()}
            </strong>{" "}
            following
          </span>
        </div>
      </section>
      <div className="flex justify-between py-3">
        <h2 className="font-serif text-xl">Posts</h2>
        <span className="text-sm text-stone-600">
          {
            posts.filter((post) => post.authorId === user.id && !post.replyTo)
              .length
          }{" "}
          notes
        </span>
      </div>
      <div className="divide-y divide-line">
        {posts
          .filter((post) => post.authorId === user.id && !post.replyTo)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </>
  );
}
