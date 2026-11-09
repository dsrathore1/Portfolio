import { AnimatedNumber } from "@/components/MotionEffects";

export function MetricCard({ value, label, note }) {
  return (
    <div className="glass metric-card metric-card-motion">
      <div className="metric-value"><AnimatedNumber value={value} /></div>
      <div className="metric-label">{label}</div>
      {note && <div className="metric-note">{note}</div>}
    </div>
  );
}
