import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { pillars } from "@/content/site";

export const metadata: Metadata = {
  title: "IT & Marketing Services",
  description:
    "ADiT services in Los Angeles: IT support, cybersecurity, web design and development, plus digital marketing, SEO and branding. Two pillars, one team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="Services"
        title={
          <>
            Two pillars.
            <br />
            One team.
          </>
        }
        lede="Technology and marketing usually live in separate companies. Here they sit at the same table, which means your tech, your website, and your marketing actually work together."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.id} delay={i * 80}>
            <Link
              href={pillar.href}
              className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-ink/[0.025] p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(20,22,15,0.35)] sm:p-12"
            >
              <p className="font-mono text-xs tracking-[0.22em] text-ember uppercase">
                {pillar.label} · led by {pillar.lead}
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
                {pillar.label}
              </h2>
              <p className="mt-4 font-display text-xl font-bold">{pillar.tagline}</p>
              <ul className="mt-6 space-y-2.5 text-muted">
                {pillar.groups.map((g) => (
                  <li key={g.name} className="flex items-center gap-3">
                    <span aria-hidden="true" className="font-display font-bold text-ember">
                      →
                    </span>
                    {g.name}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 group-hover:text-ember">
                Explore {pillar.label} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-paper sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Not sure which one you need?
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-paper/70">
              Most projects touch both pillars. Tell us what&apos;s going on
              and we&apos;ll point you at the right starting place, honestly.
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
