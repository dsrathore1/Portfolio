import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="brand">DSR<span>.</span></Link>
          <p className="muted footer-copy">Building, learning and sharing — one iteration at a time.</p>
        </div>
        <div className="socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18} /></a>
          <a href={PROFILE.hashnode} target="_blank" rel="noreferrer" aria-label="Hashnode"><ArrowUpRight size={18} /></a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Digpal Singh Rathore. Built with curiosity.</p>
      </div>
    </footer>
  );
}
