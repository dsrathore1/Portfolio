import { Target, Award, GitPullRequest } from "lucide-react";
import { GOALS } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Achievements & Goals" };

export default function AchievementsPage() {
  return (
    <div className="container">
      <section className="page-hero"><SectionHeading eyebrow="Milestones & direction" title={<>Progress is a <span className="accent">practice.</span></>} description="This page separates completed achievements from future targets. No certification or award is presented as earned unless it has actually been completed."/></section>
      <section className="section-tight">
        <div className="two-col">
          <Reveal className="glass info-card"><Award className="accent" size={25}/>
            <h2>Verified achievements</h2>
            <p className="muted">No formal certifications or awards have been added yet. This section is ready for verified milestones as they are earned.</p>
            <span className="pill">Ready for updates</span>
          </Reveal>
          <Reveal className="glass info-card" delay={.1}>
            <GitPullRequest className="accent" size={25}/>
            <h2>Open-source direction</h2>
            <p className="muted">Building toward meaningful open-source contributions and a future Google Summer of Code application.</p>
            <span className="pill">Growth goal</span>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Next milestones</p><h2 className="heading">Targets on the <span className="accent">roadmap.</span></h2></div>
        <Reveal className="glass info-card" direction="scale">
          {GOALS.map((goal) => <div className="goal-row" key={goal.title}><div><strong>{goal.title}</strong><p className="muted" style={{fontSize:".8rem",margin:"5px 0 0"}}>{goal.type}</p></div><span className="goal-status">{goal.status}</span></div>)}
        </Reveal>
        <p className="muted" style={{fontSize:".78rem",marginTop:14}}><Target size={14} style={{display:"inline",verticalAlign:"-2px"}}/> Status labels represent personal targets, not certification progress or application outcomes.</p>
      </section>
    </div>
  );
}
