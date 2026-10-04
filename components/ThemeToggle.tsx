"use client";

import { useState } from "react";

const STORAGE_KEY = "adit-theme";

function getInitialNight() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.theme === "night";
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13.2A8.5 8.5 0 0 1 10.8 4 8.5 8.5 0 1 0 20 13.2Z" />
    </svg>
  );
}

/** Flips the site between day paper and "after hours" night ink. */
export default function ThemeToggle() {
  const [night, setNight] = useState(getInitialNight);

  const toggle = () => {
    const next = !night;
    setNight(next);
    if (next) {
      document.documentElement.dataset.theme = "night";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem(STORAGE_KEY, next ? "night" : "day");
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={night}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs tracking-[0.14em] uppercase transition-colors hover:border-ink/50"
    >
      {night ? <SunIcon /> : <MoonIcon />}
      {night ? "Lights on" : "After hours"}
    </button>
  );
}
