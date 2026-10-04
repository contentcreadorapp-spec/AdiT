import Link from "next/link";
import { navLinks, services } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

/**
 * The footer is intentionally always dark — a fixed closing band
 * that does not flip with the "after hours" theme toggle.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131511] text-[#f5f2e9]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-4xl">
          <p className="font-mono text-xs tracking-[0.22em] text-[#f5f2e9]/60 uppercase">
            Got a project in mind?
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-balance uppercase sm:text-6xl lg:text-7xl">
            Ready when <span className="text-signal">you</span> are.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-signal px-8 py-4 font-display text-base font-bold tracking-tight text-[#131511] uppercase transition-transform hover:scale-[1.03]"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-14 items-center rounded-full border border-[#f5f2e9]/30 px-8 py-4 font-display text-base font-bold tracking-tight uppercase transition-colors hover:border-[#f5f2e9]"
            >
              See our work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">
              ADiT<span aria-hidden="true" className="text-ember">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#f5f2e9]/60">
              A business technology team run by Kiyo and Rafa — two Venezuelan
              professionals based in Los Angeles.
            </p>
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
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-[#f5f2e9]/60 uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-[#f5f2e9]/80 transition-colors hover:text-signal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="font-mono text-xs tracking-[0.14em] text-[#f5f2e9]/50 uppercase">
            © 2026 ADiT — Los Angeles, CA
          </p>
          <div className="[&_button]:border-white/25 [&_button]:text-[#f5f2e9] [&_button:hover]:border-white/60">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
