import Link from "next/link";
import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";
import { compactNumber, formatDate } from "@/lib/utils";

export function ProjectCard({ project, repository }) {
  const found = repository?.found;
  const repoUrl = found ? repository.html_url : `https://github.com/dsrathore1`;
  return (
    <article className="glass card project-card">
      <div className="project-topline">
        <span className="pill">{project.category}</span>
        <Github size={19} className="subtle-icon" />
      </div>
      <h2>{project.title}</h2>
      <p className="muted">{project.summary}</p>
      <div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      {found ? (
        <div className="repo-stats">
          <span><Star size={14} /> {compactNumber(repository.stargazers_count)}</span>
          <span><GitFork size={14} /> {compactNumber(repository.forks_count)}</span>
          <span>{repository.language || "Multiple"}</span>
          <span>Updated {formatDate(repository.updated_at)}</span>
        </div>
      ) : (
        <p className="metric-note">Repository match pending — check repository name in configuration.</p>
      )}
      <div className="project-actions">
        <Link className="text-link" href={`/projects/${project.slug}`}>Project details <ArrowUpRight size={15} /></Link>
        <a className="text-link" href={repoUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
      </div>
    </article>
  );
}
