"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
        >
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tight"
            aria-label="ADiT — home"
          >
            ADiT<span aria-hidden="true" className="text-ember">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:text-ember"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 py-2.5 font-display text-sm font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ink/20 px-4 font-mono text-xs tracking-[0.18em] uppercase md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-28 pb-10 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline py-4 font-display text-4xl font-bold tracking-tight uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-ink font-display text-lg font-bold tracking-tight text-paper uppercase"
          >
            Start a project
          </Link>
          <p className="mt-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Los Angeles, CA · working worldwide
          </p>
        </div>
      )}
    </>
  );
}
