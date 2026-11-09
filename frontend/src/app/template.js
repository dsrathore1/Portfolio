import { PageTransition } from "@/components/MotionEffects";

export default function Template({ children }) {
  return <PageTransition>{children}</PageTransition>;
}
