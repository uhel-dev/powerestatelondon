export const site = {
  businessName: "Power Estates London",
  tagline: "Serving London for over 20 years",
  logo: {
    src: "https://dfwassets.s3.eu-west-2.amazonaws.com/PowerEstatesLondon/logo_medium.jpg"
  },
  phones: {
    primary: "07828666560",
    mobile: "07828666560",
    whatsapp: "447828666560",
  },
  email: "dudeivan@yahoo.co.uk",
  address: "88A, Crispen Road, Feltham, TW13 6QR",
  hours: "Mon–Sun 8:00–22:00",
  cta: {
    headline: "Get Your Plumbing Fixed Today — 10% Off Your First Service!",
    bullets: [
      "Fast Fixes, Affordable Prices",
      "Reliable Plumbing Solutions Guaranteed",
      "Expert Engineers • 24/7 Emergencies",
    ],
    buttonLabel: "Book a Visit",
  },
  valueProps: [
    { title: "Fast & Reliable", text: "Same-day slots, emergency cover." },
    { title: "Affordable Rates", text: "Fair pricing with no hidden fees." },
    { title: "Upfront Pricing", text: "Free quotes before any work begins." },
    { title: "Comprehensive Services", text: "Repairs, installs, maintenance." },
  ],
  services: [
    {
      slug: "general-plumbing",
      name: "General Plumbing",
      short: "Repairs and maintenance for leaks, taps, toilets & more.",
      image: "/images/services/general-plumbing.webp",
      features: [
        "Leak repairs",
        "Pipe installation",
        "Drain cleaning",
        "Fixture fitting",
      ],
    },
    {
      slug: "boiler-swap-upgrades",
      name: "Boiler Swap & Upgrades",
      short: "Efficient replacements to improve performance and lower bills.",
      image: "/images/services/boiler-upgrade.webp",
      features: [
        "Modern A-rated models",
        "Old unit disposal",
        "Smart controls",
        "Warranty support",
      ],
    },
    {
      slug: "heating-system-installation",
      name: "Heating System Installation",
      short: "Radiators, cylinders, pumps, zoned heating.",
      image: "/images/services/heating-install.webp",
      features: ["Design & sizing", "Power flush", "Balancing", "Controls setup"],
    },
    {
      slug: "bathroom-installations",
      name: "Bathroom Installations",
      short: "Full bathroom fitouts or upgrades with quality finish.",
      image: "/images/services/bathroom.webp",
      features: [
        "First & second fix",
        "Tiling partners",
        "Fixtures & fittings",
        "Aftercare",
      ],
    },
  ],
  testimonials: [
    {
      name: "Sarah M.",
      title: "Happy Customer",
      quote: "We are really happy with the work and service from Ivan and would definitely recommend Power Estates. Ivan was very quick to respond to our query and provide a quote, was very friendly, and his work was high quality"
    },
    {
      name: "David L.",
      title: "Boiler Repair Customer",
      quote: "Ivan diagnosed our boiler problem as a faulty PCB, sourced one within a couple of days, and fitted it all for a reasonable price. Prompt response, always answered phone calls, and helpful service. I will not hesitate to use Ivan again.",
    },
    {
      name: "Emma R.",
      title: "Plumbing Service Customer",
      quote: "The plumber arrived on time, identified the problem, explained what needed to be done and completed the work. He was courteous, and left the site spotless. Very happy indeed.",
    },
  ],
  partnerLogos: [
    "/images/brands/vaillant.webp",
    "/images/brands/glowworm.webp",
    "/images/brands/honeywell.webp",
    "/images/brands/mira.webp",
    "/images/brands/grohe.webp",
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
  legal: {
    company: "Power Estates London",
    companyNo: "10685119",
  },
  profiles: {
    checkatrade: "https://www.checkatrade.com/trades/powerestateslondon" // replace with your live profile
  }
} as const;

export type SiteConfig = typeof site; 