"use client";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const reduceMotion = useReducedMotion();
  const offsets = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
    scale: { y: 0, x: 0, scale: .94 },
  };
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offsets[direction] }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: .62, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}
