"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="container nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>DSR<span>.</span></Link>
        <div className="desktop-nav">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "active" : ""}`}>
              {item.label}
            </Link>
          ))}
        </div>
        <a className="nav-cta" href={`mailto:${PROFILE.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu container">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-link">{item.label}</Link>
          ))}
          <a className="mobile-link accent" href={`mailto:${PROFILE.email}`}>Email me ↗</a>
        </div>
      )}
    </header>
  );
}
