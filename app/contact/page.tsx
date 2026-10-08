import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import InstagramLink from "@/components/InstagramLink";

export const metadata: Metadata = {
  title: "Free IT Consultation Los Angeles",
  description:
    "Book a free consultation with ADiT in Los Angeles: a 20-minute call covering your tech setup and your marketing. Website quotes and marketing consultations. Hablamos español.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  {
    index: "01",
    title: "You write",
    text: "Tell us about your business and what you want to fix or grow. A few sentences is plenty.",
  },
  {
    index: "02",
    title: "We reply",
    text: "A real human (Kiyomi or Rafael) reads your message and gets back to you within one business day.",
  },
  {
    index: "03",
    title: "We talk",
    text: "A straightforward conversation about scope, timeline, and a fixed quote.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        level={1}
        kicker="Contact"
        title="Book a free consultation."
        lede="A 20-minute call covering your tech setup and your marketing. No pressure, no jargon."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <ContactForm />
        </Reveal>
        <div>
          <Reveal delay={100}>
            <h2 className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
              What happens next
            </h2>
            <ol className="mt-6 space-y-6">
              {nextSteps.map((s) => (
                <li key={s.index} className="flex gap-5">
                  <span className="font-display text-3xl font-bold text-ink/20">
                    {s.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 rounded-2xl border border-ink/10 bg-ink/[0.025] p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
                Home base
              </p>
              <p className="mt-2 font-display text-lg font-bold">
                Los Angeles, California
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Working with clients everywhere, on-site across the LA area for
                IT projects.
              </p>
              <div className="mt-4">
                <InstagramLink />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
