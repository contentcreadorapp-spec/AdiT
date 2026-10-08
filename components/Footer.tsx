import Link from "next/link";
import { navLinks, pillars } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import InstagramLink from "./InstagramLink";

/**
 * The footer is intentionally always dark — a fixed closing band
 * that does not flip with the "after hours" theme toggle.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131511] text-[#f5f2e9]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="font-display text-5xl font-bold tracking-tight text-balance uppercase sm:text-6xl lg:text-7xl">
            Ready for tech that <span className="text-signal">works</span> and
            marketing that <span className="text-signal">grows</span>?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#f5f2e9]/70">
            Tell us what you want to fix or grow. We&apos;ll reply within one
            business day with honest next steps, even if that means we&apos;re not
            the right fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-signal px-8 py-4 font-display text-base font-bold tracking-tight text-[#131511] uppercase transition-transform hover:scale-[1.03]"
            >
              Book a free consultation
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-14 items-center rounded-full border border-[#f5f2e9]/30 px-8 py-4 font-display text-base font-bold tracking-tight uppercase transition-colors hover:border-[#f5f2e9]"
            >
              See our work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold">
              ADiT<span aria-hidden="true" className="text-ember">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#f5f2e9]/60">
              ADiT is a Los Angeles IT services and marketing agency run by
              Rafael Cordero and Kiyomi Villasana, two Venezuelan-American
              professionals. IT support, cybersecurity, web design, digital
              marketing and SEO, under one roof. Hablamos español.
            </p>
            <div className="mt-5">
              <InstagramLink dark />
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono text-xs tracking-[0.22em] text-[#f5f2e9]/60 uppercase">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5">
              {[{ label: "Home", href: "/" }, ...navLinks].map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-[#f5f2e9]/80 transition-colors hover:text-signal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {pillars.map((pillar) => (
            <div key={pillar.id}>
              <p className="font-mono text-xs tracking-[0.22em] text-[#f5f2e9]/60 uppercase">
                {pillar.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {pillar.groups.map((g) => (
                  <li key={g.name}>
                    <Link
                      href={pillar.href}
                      className="text-sm text-[#f5f2e9]/80 transition-colors hover:text-signal"
                    >
                      {g.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="font-mono text-xs tracking-[0.14em] text-[#f5f2e9]/50 uppercase">
            © 2026 ADiT · Los Angeles, CA
          </p>
          <div className="[&_button]:border-white/25 [&_button]:text-[#f5f2e9] [&_button:hover]:border-white/60">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
