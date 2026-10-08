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
    default: "ADiT | IT Services & Marketing Agency in Los Angeles",
    template: "%s | ADiT",
  },
  description:
    "Los Angeles IT services and marketing agency for small businesses: IT support, cybersecurity, web design, digital marketing and SEO. Hablamos español.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "ADiT",
    title: "ADiT | IT Services & Marketing Agency in Los Angeles",
    description:
      "Technology that keeps you running. Marketing that gets you found. One LA team for both.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADiT | IT Services & Marketing Agency in Los Angeles",
      },
    ],
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
