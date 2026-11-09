export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="heading">{title}</h1>
      {description && <p className="muted section-description">{description}</p>}
    </div>
  );
}
