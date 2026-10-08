import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { marketingGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Los Angeles",
  description:
    "Digital marketing agency in Los Angeles: SEO services, Instagram marketing, Google Ads management, email marketing, branding and graphic design. Bilingual campaigns in English and Spanish by ADiT.",
  alternates: { canonical: "/marketing" },
};

export default function MarketingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="Marketing · led by Kiyomi Villasana"
        title="Digital Marketing Agency in Los Angeles."
        lede="Everything you need to get found, get chosen and keep growing, in English and Spanish."
      />

      <div className="mt-14 space-y-6">
        {marketingGroups.map((g, i) => (
          <Reveal key={g.name} delay={Math.min(i * 60, 180)}>
            <section
              aria-labelledby={`mkt-${i}`}
              className="scroll-mt-32 rounded-3xl border border-ink/10 bg-ink/[0.025] p-7 sm:p-10 lg:p-12"
            >
              <h2
                id={`mkt-${i}`}
                className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl"
              >
                {g.name}
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
              No account managers, no jargon. You work directly with Kiyomi,
              from strategy to the monthly plain-English report.
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
