import { ArrowUpRight, Code2 } from "lucide-react";
import { CODING_PLATFORMS, DSA_TOPICS } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Coding Journey" };

export default function CodingPage() {
  return (
    <div className="container">
      <section className="page-hero"><SectionHeading eyebrow="Problem solving" title={<>Think clearly. Solve <span className="accent">consistently.</span></>} description="I practice DSA and competitive programming across multiple platforms to strengthen algorithmic thinking, implementation skills and interview readiness."/></section>
      <section className="section-tight">
        <div className="metric-grid three">
          <div className="glass metric-card"><div className="metric-value">{CODING_PLATFORMS.length}</div><div className="metric-label">Practice platforms</div><div className="metric-note">Profiles and learning destinations</div></div>
          <div className="glass metric-card"><div className="metric-value">{DSA_TOPICS.length}</div><div className="metric-label">Core topic areas</div><div className="metric-note">Editable learning scope</div></div>
          <div className="glass metric-card"><div className="metric-value">Java</div><div className="metric-label">DSA language</div><div className="metric-note">Primary practice language</div></div>
        </div>
        <p className="muted" style={{fontSize:".76rem",marginTop:12}}>Solved counts, contest ratings and streaks are not displayed because they have not been verified through a reliable public data source.</p>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Practice profiles</p><h2 className="heading">Where I <span className="accent">practice.</span></h2></div>
        <div className="grid-auto">
          {CODING_PLATFORMS.map((platform, index) => <Reveal key={platform.name} delay={index * .06}><a className="glass card platform-card" href={platform.url} target="_blank" rel="noreferrer"><div><h3>{platform.name}</h3><p className="muted">{platform.focus}</p></div><ArrowUpRight className="accent" size={19}/></a></Reveal>)}
        </div>
      </section>
      <section className="section-tight">
        <div className="glass info-card">
          <p className="eyebrow">Learning map</p><h2 className="heading" style={{fontSize:"2.1rem"}}>Topics in <span className="accent">rotation.</span></h2>
          <div className="topic-wrap" style={{marginTop:22}}>{DSA_TOPICS.map((topic) => <span className="topic" key={topic}><Code2 size={13} style={{display:"inline",verticalAlign:"-2px",marginRight:6}}/>{topic}</span>)}</div>
        </div>
      </section>
    </div>
  );
}
