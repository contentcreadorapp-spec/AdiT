import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services | IT, Cybersecurity, Web Development & Design in Los Angeles",
  description:
    "Four disciplines, one team: IT infrastructure and cybersecurity, web development, web design, and marketing. See what ADiT in Los Angeles can do for your business.",
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
            Everything a business
            <br />
            needs to show up online.
          </>
        }
        lede="Four disciplines that usually live in separate companies. Here they sit at the same table, which means your tech, your website, and your marketing actually work together."
      />

      <div className="mt-14 space-y-6">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={Math.min(i * 60, 180)}>
            <section
              id={s.id}
              aria-labelledby={`${s.id}-heading`}
              className="scroll-mt-32 rounded-3xl border border-ink/10 bg-ink/[0.025] p-7 sm:p-10 lg:p-12"
            >
              <p className="font-mono text-xs tracking-[0.22em] text-ember uppercase">
                {s.tagline}
              </p>
              <h2
                id={`${s.id}-heading`}
                className="mt-4 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl"
              >
                {s.name}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
                {s.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {s.items.map((item) => (
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
              {s.note && (
                <p className="mt-6 border-l-4 border-signal pl-4 text-sm leading-relaxed text-muted">
                  {s.note}
                </p>
              )}
            </section>
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
              Most projects touch more than one discipline. Tell us what&apos;s going on
              and we&apos;ll point you at the right starting place, honestly.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-14 shrink-0 items-center rounded-full bg-signal px-8 py-4 font-display text-base font-bold tracking-tight text-ink uppercase transition-transform hover:scale-[1.03]"
          >
            Ask us
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
