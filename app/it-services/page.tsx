import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { pillars } from "@/content/site";

const tech = pillars.find((p) => p.id === "technology")!;

export const metadata: Metadata = {
  title: "IT Services Los Angeles",
  description:
    "Small business IT support in Los Angeles: network and hardware setup, cybersecurity strategy, data protection and backups, web design and development. Managed IT services by ADiT.",
  alternates: { canonical: "/it-services" },
};

export default function ITServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="Technology · led by Rafael Cordero"
        title="IT Services in Los Angeles."
        lede="The networks, hardware and systems your business runs on, set up properly, secured from day one, and looked after. Built right. Kept secure. Always running."
      />

      <div className="mt-14 space-y-6">
        {tech.groups.map((g, i) => (
          <Reveal key={g.name} delay={Math.min(i * 60, 180)}>
            <section
              aria-labelledby={`tech-${i}`}
              className="scroll-mt-32 rounded-3xl border border-ink/10 bg-ink/[0.025] p-7 sm:p-10 lg:p-12"
            >
              <h2
                id={`tech-${i}`}
                className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl"
              >
                {g.name}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
                {g.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-5 py-4"
                  >
                    <span aria-hidden="true" className="font-display font-bold text-ember">
                      →
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-paper sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Talk to the person doing the work.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-paper/70">
              No sales team, no ticket queue. You work directly with Rafael,
              from the first assessment to long after everything is running.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-14 shrink-0 items-center rounded-full bg-signal px-8 py-4 font-display text-base font-bold tracking-tight text-ink uppercase transition-transform hover:scale-[1.03]"
          >
            Book a free consultation
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
