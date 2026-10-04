import type { Metadata } from "next";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SplitReveal from "@/components/SplitReveal";
import { projects, services, stats, steps, whyUs, faqs, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "ADiT — Business Technology in Los Angeles",
  description:
    "ADiT is a business technology team in Los Angeles. IT infrastructure, cybersecurity, web development, web design, and marketing — handled by Kiyo and Rafa, two people you'll actually talk to.",
  alternates: { canonical: "/" },
};

const featured = projects.filter((p) => p.featured);

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ADiT",
    description:
      "Business technology team in Los Angeles: IT infrastructure, cybersecurity, web development, web design, and marketing — run by Kiyo and Rafa.",
    url: `${siteUrl}/`,
    areaServed: { "@type": "City", name: "Los Angeles, CA" },
    founder: [
      { "@type": "Person", name: "Kiyo", jobTitle: "Marketing & Strategy" },
      {
        "@type": "Person",
        name: "Rafael T. Cordero",
        jobTitle: "Web, Development & IT",
      },
    ],
    knowsAbout: [
      "Web Design",
      "Web Development",
      "IT Services",
      "Cybersecurity",
      "Marketing",
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <JsonLd data={[businessSchema, faqSchema]} />
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-20">
        <Reveal>
          <p className="mt-6 text-xl text-muted sm:text-2xl">
            Your business runs on technology.
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.9rem,9.5vw,8rem)] leading-[0.94] font-bold tracking-tight text-balance uppercase">
            <SplitReveal text="Technology that" />
            <br />
            <span className="bg-signal px-2 text-ink">
              <SplitReveal text="actually works." stagger={30} />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            IT infrastructure, cybersecurity, web development, and design —
            handled by two people you&apos;ll actually talk to.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex min-h-14 items-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              See our work
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full border-2 border-ink px-8 py-4 font-display text-base font-bold tracking-tight uppercase transition-colors hover:bg-ink hover:text-paper"
            >
              Discuss a project
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-6">
                <dt className="order-2 mt-1 font-mono text-xs tracking-[0.16em] text-muted uppercase">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <Ticker />

      {/* ── Featured work ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Selected work"
            title={
              <>
                Proof,
                <br />
                not promises.
              </>
            }
            lede="Real sites for real businesses. Every one designed, built, and launched by the two of us."
          />
          <Reveal>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
            >
              View all work <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="What we do"
            title="Four disciplines. One team."
            lede="Most vendors hand you off between departments. With us, the people securing your network are the same people building your site."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(20,22,15,0.35)] sm:p-9"
                >
                  <div className="flex items-baseline justify-end">
                    <span
                      aria-hidden="true"
                      className="font-display text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase">
                    {s.name}
                  </h3>
                  <p className="mt-2 font-display text-lg font-bold text-ember">
                    {s.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-ink/15 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Who we are"
          title={
            <>
              Two experts.
              <br />
              One integrated solution.
            </>
          }
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                We&apos;re <strong className="font-bold">Kiyo</strong> and{" "}
                <strong className="font-bold">Rafa</strong> — two Venezuelan
                professionals in Los Angeles who decided to stop working in
                silos and start building things together.
              </p>
              <p>
                Kiyo brings 20+ years in marketing: brand, strategy, and
                campaigns that get businesses chosen. Rafa brings 15+ years in
                web and IT: sites, infrastructure, and the unglamorous work that
                keeps everything running.
              </p>
              <p>
                Combined, that&apos;s 35+ years of experience pointed at one
                goal — helping businesses show up online with better websites,
                smart marketing, and dependable technology.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
            >
              More about us <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-ink p-8 text-paper">
                <p className="font-display text-6xl font-bold text-signal">K</p>
                <p className="mt-6 font-display text-xl font-bold uppercase">Kiyo</p>
                <p className="mt-2 font-mono text-xs tracking-[0.16em] text-paper/60 uppercase">
                  Marketing & strategy
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">
                  20+ years making brands impossible to ignore.
                </p>
              </div>
              <div className="rounded-2xl bg-signal p-8 text-ink">
                <p className="font-display text-6xl font-bold">R</p>
                <p className="mt-6 font-display text-xl font-bold uppercase">Rafa</p>
                <p className="mt-2 font-mono text-xs tracking-[0.16em] uppercase opacity-70">
                  Web, development & IT
                </p>
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  15+ years building sites and keeping tech dependable. M.S. in
                  Information Technology (Cybersecurity), California Lutheran University.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="Why ADiT"
            title="Small on purpose."
            lede="We're not an agency with layers. Here's what that gets you."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <div key={w.title} className="bg-paper p-7 sm:p-9">
                <Reveal delay={i * 70}>
                  <p className="font-mono text-xs tracking-[0.2em] text-ember">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="How we work"
          title={
            <>
              Five steps.
              <br />
              Zero guesswork.
            </>
          }
          lede="One consistent process, from first call to long after launch. You'll always know what's happening and what comes next."
        />
        <ol className="mt-12">
          {steps.map((step, i) => (
            <li key={step.index}>
              <Reveal delay={i * 60}>
                <div className="group flex flex-col gap-3 border-t border-ink/10 py-7 sm:flex-row sm:items-baseline sm:gap-10">
                  <span className="font-display text-5xl font-bold tracking-tight text-ink/15 transition-colors group-hover:text-ember sm:text-6xl">
                    {step.index}
                  </span>
                  <div className="sm:max-w-2xl">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <SectionHeading
                kicker="FAQ"
                title="Asked often, answered honestly."
              />
              <Reveal>
                <p className="mt-6 leading-relaxed text-muted">
                  Something else on your mind?{" "}
                  <Link href="/contact" className="underline decoration-ember decoration-2 underline-offset-4 hover:text-ember">
                    Just ask us
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <Faq />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact band ─────────────────────────────────── */}
      <section className="bg-signal text-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
              Have something to build, fix, or grow?
            </h2>
            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              Discuss a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
