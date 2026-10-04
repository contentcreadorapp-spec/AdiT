import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Work | Web & IT Projects in Los Angeles",
  description:
    "Selected work by ADiT: real websites and technology projects for real businesses: restaurants, nonprofits, consultants, and contractors in Los Angeles and beyond.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="Selected work"
        title={
          <>
            Work that
            <br />
            speaks first.
          </>
        }
        lede="A few of the sites we've designed and built. Each one is a real business with real visitors. Click through and see for yourself."
      />
      <div className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 90}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-16 border-t border-ink/10 pt-8 text-center font-mono text-xs tracking-[0.18em] text-muted uppercase">
          More in the pipeline, including IT infrastructure and digital signage projects.
        </p>
      </Reveal>
    </div>
  );
}
