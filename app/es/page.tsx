import type { Metadata } from "next";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SplitReveal from "@/components/SplitReveal";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios de IT y marketing en Los Ángeles",
  description:
    "Agencia de IT y marketing en Los Ángeles para pequeños negocios: soporte IT, ciberseguridad, diseño web, marketing digital y SEO. Hablamos español.",
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
};

const esTickerItems = [
  "Soporte IT",
  "Marketing digital",
  "Ciberseguridad",
  "SEO",
  "Redes",
  "Marketing en Instagram",
  "Desarrollo web",
  "Publicidad pagada",
  "Diseño web",
  "Branding",
  "Protección de datos",
  "Diseño gráfico",
  "E-commerce",
  "Email marketing",
];

const esStats = [
  { value: "15+", label: "años en IT y ciberseguridad" },
  { value: "20+", label: "años en marketing y marca" },
  { value: "35+", label: "años de experiencia combinada" },
  { value: "1", label: "equipo para tu tecnología y tu marketing" },
];

const esFaqs = [
  {
    q: "¿Cuánto cuesta un sitio web o un plan de marketing?",
    a: "Depende de lo que necesites. Cuéntanos tus metas y te enviamos una cotización fija antes de empezar. Sin cargos sorpresa, nunca.",
  },
  {
    q: "¿Hacen IT o marketing?",
    a: "Ambos. Rafael Cordero lidera soporte IT, ciberseguridad y desarrollo web. Kiyomi Villasana lidera marketing, publicidad y SEO. La mayoría de los clientes usan ambos.",
  },
  {
    q: "¿Dan soporte IT a pequeños negocios?",
    a: "Sí. Instalación de redes y equipos, ciberseguridad, respaldos y soporte continuo en todo Los Ángeles.",
  },
  {
    q: "¿Manejan Instagram?",
    a: "Sí. Planificamos y creamos contenido para Instagram, corremos anuncios en Instagram y Meta, y te reportamos lo que generan.",
  },
  {
    q: "¿Hacen email marketing?",
    a: "Sí. Secuencias de bienvenida, boletines mensuales y correos que convierten suscriptores en clientes.",
  },
  {
    q: "¿Hacen SEO en Los Ángeles?",
    a: "Sí. SEO local, Google Business Profile y sitios listos para SEO, para que los clientes cercanos te encuentren en Google y Google Maps.",
  },
  {
    q: "¿Con qué plataformas trabajan?",
    a: "Código a medida, Webflow, Framer, Google Ads, Meta e Instagram, Google Business Profile, Google Analytics, Starlink y UniFi.",
  },
  {
    q: "¿Pueden arreglar mi sitio web actual?",
    a: "Sí. Lo auditamos, te decimos con honestidad si conviene arreglarlo o reconstruirlo, y te cotizamos ambas opciones si está cerrado.",
  },
  {
    q: "Do you work in English?",
    a: "Yes. Creamos campañas, contenido, sitios web y soporte en inglés, español o ambos.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Planes mensuales de cuidado que cubren manejo de campañas, actualizaciones del sitio y soporte IT. Nunca quedas solo.",
  },
];

const esProjects = [
  {
    slug: "guarapo-caffe",
    name: "Guarapo Caffé",
    url: "https://www.guarapocaffe.com",
    domain: "guarapocaffe.com",
    blurb:
      "Un café venezolano que trae el café con alma a LA. Creamos un sitio donde el menú, la historia y la dirección son imposibles de perder.",
    disciplines: ["Marca", "Diseño web", "Desarrollo"],
    image: "/work/guarapo-desktop.jpg",
    alt: "Sitio web de Guarapo Caffé, café venezolano en Los Ángeles",
  },
  {
    slug: "hs-roofing",
    name: "H&S Roofing",
    url: "https://www.hsroofingcorp.com",
    domain: "hsroofingcorp.com",
    blurb:
      "Roofing familiar, hecho en USA. Creamos un sitio que genera confianza rápido y hace que pedir un presupuesto sea un clic.",
    disciplines: ["Diseño web", "Desarrollo"],
    image: "/work/roofing-desktop.jpg",
    alt: "Sitio web de H&S Roofing, empresa familiar de roofing",
  },
  {
    slug: "joy-qiao",
    name: "Joy Qiao",
    url: "https://services-platform-4.preview.emergentagent.com",
    domain: "joyforprojects.com",
    blurb:
      "Un sitio de consultoría en liderazgo de proyectos y mediación, diseñado para convertir referidos en llamadas agendadas.",
    disciplines: ["En progreso", "Diseño web", "Desarrollo"],
    image: "/work/joy-desktop.jpg",
    alt: "Sitio web de consultoría de Joy Qiao, liderazgo de proyectos y mediación",
  },
];

