import { tickerItems } from "@/content/site";

/** Decorative marquee strip of disciplines. Duplicated once for a seamless loop. */
export default function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-ink/15 bg-signal text-ink"
    >
      <div className="animate-marquee flex w-max items-center py-3">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-base font-bold tracking-tight whitespace-nowrap uppercase sm:text-lg"
          >
            <span className="px-6">{item}</span>
            <span className="text-ink/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
