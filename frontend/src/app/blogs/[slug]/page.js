import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { getHashnodePostBySlug } from "@/lib/hashnode";
import { PROFILE } from "@/data/site";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getHashnodePostBySlug(slug);
  if (!post) notFound();
  return (
    <div className="container">
      <section className="page-hero blog-article">
        <Link className="back-link" href="/blogs"><ArrowLeft size={15}/> Back to blogs</Link>
        <p className="eyebrow">Hashnode article</p>
        <h1>{post.title}</h1>
        <div className="blog-meta"><span>{formatDate(post.publishedAt)}</span><span><Clock3 size={13}/> {post.readTimeInMinutes || "—"} min read</span></div>
        <p className="muted">{post.brief}</p>
        <div className="tag-list">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </section>
      <section className="section-tight blog-article">
        <div className="glass info-card">
          <h2>Continue reading</h2>
          <p className="muted">The full article is hosted on Hashnode. Open the original post to read the complete content and join the discussion.</p>
          <a className="btn btn-primary" href={post.url || PROFILE.hashnode} target="_blank" rel="noreferrer">Read full article <ArrowUpRight size={16}/></a>
        </div>
      </section>
    </div>
  );
}
