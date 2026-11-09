"use client";

import { animate, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Braces, Cloud, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: .001 });
  return (
    <>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-grid" />
      <motion.div className="ambient-orb orb-one" animate={reduceMotion ? undefined : { x: [0, 35, -15, 0], y: [0, -25, 20, 0], scale: [1, 1.12, .94, 1] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="ambient-orb orb-two" animate={reduceMotion ? undefined : { x: [0, -28, 18, 0], y: [0, 24, -18, 0] }} transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }} />
      <div className="ambient-noise" />
    </div>
    </>
  );
}

export function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const float = reduceMotion ? {} : { y: [0, -12, 0] };
  return (
    <div className="hero-visual-wrap" aria-label="Animated illustration of software, cloud and security engineering">
      <motion.div className="hero-orbit orbit-a" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} />
      <motion.div className="hero-orbit orbit-b" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
      <motion.div className="hero-core" animate={float} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="core-glow" />
        <div className="core-icon"><Cpu size={44} strokeWidth={1.35} /></div>
        <span className="core-caption">BUILD · SECURE · SHIP</span>
      </motion.div>
      <motion.div className="float-chip chip-code" animate={reduceMotion ? undefined : { y: [0, -8, 0], x: [0, 4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><Braces size={17}/><span>Engineering</span></motion.div>
      <motion.div className="float-chip chip-cloud" animate={reduceMotion ? undefined : { y: [0, 9, 0], x: [0, -4, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}><Cloud size={17}/><span>MLOps & Cloud</span></motion.div>
      <motion.div className="float-chip chip-shield" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><ShieldCheck size={17}/><span>Security first</span></motion.div>
      <div className="visual-spark spark-one"><Sparkles size={15}/></div>
      <div className="visual-spark spark-two">✳</div>
    </div>
  );
}

function CountUp({ target }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-IN"));
  useEffect(() => {
    const controls = animate(count, target, { duration: 1.35, ease: "easeOut" });
    return controls.stop;
  }, [count, target]);
  return <motion.span>{rounded}</motion.span>;
}

export function AnimatedNumber({ value }) {
  const reduceMotion = useReducedMotion();
  const numeric = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numeric)) return <motion.span initial={reduceMotion ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{value}</motion.span>;
  return <motion.span initial={reduceMotion ? false : { opacity: 0, y: 10, scale: .92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 140, damping: 16 }}><CountUp target={numeric} /></motion.span>;
}
