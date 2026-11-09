import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, GraduationCap, Terminal } from "lucide-react";
import { PROFILE, PROJECTS, CODING_PLATFORMS } from "@/data/site";
import { getGithubPortfolio } from "@/lib/github";
import { getHashnodePosts } from "@/lib/hashnode";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { HeroVisual } from "@/components/MotionEffects";

export default async function HomePage() {
  const [github, hashnode] = await Promise.all([getGithubPortfolio(), getHashnodePosts()]);
  const repoByName = new Map((github.repositories || []).map((repo) => [repo.requestedName, repo]));
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-copy-column">
            <Reveal direction="left"><p className="eyebrow hero-kicker"><span className="status-dot" /> M.Tech · SVNIT Surat · Open to learning opportunities</p></Reveal>
            <Reveal direction="left" delay={.08}><h1 className="hero-title">Hello, I&apos;m<br />Digpal Singh<br /><span className="name-highlight">Rathore.</span></h1></Reveal>
            <Reveal direction="left" delay={.16}><p className="muted hero-copy">{PROFILE.headline} {PROFILE.summary}</p></Reveal>
            <Reveal direction="left" delay={.23}><div className="hero-actions">
              <Link className="btn btn-primary" href="/projects">Explore my work <ArrowUpRight size={16} /></Link>
              <Link className="btn btn-secondary" href="/about">More about me <ArrowRight size={16} /></Link>
            </div></Reveal>
          </div>
          <div className="hero-art-column"><HeroVisual /><Reveal className="glass hero-side" delay={.2}>
            <p className="focus-label">CURRENT FOCUS</p>
            <h2 className="focus-title">MLOps · DevOps · Information Security</h2>
            <p className="muted">Learning, building, experimenting and solving problems — with a focus on reliable and secure intelligent systems.</p>
            <div className="focus-line"><span>Education</span><strong>M.Tech · SVNIT</strong></div>
            <div className="focus-line"><span>Primary direction</span><strong>MLOps Engineering</strong></div>
            <div className="focus-line"><span>Problem solving</span><strong>5 practice platforms</strong></div>
            <div className="focus-line"><span>Writing</span><strong>Hashnode</strong></div>
          </Reveal></div>
        </div>
      </section>

      <div className="motion-marquee" aria-label="Build, experiment, iterate, deploy, secure">
        <div className="marquee-track"><span>BUILD <b>✳</b> EXPERIMENT <b>✳</b> ITERATE <b>✳</b> DEPLOY <b>✳</b> SECURE <b>✳</b> LEARN <b>✳</b> </span><span aria-hidden="true">BUILD <b>✳</b> EXPERIMENT <b>✳</b> ITERATE <b>✳</b> DEPLOY <b>✳</b> SECURE <b>✳</b> LEARN <b>✳</b> </span></div>
      </div>

      <section className="container section-tight">
        <div className="section-topline">
          <div><p className="eyebrow">A quick snapshot</p><h2 className="heading" style={{fontSize:"2rem"}}>Portfolio <span className="accent">metrics.</span></h2></div>
          <span className="muted" style={{fontSize:".76rem"}}>Live where supported · refreshed periodically</span>
        </div>
        <div className="metric-grid">
          <MetricCard value={github.metrics?.foundCount ?? "—"} label="Featured repos found" note="Live GitHub lookup" />
          <MetricCard value={github.metrics?.stars ?? "—"} label="GitHub stars" note="Across matched repositories" />
          <MetricCard value={hashnode.ok ? hashnode.count : "—"} label="Published articles" note={hashnode.ok ? "Hashnode publication" : "Hashnode setup may be needed"} />
          <MetricCard value={CODING_PLATFORMS.length} label="Coding platforms" note="Profiles linked below" />
        </div>
      </section>

      <section className="container section">
        <div className="section-topline">
          <div><p className="eyebrow">Selected work</p><h2 className="heading" style={{fontSize:"2.4rem"}}>Things I&apos;ve been <span className="accent">building.</span></h2></div>
          <Link className="text-link" href="/projects">All projects <ArrowUpRight size={16}/></Link>
        </div>
        <div className="grid-auto">
          {featured.map((project) => <Reveal key={project.slug}><ProjectCard project={project} repository={repoByName.get(project.repo)} /></Reveal>)}
        </div>
      </section>

      <section className="container section-tight">
        <Reveal className="glass info-card" direction="scale">
          <div className="two-col">
            <div><p className="eyebrow">Beyond projects</p><h2 className="heading" style={{fontSize:"2rem"}}>Curious by default.<br/><span className="accent">Consistent by design.</span></h2><p className="muted">I practice data structures and algorithms across online judges while developing a stronger foundation in systems, ML engineering and cloud technologies.</p><Link className="text-link" href="/coding">Explore my coding journey <ArrowUpRight size={15}/></Link></div>
            <div>
              <div className="focus-line"><span><Terminal size={15}/> DSA practice</span><strong>5 platforms</strong></div>
              <div className="focus-line"><span><GraduationCap size={15}/> Academic focus</span><strong>Information Security</strong></div>
              <div className="focus-line"><span><Github size={15}/> Open source</span><strong>GSoC target</strong></div>
              <div className="focus-line"><span>Cloud learning</span><strong>AWS certification goals</strong></div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
