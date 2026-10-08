// ── Site URL ─────────────────────────────────────────────────────────────
// Production URL on Vercel. weareadit.com is purchased but not yet connected;
// when DNS is live, replace this one value: metadata, sitemap, robots.txt,
// canonical URLs, and structured data all read from here.
export const siteUrl = "https://adi-t.vercel.app";

// ── Instagram ────────────────────────────────────────────────────────────
// TODO: Kiyomi to confirm the @handle. Social icons render only when set.
export const instagramHandle = "";

export const instagramUrl = instagramHandle
  ? `https://www.instagram.com/${instagramHandle}`
  : "";

export type PillarGroup = {
  name: string;
  description: string;
  items: string[];
};

export type Pillar = {
  id: "technology" | "marketing";
  label: string;
  lead: string;
  tagline: string;
  href: string;
  groups: PillarGroup[];
};

export const pillars: Pillar[] = [
  {
    id: "technology",
    label: "Technology",
    lead: "Rafael Cordero",
    tagline: "Built right. Kept secure. Always running.",
    href: "/it-services",
    groups: [
      {
        name: "IT services & support",
        description:
          "The networks, hardware and systems your business runs on, set up properly and looked after.",
        items: [
          "Small business IT support",
          "Network & hardware setup",
          "Ongoing maintenance",
        ],
      },
      {
        name: "Cybersecurity",
        description:
          "Security built in from day one, not bolted on after a breach.",
        items: [
          "Security assessments",
          "Cybersecurity strategy",
          "Data protection & backups",
        ],
      },
      {
        name: "Web design & development",
        description:
          "Fast, conversion-focused websites built for search, on custom code, Webflow or Framer, that you can update yourself.",
        items: [
          "Website design & development",
          "E-commerce websites",
          "CMS setup & SEO-ready structure",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    lead: "Kiyomi Villasana",
    tagline: "Get found. Get chosen. Keep growing.",
    href: "/marketing",
    groups: [
      {
        name: "Brand identity & strategy",
        description:
          "A clear brand and a plan that tells the right customers why you, not the competitor down the street.",
        items: [
          "Brand identity & messaging",
          "Marketing strategy",
          "Bilingual campaigns (English & Spanish)",
        ],
      },
      {
        name: "Digital marketing & advertising",
        description:
          "Google Ads, Meta and Instagram campaigns tied to a number you care about: calls, bookings or sales. Reported monthly, in plain English.",
        items: [
          "Google Ads & email marketing",
          "Instagram & Meta ads",
          "Instagram content & management",
        ],
      },
      {
        name: "SEO & content",
        description:
          "Show up when people in Los Angeles search for what you sell, on Google and Google Maps.",
        items: [
          "Local SEO & Google Business Profile",
          "SEO content & blog",
          "Tracking, analytics & reporting",
        ],
      },
    ],
  },
];

export type MarketingGroup = {
  name: string;
  items: string[];
};

export const marketingGroups: MarketingGroup[] = [
  {
    name: "Strategy and positioning",
    items: [
      "Marketing plans: target clients, offers, channels, budget and 90-day priorities",
      "Ideal client profiles",
      "Competitor research",
      "Service packages and pricing strategy",
    ],
  },
  {
    name: "Website and SEO",
    items: [
      "Website copywriting, in English and Spanish",
      "Keyword research and SEO content plans",
      "SEO blog posts",
      "Google Business Profile setup and weekly posts",
      "Meta titles, descriptions and alt text",
    ],
  },
  {
    name: "Instagram",
    items: [
      "Instagram content strategy: pillars, posting rhythm and formats",
      "Monthly content calendars with captions, hooks and hashtags",
      "Post, carousel and Story design",
      "Bio, highlights and link-in-bio setup",
      "Reel scripting and production",
    ],
  },
  {
    name: "Email marketing",
    items: [
      "Email marketing strategy",
      "Welcome sequences for new subscribers and leads",
      "Monthly newsletters",
      "Lead nurture sequences",
      "Re-engagement campaigns for past customers",
      "Subject line and A/B testing",
      "Lead magnets and signup forms",
    ],
  },
  {
    name: "Advertising",
    items: [
      "Google Ads and Instagram/Meta ad copy",
      "Paid ads branding: on-brand ad creative, visuals and templates",
      "Campaign structure, audiences and budgets",
      "Campaign landing pages",
    ],
  },
  {
    name: "Branding",
    items: [
      "Brand identity: logo, color palette and typography",
      "Brand voice and messaging, in both languages",
      "Brand guidelines",
      "Taglines and elevator pitches",
      "Design systems for consistent visuals",
    ],
  },
  {
    name: "Graphic design",
    items: [
      "Social media and Instagram graphics",
      "Print materials: flyers, brochures, business cards and signage",
      "Presentation and pitch deck design",
      "Email and website graphics",
      "Menus, packaging and promotional materials",
    ],
  },
  {
    name: "Reporting",
    items: ["Monthly plain-English performance reports"],
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
  alt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "guarapo-caffe",
    name: "Guarapo Caffé",
    url: "https://www.guarapocaffe.com",
    domain: "guarapocaffe.com",
    blurb:
      "A Venezuelan café bringing café con alma to LA. We built a site that makes the menu, the story and the address impossible to miss.",
    disciplines: ["Brand", "Web design", "Development"],
    image: "/work/guarapo-desktop.jpg",
    alt: "Guarapo Caffé website, Venezuelan café in Los Angeles",
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
    alt: "Save Barron County Farms website, nonprofit farmland protection",
  },
  {
    slug: "more-water-advisory",
    name: "MoreWater Advisory",
    url: "https://www.morewaterconsulting.com",
    domain: "morewaterconsulting.com",
    blurb: "Website for an independent advisory on high-value construction assets.",
    disciplines: ["Web design", "Development"],
    image: "/work/morewater-desktop.jpg",
    alt: "MoreWater Advisory website, construction asset consulting",
  },
  {
    slug: "joy-qiao",
    name: "Joy Qiao",
    // NOTE: joyforprojects.com is still a parked page (checked 2026-10-07).
    // Swap to the real domain once it goes live.
    url: "https://services-platform-4.preview.emergentagent.com",
    domain: "joyforprojects.com",
    blurb:
      "A consulting site for project leadership and mediation, built to turn referrals into booked calls.",
    disciplines: ["In progress", "Web design", "Development"],
    image: "/work/joy-desktop.jpg",
    alt: "Joy Qiao consulting website, project leadership and mediation",
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
    alt: "Rafael T. Cordero website, IT leadership and cybersecurity",
  },
  {
    slug: "hs-roofing",
    name: "H&S Roofing",
    url: "https://www.hsroofingcorp.com",
    domain: "hsroofingcorp.com",
    blurb:
      "Family-owned, American-made roofing. We built a site that earns trust fast and makes requesting a quote one click.",
    disciplines: ["Web design", "Development"],
    image: "/work/roofing-desktop.jpg",
    alt: "H&S Roofing website, family-owned roofing company",
    featured: true,
  },
];

export const steps = [
  {
    index: "01",
    title: "We listen first",
    text: "We learn your business, your customers and what a win looks like: more calls, more bookings, more sales.",
  },
  {
    index: "02",
    title: "We build your plan",
    text: "Scope, timeline, the numbers we'll track, and a fixed quote. No jargon, no surprises.",
  },
  {
    index: "03",
    title: "We get to work",
    text: "Tech, site, brand and campaigns come together in one process. You see progress early and often.",
  },
  {
    index: "04",
    title: "We launch with confidence",
    text: "Everything tested, tracked and polished before it goes live.",
  },
  {
    index: "05",
    title: "We keep you growing",
    text: "Launch day is the starting line. We keep your tech running, tune campaigns and report results.",
  },
];

export const whyUs = [
  {
    title: "Talk to the people doing the work",
    text: "You work with Rafael and Kiyomi from the first call to launch and beyond.",
  },
  {
    title: "IT and marketing at one table",
    text: "Your systems, your website and your ads come from the same team, so a campaign never sends people to a broken page.",
  },
  {
    title: "Straight answers, plain language",
    text: "We tell you what you need and what you don't. If a cheaper option does the job, we'll say so.",
  },
  {
    title: "Results you can see",
    text: "Systems are monitored and campaigns are tracked, and you get a plain-English report on both.",
  },
  {
    title: "We stick around",
    text: "Technology needs attention, websites need care, campaigns need tuning. You're never on your own after launch.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a website or marketing plan cost?",
    a: "It depends on what you need. Tell us your goals and we'll send a fixed quote before any work starts. No surprise fees, ever.",
  },
  {
    q: "Do you do IT or marketing?",
    a: "Both. Rafael Cordero leads IT support, cybersecurity and web development. Kiyomi Villasana leads marketing, advertising and SEO. Most clients use both.",
  },
  {
    q: "Do you provide IT support for small businesses?",
    a: "Yes. Network and hardware setup, cybersecurity, backups and ongoing support across Los Angeles.",
  },
  {
    q: "Do you manage Instagram?",
    a: "Yes. We plan and create Instagram content, run Instagram and Meta ads, and report what they bring in.",
  },
  {
    q: "Do you do email marketing?",
    a: "Yes. Welcome sequences, monthly newsletters and nurture emails that turn subscribers into customers.",
  },
  {
    q: "Do you do SEO in Los Angeles?",
    a: "Yes. Local SEO, Google Business Profile and SEO-ready websites, so nearby customers find you on Google and Google Maps.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Custom code, Webflow, Framer, Google Ads, Meta and Instagram, Google Business Profile, Google Analytics, Starlink and UniFi.",
  },
  {
    q: "Can you fix my existing website?",
    a: "Yes. We'll audit it, tell you honestly whether to fix or rebuild, and quote both if it's close.",
  },
  {
    q: "¿Trabajan en español?",
    a: "Sí. We create campaigns, content, websites and support in English, Spanish or both.",
  },
  {
    q: "What happens after launch?",
    a: "Monthly care plans cover campaign management, website updates and IT support, so you're never on your own.",
  },
];

export const stats = [
  { value: "15+", label: "years in IT & cybersecurity" },
  { value: "20+", label: "years in marketing & brand" },
  { value: "35+", label: "years of combined experience" },
  { value: "1", label: "team for your tech and your marketing" },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const tickerItems = [
  "IT support",
  "Digital marketing",
  "Cybersecurity",
  "SEO",
  "Network setup",
  "Instagram marketing",
  "Web development",
  "Paid ads",
  "Web design",
  "Branding",
  "Data protection",
  "Graphic design",
  "E-commerce",
  "Email marketing",
];
