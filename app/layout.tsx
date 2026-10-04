import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import StatusBar from "@/components/StatusBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteUrl } from "@/content/site";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ADiT — Business Technology in Los Angeles",
    template: "%s — ADiT",
  },
  description:
    "ADiT is a business technology team run by Kiyo and Rafa in Los Angeles. IT infrastructure, cybersecurity, web development, web design, and marketing — one team for all of it.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "ADiT",
    title: "ADiT — Business Technology in Los Angeles",
    description:
      "IT you can depend on. Websites that actually work. Marketing that gets you found. By Kiyo and Rafa, Los Angeles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADiT — Business Technology in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADiT — Business Technology in Los Angeles",
    description:
      "IT you can depend on. Websites that actually work. Marketing that gets you found.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("adit-theme")==="night")document.documentElement.dataset.theme="night"}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-paper"
        >
          Skip to content
        </a>
        <StatusBar />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
