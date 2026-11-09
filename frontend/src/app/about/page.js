import { GraduationCap, ShieldCheck, Cloud, BrainCircuit } from "lucide-react";
import { PROFILE, SKILLS } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-hero"><SectionHeading eyebrow="A little about me" title={<>Engineering curiosity into <span className="accent">capability.</span></>} description="My academic foundation is in information security and privacy. My broader interests sit at the intersection of machine learning, MLOps, cloud and software engineering." /></section>
      <section className="section-tight">
        <div className="two-col">
          <Reveal className="glass info-card">
            <GraduationCap className="accent" size={25}/>
            <h2>Education</h2>
            <h3>{PROFILE.degree}</h3>
            <p className="muted">{PROFILE.university}</p>
            <span className="pill">Currently pursuing</span>
          </Reveal>
          <Reveal className="glass info-card">
            <BrainCircuit className="accent" size={25}/>
            <h2>Professional direction</h2>
            <p className="muted">Aspiring MLOps engineer interested in taking machine-learning systems beyond notebooks — toward reproducible experiments, reliable deployment, monitoring and secure infrastructure.</p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="What I explore" title={<>Technical <span className="accent">toolkit.</span></>} description="A working snapshot of technologies and concepts I have explored. This list is editable and should evolve with hands-on experience."/>
        <div className="grid-auto">
          {SKILLS.map((group, index) => {
            const Icon = [BrainCircuit, ShieldCheck, Cloud, GraduationCap][index];
            return <Reveal key={group.group} className="glass info-card" delay={index * .07}>
              <Icon className="accent" size={23}/>
              <h2>{group.group}</h2>
              <div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </Reveal>;
          })}
        </div>
      </section>
      <section className="section-tight">
        <div className="glass info-card">
          <p className="eyebrow">My approach</p>
          <h2 className="heading" style={{fontSize:"2rem"}}>Learn deeply. Build practically. <span className="accent">Improve continuously.</span></h2>
          <p className="muted">I value fundamentals, documented experiments, thoughtful engineering trade-offs and projects that connect academic concepts with practical systems.</p>
        </div>
      </section>
    </div>
  );
}
