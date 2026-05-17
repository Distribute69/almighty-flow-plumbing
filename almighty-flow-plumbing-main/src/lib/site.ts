export const site = {
  name: "Almighty Flow Plumbing Co.",
  shortName: "Almighty Flow",
  owner: "Ethan Elliott",
  tagline: "Fast-response plumbing, clean work, and reliable local service in Greensboro.",
  phone: "(336) 733-6541",
  phoneHref: "+13367336541",
  email: "ethan@almightyflow.com",
  city: "Greensboro",
  state: "North Carolina",
  stateAbbr: "NC",
  url: "https://almightyflow.com",
  address: "Greensboro, North Carolina",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Rapid help for burst pipes, active leaks, backups, no-water calls, and urgent plumbing issues.",
    icon: "emergency",
  },
  {
    title: "Drain Cleaning",
    description:
      "Clear stubborn clogs, slow drains, and backed-up lines with clean diagnostics and practical next steps.",
    icon: "drain",
  },
  {
    title: "Water Heater Service",
    description:
      "Repair, replacement, and installation support for tank and tankless water heater systems.",
    icon: "heater",
  },
  {
    title: "Leak Repair",
    description:
      "Find and fix fixture leaks, pipe leaks, and hidden water issues before damage spreads.",
    icon: "leak",
  },
  {
    title: "Sewer & Main Lines",
    description:
      "Main line stoppages, sewer concerns, and repair planning handled with clear communication.",
    icon: "sewer",
  },
  {
    title: "Fixture & Pipe Repair",
    description:
      "Toilets, faucets, sinks, disposals, supply lines, and pipe repairs completed with a clean finish.",
    icon: "home",
  },
] as const;

export const whyUs = [
  {
    title: "Fast Response Times",
    description: "Clear intake, fast triage, and emergency availability when timing matters most.",
  },
  {
    title: "Upfront Communication",
    description: "Clear options, appointment updates, and no-pressure recommendations before work starts.",
  },
  {
    title: "Respect For Your Home",
    description: "Clean work areas, protected surfaces, and crews that treat your space like it matters.",
  },
  {
    title: "Licensed & Insured",
    description: "Professional standards, careful documentation, and work built to hold up.",
  },
  {
    title: "24/7 Emergency Service",
    description: "When water is moving the wrong way, Almighty Flow is built to respond.",
  },
  {
    title: "Organized From First Contact",
    description: "Modern intake, notes, and follow-up systems keep every request clear from start to finish.",
  },
] as const;

export const reviews = [
  {
    quote:
      "They responded quickly, explained the issue clearly, and left the work area clean. Exactly what you want when plumbing goes wrong.",
    name: "Marcus T.",
    location: "Greensboro, NC",
    rating: 5,
  },
  {
    quote:
      "The communication stood out. I knew when they were coming, what they found, and what the repair would involve before anything moved forward.",
    name: "Danielle R.",
    location: "High Point, NC",
    rating: 5,
  },
  {
    quote:
      "Our water heater issue was handled fast and professionally. Clean work, respectful service, and no confusion.",
    name: "James W.",
    location: "Jamestown, NC",
    rating: 5,
  },
  {
    quote:
      "They treated a stressful leak like a process, not a panic. Quick response, clear photos, and a fair recommendation.",
    name: "Priya K.",
    location: "Summerfield, NC",
    rating: 5,
  },
] as const;

export const serviceAreas = [
  "Greensboro",
  "High Point",
  "Jamestown",
  "Summerfield",
  "Oak Ridge",
  "Stokesdale",
  "Pleasant Garden",
  "Browns Summit",
  "McLeansville",
  "Whitsett",
] as const;

export const serviceOptions = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Water Heater Repair & Installation",
  "Leak Detection",
  "Sewer Line Services",
  "Residential Plumbing",
  "Commercial Plumbing",
  "Other / Not Sure",
] as const;
