export const site = {
  name: "Almighty Flow Plumbing Co.",
  shortName: "Almighty Flow",
  owner: "Ethan Elliott",
  tagline: "Luxury blue-collar plumbing for Greensboro homes & businesses",
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
      "Rapid response for burst pipes, backups, no-water calls, and urgent leaks that cannot wait.",
    icon: "emergency",
  },
  {
    title: "Drain Cleaning",
    description:
      "Precision clearing, diagnostics, and camera-ready inspection workflows to restore flow cleanly.",
    icon: "drain",
  },
  {
    title: "Water Heaters",
    description:
      "Tank and tankless repair, replacement, and upgrades built for reliable hot water.",
    icon: "heater",
  },
  {
    title: "Leak Detection",
    description:
      "Advanced diagnostics to find hidden leaks early — before they become costly structural damage.",
    icon: "leak",
  },
  {
    title: "Sewer Repair",
    description:
      "Modern sewer diagnosis, repair planning, and clear communication before major work begins.",
    icon: "sewer",
  },
  {
    title: "Repiping",
    description:
      "Clean pipe repair and repiping solutions for aging lines, remodels, and long-term reliability.",
    icon: "home",
  },
] as const;

export const whyUs = [
  {
    title: "Fast Response Times",
    description: "Clear intake, fast triage, and emergency availability when timing matters most.",
  },
  {
    title: "Transparent Pricing",
    description: "Straight answers, clear options, and no-pressure recommendations before work starts.",
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
    title: "Modern Technology",
    description: "Diagnostics, photos, notes, and follow-up systems that keep every job organized.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Ethan responded within the hour for a burst pipe. Professional, calm, and fixed everything the same day. Exactly the kind of plumber you want on speed dial.",
    name: "Marcus T.",
    location: "Greensboro, NC",
    rating: 5,
  },
  {
    quote:
      "Transparent pricing and zero upselling. They explained what failed, what we needed, and what could wait. Refreshing experience.",
    name: "Danielle R.",
    location: "High Point, NC",
    rating: 5,
  },
  {
    quote:
      "Our water heater was replaced cleanly and quickly. Floors protected, area spotless, and they walked us through maintenance tips.",
    name: "James W.",
    location: "Jamestown, NC",
    rating: 5,
  },
  {
    quote:
      "Found a slab leak other companies missed. Modern equipment, clear photos, and a fair quote before any work started.",
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
