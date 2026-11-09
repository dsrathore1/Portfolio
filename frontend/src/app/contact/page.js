import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const subject = encodeURIComponent("Hello Digpal — let's connect");
  const body = encodeURIComponent("Hi Digpal,\n\nI came across your portfolio and would like to connect.\n\n");
  return (
    <div className="container">
      <section className="page-hero"><SectionHeading eyebrow="Get in touch" title={<>Have an idea? Let&apos;s <span className="accent">connect.</span></>} description="Interested in MLOps, information security, open source or engineering opportunities? Feel free to reach out."/></section>
      <section className="section-tight contact-layout">
        <div className="glass info-card">
          <h2>Contact details</h2>
          <div className="contact-item"><Mail/><div><strong>Email</strong><p className="muted" style={{fontSize:".82rem",margin:"3px 0"}}>{PROFILE.email}</p></div></div>
          <div className="contact-item"><Github/><div><strong>GitHub</strong><p className="muted" style={{fontSize:".82rem",margin:"3px 0"}}>github.com/dsrathore1</p></div><a className="text-link" href={PROFILE.github} target="_blank" rel="noreferrer"><ArrowUpRight size={15}/></a></div>
          <div className="contact-item"><Linkedin/><div><strong>LinkedIn</strong><p className="muted" style={{fontSize:".82rem",margin:"3px 0"}}>linkedin.com/in/dsrathore22</p></div><a className="text-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={15}/></a></div>
          <div className="contact-item"><MapPin/><div><strong>Academic affiliation</strong><p className="muted" style={{fontSize:".82rem",margin:"3px 0"}}>SVNIT Surat, Gujarat, India</p></div></div>
        </div>
        <div className="glass info-card">
          <p className="eyebrow">Email me</p>
          <h2>Start a conversation.</h2>
          <p className="muted">This button opens your default email application with a pre-filled subject and message. No form data is sent to a third-party service.</p>
          <a className="btn btn-primary" style={{marginTop:12}} href={`mailto:${PROFILE.email}?subject=${subject}&body=${body}`}>Compose email <Mail size={16}/><ArrowUpRight size={15}/></a>
        </div>
      </section>
    </div>
  );
}
