export const site = {
  name: "Almighty Flow Plumbing Co.",
  shortName: "Almighty Flow",
  owner: "Ethan Elliott",
  tagline: "Premium plumbing for Greensboro homes & businesses",
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
      "Burst pipes, backups, and urgent leaks — rapid dispatch with fully equipped trucks to protect your property.",
    icon: "emergency",
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional clearing and camera inspections to restore flow without damaging your lines.",
    icon: "drain",
  },
  {
    title: "Water Heater Repair & Installation",
    description:
      "Tank and tankless service, upgrades, and code-compliant installs for reliable hot water.",
    icon: "heater",
  },
  {
    title: "Leak Detection",
    description:
      "Advanced diagnostics to find hidden leaks early — before they become costly structural damage.",
    icon: "leak",
  },
  {
    title: "Sewer Line Services",
    description:
      "Line repair, replacement, and maintenance with modern methods that minimize disruption.",
    icon: "sewer",
  },
  {
    title: "Residential Plumbing",
    description:
      "Repairs, remodels, and fixture upgrades delivered with respect for your home and schedule.",
    icon: "home",
  },
  {
    title: "Commercial Plumbing",
    description:
      "Reliable maintenance and emergency response for offices, retail, and multi-unit properties.",
    icon: "commercial",
  },
] as const;

export const whyUs = [
  {
    title: "Fast Response Times",
    description: "Same-day availability and true 24/7 emergency coverage when you need us most.",
  },
  {
    title: "Honest Communication",
    description: "Clear options and upfront pricing — no pressure, no surprises on your invoice.",
  },
  {
    title: "Modern Technology",
    description: "Camera inspections, precision diagnostics, and efficient repair methods.",
  },
  {
    title: "Reliable Service",
    description: "Licensed work, quality parts, and workmanship you can count on long-term.",
  },
  {
    title: "Customer Satisfaction",
    description: "We treat every job like our reputation depends on it — because it does.",
  },
  {
    title: "Locally Owned",
    description: "Greensboro-based, community-focused, and invested in neighbors we serve.",
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
