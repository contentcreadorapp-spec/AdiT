import type { Metadata } from "next";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SplitReveal from "@/components/SplitReveal";
import { projects, pillars, stats, steps, whyUs, faqs, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { es: "/es", "x-default": "/" },
  },
};

const featured = projects.filter((p) => p.featured);

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADiT",
    description:
      "Los Angeles IT services and marketing agency for small businesses: IT support, cybersecurity, web design, digital marketing and SEO.",
    url: `${siteUrl}/`,
    areaServed: { "@type": "City", name: "Los Angeles, CA" },
    founder: [
      { "@type": "Person", name: "Rafael Cordero", jobTitle: "Technology & IT" },
      { "@type": "Person", name: "Kiyomi Villasana", jobTitle: "Marketing & Strategy" },
    ],
    knowsAbout: [
      "IT Services",
      "Cybersecurity",
      "Web Design",
      "Web Development",
      "Digital Marketing",
      "SEO",
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
          <h1 className="mt-6 font-mono text-xs tracking-[0.22em] text-muted uppercase sm:text-sm">
            IT Services & Marketing Agency in Los Angeles
          </h1>
          <h2 className="mt-4 font-display text-[clamp(2.9rem,9.5vw,8rem)] leading-[0.94] font-bold tracking-tight text-balance uppercase">
            <SplitReveal text="Technology that keeps your business running." />
            <br />
            <span className="bg-signal px-2 text-ink box-decoration-clone">
              <SplitReveal text="Marketing that grows it." stagger={30} />
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            IT support, cybersecurity, web design, digital marketing and SEO for
            Los Angeles businesses, from one bilingual team. You work directly
            with Rafael Cordero and Kiyomi Villasana, the two people doing the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              Book a free consultation
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-14 items-center rounded-full border-2 border-ink px-8 py-4 font-display text-base font-bold tracking-tight uppercase transition-colors hover:bg-ink hover:text-paper"
            >
              See our work
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Fixed quotes. Plain language. Hablamos español.
          </p>
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
            lede="Real businesses, real launches. Every project strategized, designed and built by the two of us."
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

      {/* ── What we do: two pillars ──────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="What we do"
            title="Two pillars. One team."
            lede="Most Los Angeles businesses juggle an IT company, a web developer and a marketing agency, and none of them talk to each other. With ADiT, the people securing your systems are the same people building your website and running your campaigns."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 80}>
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(20,22,15,0.35)] sm:p-10"
                >
                  <p className="font-mono text-xs tracking-[0.22em] text-ember uppercase">
                    {pillar.label} · led by {pillar.lead}
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {pillar.tagline}
                  </p>
                  <div className="mt-8 space-y-8">
                    {pillar.groups.map((g) => (
                      <div key={g.name}>
                        <h3 className="font-display text-xl font-bold tracking-tight">
                          {g.name}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted">{g.description}</p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {g.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-ink/15 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 group-hover:text-ember">
                    Explore {pillar.label} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── From the field: two case files ────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="From the field"
          title="Case files."
          lede="Two technology stories from the field."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-ink p-8 text-paper sm:p-12">
              <p className="font-mono text-xs tracking-[0.22em] text-signal uppercase">
                Case file: infrastructure
              </p>
              <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                When &ldquo;the internet&rsquo;s down&rdquo; isn&rsquo;t an option.
              </h3>
              <p className="mt-5 leading-relaxed text-paper/70">
                A Malibu property kept losing its connection to repeated ISP
                outages. Instead of waiting on the provider, Rafael Cordero
                removed the single point of failure: Starlink for the connection
                and UniFi hardware carrying it to every corner, rebuilt end to end.
              </p>
              <p className="mt-4 leading-relaxed text-paper/70">
                It&rsquo;s the same thinking we bring to every client. If your
                website, booking system or ad campaign depends on something
                fragile, we find it and fix it before it costs you customers.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper/15 pt-8">
                {[
                  ["Starlink", "the connection"],
                  ["UniFi", "the network"],
                  ["0", "single points of failure"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold tracking-tight text-signal sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-1 font-mono text-xs tracking-[0.14em] text-paper/60 uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-3xl bg-ink p-8 text-paper sm:p-12">
              <p className="font-mono text-xs tracking-[0.22em] text-signal uppercase">
                Case file: incident response
              </p>
              <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                When one inbox puts 700 at risk.
              </h3>
              <p className="mt-5 leading-relaxed text-paper/70">
                A faculty email account at a private school was compromised, and
                a phishing campaign reached more than 700 recipients, putting
                the school&rsquo;s entire digital environment at risk. Rafael
                Cordero moved right away: accounts secured, credentials reset,
                authentication strengthened, third-party app access audited, and
                data protection policies reviewed across the organization.
              </p>
              <p className="mt-4 leading-relaxed text-paper/70">
                What began as a security incident became an opportunity:
                tighter access controls, stronger email safeguards, and far less
                exposure to the next attempt.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper/15 pt-8">
                {[
                  ["700+", "phishing recipients reached"],
                  ["1", "compromised account"],
                  ["5", "containment actions"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold tracking-tight text-signal sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-1 font-mono text-xs tracking-[0.14em] text-paper/60 uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
              One team. Zero handoffs.
            </>
          }
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                We&rsquo;re <strong className="font-bold">Rafael Cordero</strong> and{" "}
                <strong className="font-bold">Kiyomi Villasana</strong>, Venezuelan-American
                professionals in Los Angeles. We spent years watching tech teams and
                marketing teams blame each other, so we built an agency where that
                can&rsquo;t happen.
              </p>
              <p>
                Rafael brings 15+ years in web, IT and cybersecurity: the systems
                and websites that keep your business running when it counts. Kiyomi
                brings 20+ years in marketing: brand, strategy and campaigns that
                get businesses chosen.
              </p>
              <p>
                Together we help Los Angeles businesses stay secure and grow, in
                English and Spanish, with one team accountable for the whole picture.
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
                <p className="mt-6 font-display text-xl font-bold uppercase">Kiyomi Villasana</p>
                <p className="mt-2 font-mono text-xs tracking-[0.16em] text-paper/60 uppercase">
                  Co-founder, Marketing & Strategy
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">
                  20+ years making brands impossible to ignore, including Red
                  Bull, T-Mobile, Covered California and Herbalife Nutrition,
                  across the general and Hispanic markets.
                </p>
              </div>
              <div className="rounded-2xl bg-signal p-8 text-ink">
                <p className="font-display text-6xl font-bold">R</p>
                <p className="mt-6 font-display text-xl font-bold uppercase">Rafael Cordero</p>
                <p className="mt-2 font-mono text-xs tracking-[0.16em] uppercase opacity-70">
                  Co-founder, Technology & IT
                </p>
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  15+ years building websites and keeping technology dependable.
                  M.S. in Information Technology (Cybersecurity), California Lutheran University.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why ADiT ─────────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="Why ADiT"
            title="Small on purpose."
            lede="No layers, no account managers, no runaround. Here's what that gets you."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <div key={w.title} className="bg-paper p-7 sm:p-9">
                <Reveal delay={i * 70}>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
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
          lede="One clear process from the first call to long after launch. You always know what's happening and what's next."
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
    </>
  );
}