const esWhyUs = [
  {
    title: "Hablas con quienes hacen el trabajo",
    text: "Trabajas con Rafael y Kiyomi desde la primera llamada hasta el lanzamiento y después.",
  },
  {
    title: "IT y marketing en la misma mesa",
    text: "Tus sistemas, tu sitio web y tus anuncios salen del mismo equipo, así una campaña nunca lleva gente a una página rota.",
  },
  {
    title: "Respuestas claras, lenguaje simple",
    text: "Te decimos lo que necesitas y lo que no. Si una opción más barata resuelve, te lo diremos.",
  },
  {
    title: "Resultados que puedes ver",
    text: "Los sistemas se monitorean y las campañas se miden, y recibes un reporte en lenguaje claro de ambos.",
  },
  {
    title: "Nos quedamos contigo",
    text: "La tecnología necesita atención, los sitios necesitan cuidado, las campañas necesitan ajuste. Nunca quedas solo después del lanzamiento.",
  },
];

const esSteps = [
  {
    index: "01",
    title: "Primero escuchamos",
    text: "Conocemos tu negocio, tus clientes y qué significa ganar: más llamadas, más reservas, más ventas.",
  },
  {
    index: "02",
    title: "Armamos tu plan",
    text: "Alcance, tiempos, los números que vamos a medir y una cotización fija. Sin jerga, sin sorpresas.",
  },
  {
    index: "03",
    title: "Manos a la obra",
    text: "Tecnología, sitio, marca y campañas avanzan en un solo proceso. Ves progreso temprano y seguido.",
  },
  {
    index: "04",
    title: "Lanzamos con confianza",
    text: "Todo probado, medido y pulido antes de salir al aire.",
  },
  {
    index: "05",
    title: "Te mantenemos creciendo",
    text: "El lanzamiento es la línea de partida. Mantenemos tu tecnología funcionando, ajustamos campañas y reportamos resultados.",
  },
];

