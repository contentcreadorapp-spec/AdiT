"use client";

const slides = [
  { src: "/work/guarapo-desktop.jpg", alt: "Guarapo Caffé website by ADiT", name: "Guarapo Caffé" },
  { src: "/work/rafacordero-desktop.jpg", alt: "Rafael T. Cordero website by ADiT", name: "Rafael T. Cordero" },
  { src: "/work/roofing-desktop.jpg", alt: "Hillman and Sons Roofing website by ADiT", name: "H&S Roofing" },
  { src: "/work/morewater-desktop.jpg", alt: "MoreWater Advisory website by ADiT", name: "MoreWater Advisory" },
  { src: "/work/barroncounty-desktop.jpg", alt: "Save Barron County Farms website by ADiT", name: "Save Barron County Farms" },
];

const variants = ["showreel-pan-a", "showreel-pan-b", "showreel-pan-c"];

/**
 * Full-bleed cinematic band: real client work drifting in a slow,
 * endless Ken Burns loop. Pure CSS, no video files, no page-weight cost.
 * Freezes to a single still image when the visitor prefers reduced motion.
 */
export default function Showreel() {
  return (
    <section aria-label="Showreel: recent client work" className="relative h-[74vh] min-h-[480px] w-full overflow-hidden bg-ink">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`showreel-slide ${variants[i % variants.length]}`}
          style={{ animationDelay: `${i * 8}s` }}
        >
          <img
            src={s.src}
            alt={s.alt}
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ))}

      {/* legibility gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/70" />

      {/* overlay copy */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 sm:p-10">
        <p className="font-mono text-xs tracking-[0.22em] text-paper/80 uppercase">Showreel</p>
        <p className="font-mono text-xs tracking-[0.22em] text-paper/80 uppercase">Real work, in motion</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-10">
        <p className="max-w-md font-display text-2xl font-bold tracking-tight text-paper uppercase sm:text-3xl">
          Sites that move business.
        </p>
        <a
          href="/work"
          className="hidden font-mono text-xs tracking-[0.18em] text-paper uppercase underline decoration-signal decoration-2 underline-offset-8 hover:text-signal sm:inline"
        >
          See the work
        </a>
      </div>
    </section>
  );
}
