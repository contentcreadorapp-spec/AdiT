// ── Site URL ─────────────────────────────────────────────────────────────
// PLACEHOLDER — Rafael doesn't have a production domain yet.
// Replace this one value before launch; metadata, sitemap, robots.txt,
// canonical URLs, and structured data all read from here.
export const siteUrl = "https://adit.studio";

export type Service = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  items: string[];
  note?: string;
};

export const services: Service[] = [
  {
    id: "it",
    index: "01",
    name: "IT & Security",
    tagline: "The backbone your business runs on.",
    description:
      "Reliable technology starts with a solid foundation. We assess what you have, plan what you need, and handle the hardware and setup, with security baked in from day one, not bolted on after. Then we stick around to keep it running.",
    items: [
      "Infrastructure assessments",
      "Cybersecurity strategy",
      "Hardware deployment & setup",
      "Ongoing support & maintenance",
      "Project planning & budgeting",
      "Incident response",
    ],
    note: "Hands-on experience with Apple, Jamf, UniFi, and Securly environments. Rafa holds an M.S. in Information Technology (Cybersecurity) from California Lutheran University, is a Jamf Certified Associate – Jamf Pro, and holds Google AI certifications (AI Fundamentals, AI for Research and Insights, AI for Brainstorming and Planning).",
  },
  {
    id: "development",
    index: "02",
    name: "Development",
    tagline: "Built from scratch, built to last.",
    description:
      "We build sites the right way for the job: clean custom code when it matters, the right platform when it doesn't. Either way, you get a fast site you can actually manage.",
    items: [
      "Custom development",
      "Framer & Webflow builds",
      "CMS setup",
      "SEO-friendly structure",
      "Performance optimization",
      "Third-party integrations",
      "AI integration",
    ],
  },
  {
    id: "web-design",
    index: "03",
    name: "Web design",
    tagline: "A site people actually want to visit.",
    description:
      "Pretty isn't enough. Your site has to be clear, fast, and easy to use. We design around your visitors, not around trends, so the site feels effortless on any screen.",
    items: [
      "Responsive layouts",
      "Wireframes & prototypes",
      "Design systems",
      "Accessibility",
      "Motion & interaction",
      "Conversion-focused design",
    ],
  },
  {
    id: "marketing",
    index: "04",
    name: "Marketing",
    tagline: "Get found. Get chosen. Keep growing.",
    description:
      "A great site nobody sees is a missed opportunity. We help the right people find you, trust you, and come back, with marketing you can measure.",
    items: [
      "Brand identity",
      "Marketing strategy",
      "Content creation",
      "Paid campaigns",
      "Email marketing",
      "Reporting & analytics",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  blurb: string;
  disciplines: string[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "guarapo-caffe",
    name: "Guarapo Caffé",
    url: "https://www.guarapocaffe.com",
    domain: "guarapocaffe.com",
    blurb: "Website for a Venezuelan café in L.A.: authentic flavors, café con alma.",
    disciplines: ["Web design", "Development"],
    image: "/work/guarapo-desktop.jpg",
    featured: true,
  },
  {
    slug: "save-barron-county-farms",
    name: "Save Barron County Farms",
    url: "https://www.savebarroncountyfarms.org",
    domain: "savebarroncountyfarms.org",
    blurb: "Website rallying support to protect farmland in Barron County, Wisconsin.",
    disciplines: ["Web design", "Development"],
    image: "/work/barroncounty-desktop.jpg",
  },
  {
    slug: "more-water-advisory",
    name: "MoreWater Advisory",
    url: "https://www.morewaterconsulting.com",
    domain: "morewaterconsulting.com",
    blurb: "Website for an independent advisory on high-value construction assets.",
    disciplines: ["Web design", "Development"],
    image: "/work/morewater-desktop.jpg",
  },
  {
    slug: "joy-qiao",
    name: "Joy Qiao",
    url: "https://services-platform-4.preview.emergentagent.com",
    domain: "joyforprojects.com",
    blurb: "Personal consulting site for Joy Qiao: project leadership, mediation, and strategic communication. Currently in development.",
    disciplines: ["Web design", "Development"],
    image: "/work/joy-desktop.jpg",
    featured: true,
  },
  {
    slug: "rafael-t-cordero",
    name: "Rafael T. Cordero",
    url: "https://www.rafacordero.com",
    domain: "rafacordero.com",
    blurb: "Personal site of Rafael T. Cordero: IT leadership, cybersecurity, education innovation.",
    disciplines: ["Web design", "Development"],
    image: "/work/rafacordero-desktop.jpg",
  },
  {
    slug: "hs-roofing",
    name: "H&S Roofing",
    url: "https://www.hsroofingcorp.com",
    domain: "hsroofingcorp.com",
    blurb: "Website for Hillman & Sons, family owned and American made roofing.",
    disciplines: ["Web design", "Development"],
    image: "/work/roofing-desktop.jpg",
    featured: true,
  },
];

export const steps = [
  {
    index: "01",
    title: "We listen first",
    text: "Every project starts with a conversation. We learn what your business does, who it's for, and what success looks like.",
  },
  {
    index: "02",
    title: "We build your roadmap",
    text: "You get a clear plan: scope, timeline, and a fixed quote. No jargon, no surprises.",
  },
  {
    index: "03",
    title: "We get to work",
    text: "Design, build, and marketing come together in one process. You see progress early and often.",
  },
  {
    index: "04",
    title: "We launch with confidence",
    text: "We test everything, polish the details, and go live when it's genuinely ready.",
  },
  {
    index: "05",
    title: "We stay in your corner",
    text: "Launch day is the starting line. We're here for updates, support, and whatever comes next.",
  },
];

export const whyUs = [
  {
    title: "Talk to the people doing the work",
    text: "No account managers, no telephone game. You work directly with Kiyo and Rafa from first call to launch.",
  },
  {
    title: "Two experts, zero gaps",
    text: "Marketing and technology usually live in separate worlds. We bring both to the same table, so nothing gets lost between them.",
  },
  {
    title: "Clear advice, plain language",
    text: "We'll tell you what you actually need, and what you don't. If a cheaper option does the job, we'll say so.",
  },
  {
    title: "Support beyond launch",
    text: "Websites need care and technology needs attention. We offer ongoing support so you're never on your own.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a website cost?",
    a: "It depends on what the site needs to do. Tell us about your project and we'll give you a clear, fixed quote before any work starts. No surprise fees, ever.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites take a few weeks from kickoff to launch, depending on scope and how quickly we get what we need from you. Your roadmap includes a real timeline, not a guess.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Let's talk about it. We structure payments around project milestones, and we're happy to discuss what works for your budget during our first conversation.",
  },
  {
    q: "Which platforms do you work with?",
    a: "We build custom-coded sites, and we also work in Framer and Webflow when a platform is the right fit. We'll recommend the option that serves you best, not the one that's easiest for us.",
  },
  {
    q: "Can you fix or improve my existing website?",
    a: "Yes. We can audit what you have, fix what's broken, and redesign what isn't working, or rebuild from scratch if that's the smarter move. We'll tell you honestly which one it is.",
  },
  {
    q: "Do you help with IT, not just websites?",
    a: "Absolutely. IT is half of what we do. From network setups and hardware deployment to ongoing support, we keep your technology dependable so you can focus on your business.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. We offer ongoing support and maintenance for both websites and IT, so you always have someone to call when something needs attention.",
  },
];

export const stats = [
  { value: "35+", label: "years combined experience" },
  { value: "20+", label: "years in marketing" },
  { value: "15+", label: "years in web & IT" },
  { value: "09", label: "clients and counting" },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const tickerItems = [
  "IT & security",
  "Development",
  "Web design",
  "Marketing",
  "SEO",
  "Support",
  "Brand identity",
  "E-commerce",
];
