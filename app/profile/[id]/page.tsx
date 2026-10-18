import Link from "next/link";
import { AppShell } from "@/components/navigation";
import { PostCard } from "@/components/post-card";
import { Icon } from "@/components/icon";
import { findUser, posts } from "@/lib/mock-data";
export const instant = false;

export default async function ProfilePage({
  params,
}: PageProps<"/profile/[id]">) {
  const { id } = await params;
  const user = findUser(decodeURIComponent(id));
  if (!user)
    return (
      <AppShell>
        <div className="feed-column">
          <Link href="/home" className="back-link">
            <Icon name="arrow" className="back-icon" />
            Back to feed
          </Link>
          <section className="empty-state">
            <div className="avatar avatar-large">?</div>
            <h1>We couldn’t find that profile</h1>
            <p>There’s no Persona user with that ID.</p>
            <Link className="primary-link" href="/home">
              Return to the feed
            </Link>
          </section>
        </div>
      </AppShell>
    );
  const initials = `P${user.id}`;
  return (
    <AppShell>
      <div className="feed-column">
        <Link href="/home" className="back-link">
          <Icon name="arrow" className="back-icon" />
          Feed
        </Link>
        <section className="profile-panel">
          <div className="profile-avatar">{initials}</div>
          <div className="profile-info">
            <p className="eyebrow">PERSONA PROFILE</p>
            <h1>{user.id}</h1>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-stats">
              <span>
                <strong>{user.followers.toLocaleString()}</strong> followers
              </span>
              <span>
                <strong>{user.following.toLocaleString()}</strong> following
              </span>
            </div>
          </div>
        </section>
        <div className="section-heading">
          <h2>Posts</h2>
          <span>
            {
              posts.filter((post) => post.authorId === user.id && !post.replyTo)
                .length
            }{" "}
            notes
          </span>
        </div>
        <div className="feed-list">
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
