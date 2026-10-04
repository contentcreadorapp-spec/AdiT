"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/site";

export default function ProjectCard({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The screenshot may fail before React hydrates and attaches onError
  // (SSR markup starts loading immediately). Check on mount as a backstop.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`${project.name} — visit site (opens in a new tab)`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.04]">
        {/* Honest typographic placeholder shown until (or if) the screenshot loads */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <span className="text-center font-display text-3xl font-bold tracking-tight text-ink/15 uppercase sm:text-4xl">
            {project.name}
          </span>
        </div>
        {!imgFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={project.image}
            alt={`Screenshot of the ${project.name} website`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/95 font-display text-lg font-bold text-ink opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          ↗
        </span>
      </div>
      <div className="mt-5">
        <h3 className="font-display text-2xl font-bold tracking-tight">{project.name}</h3>
        <p className="mt-2 leading-relaxed text-muted">{project.blurb}</p>
        <p className="mt-3 font-mono text-xs tracking-[0.16em] text-muted uppercase">
          {project.disciplines.join(" · ")} · {project.domain}
        </p>
      </div>
    </a>
  );
}
