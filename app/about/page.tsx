import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { stats, whyUs } from "@/content/site";

export const metadata: Metadata = {
  title: "Latino-Owned IT & Marketing Agency in Los Angeles",
  description:
    "Meet Rafael Cordero and Kiyomi Villasana, two Venezuelan-American professionals in Los Angeles combining 20+ years in marketing with 15+ years in technology, cybersecurity, and web.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Direct, always",
    text: "You'll never wonder who you're talking to or what's happening. We say what we mean and do what we say.",
  },
  {
    title: "Craft over shortcuts",
    text: "Templates and quick fixes have their place, but your business deserves work that's built to last, not just to launch.",
  },
  {
    title: "Technology should be boring",
    text: "The best IT is the kind you never think about. We build systems that quietly work so you can focus on your actual job.",
  },
  {
    title: "Design should be felt",
    text: "Good design isn't decoration. It's the difference between a visitor who bounces and one who becomes a customer.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="About ADiT"
        title="Latino-owned IT & marketing agency in Los Angeles."
        lede="Two Venezuelan-American professionals in Los Angeles. One team for your technology and your marketing."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              We&apos;re <strong className="font-bold">Rafael Cordero</strong> and{" "}
              <strong className="font-bold">Kiyomi Villasana</strong>, Venezuelan-American
              professionals in Los Angeles. We spent years watching tech teams and
              marketing teams blame each other, so we built an agency where that
              can&apos;t happen.
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
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-8">
                <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 font-mono text-xs tracking-[0.16em] text-muted uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">
            Combined experience across both founders, never presented as 35 years each.
          </p>
        </Reveal>
      </div>

      {/* Team */}
      <section aria-labelledby="team-heading" className="mt-20 sm:mt-28">
        <SectionHeading kicker="The team" title={<span id="team-heading">Small team. Big expertise.</span>} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-3xl bg-ink text-paper">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/team/kiyo.jpg"
                  alt="Portrait of Kiyomi Villasana"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-3xl font-bold uppercase">Kiyomi Villasana</h3>
                <p className="mt-2 font-mono text-xs tracking-[0.18em] text-paper/60 uppercase">
                  Co-founder, Marketing & Strategy
                </p>
                <p className="mt-5 leading-relaxed text-paper/75">
                  20+ years making brands impossible to ignore.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-3xl bg-signal text-ink">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/team/rafa.jpg"
                  alt="Portrait of Rafael Cordero"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-3xl font-bold uppercase">Rafael Cordero</h3>
                <p className="mt-2 font-mono text-xs tracking-[0.18em] uppercase opacity-70">
                  Co-founder, Technology & IT
                </p>
                <p className="mt-5 leading-relaxed opacity-85">
                  15+ years building websites and keeping technology dependable.
                </p>
                <p className="mt-5 border-t border-ink/15 pt-4 font-mono text-xs leading-relaxed tracking-[0.12em] uppercase opacity-70">
                  M.S. Information Technology (Cybersecurity), California Lutheran
                  University · Jamf Certified Associate – Jamf Pro · Google AI certified
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case file */}
      <section aria-labelledby="casefile-heading" className="mt-20 sm:mt-28">
        <SectionHeading
          kicker="From the field"
          title={
            <span id="casefile-heading">
              The one Apple and Jamf couldn&apos;t crack.
            </span>
          }
        />
        <Reveal>
          <div className="mt-10 rounded-3xl bg-ink p-8 text-paper sm:p-12">
            <p className="font-mono text-xs tracking-[0.22em] text-signal uppercase">
              Case file: IT incident response
            </p>
            <p className="mt-6 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              Ten Apple silicon MacBooks, dead on arrival: a fleet-wide boot
              failure that neither Apple nor Jamf engineering could reproduce.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-paper/70">
              Three weeks of digging isolated the culprit: a single
              configuration profile corrupting device boot policy. All ten units
              recovered. Zero hardware replaced.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper/15 pt-8">
              {[
                ["3 weeks", "of investigation"],
                ["10 units", "recovered"],
                ["0", "hardware replaced"],
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
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="mt-20 sm:mt-28">
        <SectionHeading
          kicker="What we believe"
          title={<span id="values-heading">How we work, in four lines.</span>}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-ink/10 p-7 sm:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us recap */}
      <section aria-labelledby="why-heading" className="mt-20 sm:mt-28">
        <SectionHeading
          kicker="Why ADiT"
          title={<span id="why-heading">Why businesses hire us.</span>}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-ink/10 bg-ink/[0.025] p-7 sm:p-8">
                <h3 className="font-display text-xl font-bold tracking-tight">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              Work with us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
