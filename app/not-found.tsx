import Link from "next/link";
import AsciiArt from "@/components/AsciiArt";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Lost? | ADiT",
  description:
    "This page doesn't exist. ADiT is a business technology team in Los Angeles: IT, cybersecurity, web development, and design.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        kicker="404 — Lost"
        title={
          <>
            This page
            <br />
            went missing.
          </>
        }
        lede="It happens to the best of URLs. While you're here, enjoy some of our work reimagined as ASCII art, then let's get you back on track."
      />

      <div className="mt-12">
        <AsciiArt
          src="/work/rafacordero-desktop.jpg"
          alt="Rafael T. Cordero's website rendered as animated ASCII art"
        />
        <p className="mt-3 font-mono text-xs tracking-[0.16em] text-muted uppercase">
          rafacordero.com, rendered live in your browser
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 font-display text-lg font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.02]"
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink px-8 font-display text-lg font-bold tracking-tight uppercase transition-transform hover:scale-[1.02]"
        >
          Start a project
        </Link>
      </div>
    </main>
  );
}
