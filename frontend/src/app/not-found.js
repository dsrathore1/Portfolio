import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section">
      <p className="eyebrow">404 · Not found</p>
      <h1 className="heading">This page took a <span className="accent">wrong turn.</span></h1>
      <p className="muted">The page may have moved or does not exist.</p>
      <Link className="btn btn-primary" href="/">Return home</Link>
    </div>
  );
}
