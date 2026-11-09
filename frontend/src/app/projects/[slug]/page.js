import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/data/site";
import { getGithubPortfolio } from "@/lib/github";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  return { title: project?.title || "Project" };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();
  const github = await getGithubPortfolio();
  const repo = github.repositories?.find((item) => item.requestedName === project.repo);
  return (
    <div className="container">
      <section className="page-hero blog-article">
        <Link className="back-link" href="/projects"><ArrowLeft size={15}/> Back to projects</Link>
        <span className="pill">{project.category}</span>
        <h1>{project.title}</h1>
        <p className="muted">{project.summary}</p>
        <div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </section>
      <section className="section-tight blog-article">
        <div className="glass info-card">
          <h2>Overview</h2>
          <p className="muted">{project.description}</p>
          <h2 style={{marginTop:28}}>Highlights</h2>
          <ul className="detail-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="divider" style={{margin:"24px 0"}}/>
          {repo?.found ? <p className="muted">GitHub · {repo.stargazers_count} stars · {repo.forks_count} forks · {repo.language || "Language not specified"}</p> : <p className="muted">Live repository details are not currently available. Check the GitHub profile for the latest source.</p>}
          <a className="btn btn-primary" href={repo?.found ? repo.html_url : "https://github.com/dsrathore1"} target="_blank" rel="noreferrer">View repository <Github size={16}/><ArrowUpRight size={15}/></a>
        </div>
      </section>
    </div>
  );
}
