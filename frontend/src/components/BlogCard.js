import { ArrowUpRight, Clock3 } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }) {
  return (
    <article className="glass card blog-card">
      <div className="blog-meta"><span>{formatDate(post.publishedAt)}</span><span><Clock3 size={13} /> {post.readTimeInMinutes || "—"} min read</span></div>
      <h2>{post.title}</h2>
      <p className="muted">{post.brief || "Read the full article on Hashnode."}</p>
      <div className="tag-list">{(post.tags || []).slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <a className="text-link" href={post.url} target="_blank" rel="noreferrer">Read on Hashnode <ArrowUpRight size={15} /></a>
    </article>
  );
}