export default function SpanishHome() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADiT",
    description:
      "Agencia de IT y marketing en Los Ángeles para pequeños negocios: soporte IT, ciberseguridad, diseño web, marketing digital y SEO.",
    url: `${siteUrl}/es`,
    areaServed: { "@type": "City", name: "Los Angeles, CA" },
    founder: [
      { "@type": "Person", name: "Rafael Cordero", jobTitle: "Tecnología e IT" },
      { "@type": "Person", name: "Kiyomi Villasana", jobTitle: "Marketing y estrategia" },
    ],
    knowsAbout: ["IT", "Ciberseguridad", "Diseño web", "Marketing digital", "SEO"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: esFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div lang="es">
      <JsonLd data={[businessSchema, faqSchema]} />
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-20">
        <Reveal>
          <h1 className="mt-6 font-mono text-xs tracking-[0.22em] text-muted uppercase sm:text-sm">
            Agencia de servicios de IT y marketing en Los Ángeles
          </h1>
          <h2 className="mt-4 font-display text-[clamp(2.9rem,9.5vw,8rem)] leading-[0.94] font-bold tracking-tight text-balance uppercase">
            <SplitReveal text="Tecnología que mantiene tu negocio en marcha." />
            <br />
            <span className="bg-signal px-2 text-ink box-decoration-clone">
              <SplitReveal text="Marketing que lo hace crecer." stagger={30} />
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Soporte IT, ciberseguridad, diseño web, marketing digital y SEO para
            negocios en Los Ángeles, de un equipo bilingüe. Trabajas directamente
            con Rafael Cordero y Kiyomi Villasana, las dos personas que hacen el trabajo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.03]"
            >
              Agenda una consulta gratis
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-14 items-center rounded-full border-2 border-ink px-8 py-4 font-display text-base font-bold tracking-tight uppercase transition-colors hover:bg-ink hover:text-paper"
            >
              Mira nuestro trabajo
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Cotizaciones fijas. Lenguaje claro. Hablamos español.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {esStats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-6">
                <dt className="order-2 mt-1 font-mono text-xs tracking-[0.16em] text-muted uppercase">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <Ticker items={esTickerItems} />

      {/* ── Trabajo destacado ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Portafolio"
            title={
              <>
                Hechos,
                <br />
                no promesas.
              </>
            }
            lede="Negocios reales, lanzamientos reales. Cada proyecto con estrategia, diseño y construcción de nosotros dos."
          />
          <Reveal>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
            >
              Ver todo el trabajo <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-3">
          {esProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Lo que hacemos ───────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="Lo que hacemos"
            title="Dos pilares. Un equipo."
            lede="La mayoría de los negocios en Los Ángeles coordinan una empresa de IT, un desarrollador web y una agencia de marketing, y ninguno habla con el otro. Con ADiT, quienes protegen tus sistemas son los mismos que construyen tu sitio y corren tus campañas."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink/10 bg-paper p-7 sm:p-10">
                <p className="font-mono text-xs tracking-[0.22em] text-ember uppercase">
                  Tecnología · lidera Rafael Cordero
                </p>
                <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Bien construido. Seguro. Siempre funcionando.
                </p>
                <ul className="mt-6 space-y-3 font-medium">
                  <li>→ Soporte IT para pequeños negocios</li>
                  <li>→ Ciberseguridad y protección de datos</li>
                  <li>→ Diseño y desarrollo web</li>
                </ul>
                <Link
                  href="/it-services"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
                >
                  Servicios de IT <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-ink/10 bg-paper p-7 sm:p-10">
                <p className="font-mono text-xs tracking-[0.22em] text-ember uppercase">
                  Marketing · lidera Kiyomi Villasana
                </p>
                <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Que te encuentren. Que te elijan. Que sigas creciendo.
                </p>
                <ul className="mt-6 space-y-3 font-medium">
                  <li>→ Marca, estrategia y campañas bilingües</li>
                  <li>→ Google Ads, Instagram y Meta</li>
                  <li>→ SEO local y contenido</li>
                </ul>
                <Link
                  href="/marketing"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
                >
                  Servicios de marketing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quiénes somos ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Quiénes somos"
          title={
            <>
              Dos expertos.
              <br />
              Un equipo. Cero intermediarios.
            </>
          }
        />
        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed">
          <Reveal>
            <p>
              Somos <strong className="font-bold">Rafael Cordero</strong> y{" "}
              <strong className="font-bold">Kiyomi Villasana</strong>, profesionales
              venezolano-americanos en Los Ángeles. Pasamos años viendo cómo los
              equipos de tecnología y los de marketing se culpaban entre sí, así
              que construimos una agencia donde eso no puede pasar.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Rafael aporta más de 15 años en web, IT y ciberseguridad: los sistemas
              y sitios que mantienen tu negocio funcionando cuando importa. Kiyomi
              aporta más de 20 años en marketing: marca, estrategia y campañas que
              hacen que los negocios sean elegidos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Por qué ADiT ─────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            kicker="Por qué ADiT"
            title="Pequeños a propósito."
            lede="Sin capas, sin ejecutivos de cuenta, sin vueltas. Esto es lo que eso te da."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {esWhyUs.map((w, i) => (
              <div key={w.title} className="bg-paper p-7 sm:p-9">
                <Reveal delay={i * 70}>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo trabajamos ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          kicker="Cómo trabajamos"
          title={
            <>
              Cinco pasos.
              <br />
              Cero improvisación.
            </>
          }
          lede="Un proceso claro desde la primera llamada hasta mucho después del lanzamiento. Siempre sabes qué está pasando y qué sigue."
        />
        <ol className="mt-12">
          {esSteps.map((step, i) => (
            <li key={step.index}>
              <Reveal delay={i * 60}>
                <div className="group flex flex-col gap-3 border-t border-ink/10 py-7 sm:flex-row sm:items-baseline sm:gap-10">
                  <span className="font-display text-5xl font-bold tracking-tight text-ink/15 transition-colors group-hover:text-ember sm:text-6xl">
                    {step.index}
                  </span>
                  <div className="sm:max-w-2xl">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <SectionHeading
                kicker="FAQ"
                title="Preguntas frecuentes, respuestas honestas."
              />
              <Reveal>
                <p className="mt-6 leading-relaxed text-muted">
                  ¿Otra pregunta?{" "}
                  <Link href="/contact" className="underline decoration-ember decoration-2 underline-offset-4 hover:text-ember">
                    Pregúntanos
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <Faq faqs={esFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
