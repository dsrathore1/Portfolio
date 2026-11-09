import { getHashnodePosts } from "@/lib/hashnode";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { PROFILE } from "@/data/site";
import { ArrowUpRight, BookOpen, Layers3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Blogs" };

export default async function BlogsPage() {
  const result = await getHashnodePosts();
  const publications = (result.publications || []).filter((publication) => publication.ok);
  const allPosts = result.posts || [];

  return (
    <div className="container">
      <section className="page-hero">
        <SectionHeading
          eyebrow="Notes from the learning journey"
          title={<>Ideas, experiments & <span className="accent">write-ups.</span></>}
          description="Articles from all your public Hashnode publications, collected in one place and sorted by latest publication date."
        />
      </section>

      <section className="section-tight">
        <div className="grid-auto" style={{ marginBottom: 28 }}>
          <div className="glass card">
            <div className="eyebrow"><Layers3 size={14} /> Publications</div>
            <h2 className="heading" style={{ fontSize: "2rem" }}>{publications.length}</h2>
            <p className="muted">Public feeds connected</p>
          </div>
          <div className="glass card">
            <div className="eyebrow"><BookOpen size={14} /> Articles</div>
            <h2 className="heading" style={{ fontSize: "2rem" }}>{allPosts.length}</h2>
            <p className="muted">Articles discovered across feeds</p>
          </div>
        </div>

        <div className="section-topline">
          <div>
            <p className="eyebrow">Your writing</p>
            <h2 className="heading" style={{ fontSize: "2rem" }}>All publications</h2>
          </div>
          <a className="text-link" href={PROFILE.hashnode} target="_blank" rel="noreferrer">
            Open Hashnode profile <ArrowUpRight size={15} />
          </a>
        </div>

        {publications.length === 0 && (
          <div className="empty-state" style={{ marginBottom: 24 }}>
            {result.message} Your Hashnode profile remains linked above.
          </div>
        )}

        {publications.map((publication) => (
          <section className="section-tight" key={publication.host}>
            <div className="section-topline">
              <div>
                <p className="eyebrow">{publication.host}</p>
                <h2 className="heading" style={{ fontSize: "1.65rem" }}>{publication.publicationTitle}</h2>
                <p className="muted">{publication.count} {publication.count === 1 ? "article" : "articles"}</p>
              </div>
              <a className="text-link" href={publication.publicationUrl} target="_blank" rel="noreferrer">
                Visit publication <ArrowUpRight size={15} />
              </a>
            </div>
            {publication.posts.length ? (
              <div className="grid-auto">
                {publication.posts.map((post, index) => (
                  <Reveal key={`${publication.host}-${post.id}`} delay={index * 0.05}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="empty-state">{publication.message || "No public articles in this publication yet."}</div>
            )}
          </section>
        ))}

        {allPosts.length > 0 && (
          <section className="section-tight">
            <div className="section-topline">
              <div>
                <p className="eyebrow">Combined feed</p>
                <h2 className="heading" style={{ fontSize: "2rem" }}>Latest across all publications</h2>
              </div>
              <span className="muted">{allPosts.length} articles · newest first</span>
            </div>
            <div className="grid-auto">
              {allPosts.map((post, index) => (
                <Reveal key={`all-${post.publicationHost}-${post.id}`} delay={index * 0.035}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
