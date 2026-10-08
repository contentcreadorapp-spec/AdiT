import { instagramHandle, instagramUrl } from "@/content/site";

/** Instagram icon + handle. Renders nothing until the handle is confirmed. */
export default function InstagramLink({ dark = false }: { dark?: boolean }) {
  if (!instagramHandle) return null;
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`ADiT on Instagram (@${instagramHandle})`}
      className={`inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors ${
        dark ? "text-[#f5f2e9]/80 hover:text-signal" : "hover:text-ember"
      }`}
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
      </svg>
      <span>@{instagramHandle}</span>
    </a>
  );
}
