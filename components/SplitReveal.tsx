"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type SplitRevealProps = {
  text: string;
  className?: string;
  /** stagger between letters in ms */
  stagger?: number;
};

/**
 * Letter-by-letter entrance: each character rises and fades in sequence.
 * Letters are grouped into nowrap words so lines only ever break between
 * words, never mid-word. Respects prefers-reduced-motion (shows instantly)
 * and keeps the full text readable by assistive tech via aria-label.
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

  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {word.split("").map((ch, i) => {
              const n = letterIndex++;
              return (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(0.45em)",
                    transition: `opacity 0.45s ease ${n * stagger}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${n * stagger}ms`,
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
