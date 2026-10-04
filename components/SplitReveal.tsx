"use client";

import { useEffect, useRef, useState } from "react";

type SplitRevealProps = {
  text: string;
  className?: string;
  /** stagger between letters in ms */
  stagger?: number;
};

/**
 * Letter-by-letter entrance: each character rises and fades in sequence.
 * Respects prefers-reduced-motion (shows instantly) and keeps the full
 * text readable by assistive tech via aria-label.
 */
export default function SplitReveal({ text, className, stagger = 26 }: SplitRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // slight beat so it plays after the section reveal starts
          const t = window.setTimeout(() => setVisible(true), 120);
          io.disconnect();
          return () => window.clearTimeout(t);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(0.45em)",
            transition: `opacity 0.45s ease ${i * stagger}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * stagger}ms`,
          }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
