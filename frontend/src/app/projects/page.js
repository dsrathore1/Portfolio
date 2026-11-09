import { PROJECTS } from "@/data/site";
import { getGithubPortfolio } from "@/lib/github";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const github = await getGithubPortfolio();
  const repoByName = new Map((github.repositories || []).map((repo) => [repo.requestedName, repo]));
  return (
    <div className="container">
      <section className="page-hero"><SectionHeading eyebrow="Selected work" title={<>Projects built through <span className="accent">experimentation.</span></>} description="A curated selection across MLOps, machine learning, information security and DevSecOps. Repository metrics are fetched from GitHub when available."/></section>
      <section className="section-tight">
        {github.ok ? <p className="muted" style={{fontSize:".8rem",marginBottom:20}}>GitHub: {github.metrics.foundCount} of {github.metrics.selectedCount} configured repositories matched · {github.metrics.stars} stars · {github.metrics.forks} forks.</p> : <div className="empty-state" style={{marginBottom:20}}>{github.message} Project summaries remain visible; live repository metrics will appear when GitHub is reachable.</div>}
        <div className="grid-auto">
          {PROJECTS.map((project, index) => <Reveal key={project.slug} delay={index * .07}><ProjectCard project={project} repository={repoByName.get(project.repo)} /></Reveal>)}
        </div>
      </section>
    </div>
  );
}
