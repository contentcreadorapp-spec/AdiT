import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  lede?: string;
  /** Use level={1} for the page's main title so every page has exactly one h1. */
  level?: 1 | 2;
};

export default function SectionHeading({ kicker, title, lede, level = 2 }: SectionHeadingProps) {
  const TitleTag = level === 1 ? "h1" : "h2";
  return (
    <Reveal className="max-w-4xl">
      <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">{kicker}</p>
      <TitleTag className="mt-4 font-display text-4xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
        {title}
      </TitleTag>
      {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p> : null}
    </Reveal>
  );
}
