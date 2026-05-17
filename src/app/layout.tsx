import type { Metadata } from "next";
import { Cinzel, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const heading = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Premium Plumber in ${site.city}, ${site.stateAbbr} | ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description: `${site.name} — owner-operated by ${site.owner}. Emergency plumbing, drain cleaning, water heaters & leak detection in ${site.city}, NC. Call ${site.phone}.`,
  keywords: [
    "plumber Greensboro NC",
    "emergency plumbing Greensboro",
    "drain cleaning Greensboro",
    "water heater repair Greensboro",
    "Almighty Flow Plumbing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `Premium Plumber in ${site.city}, ${site.stateAbbr}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Plumber",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      telephone: site.phone,
      email: site.email,
      founder: { "@type": "Person", name: site.owner },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.stateAbbr,
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: site.city },
      description: site.tagline,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable} ${script.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-chrome font-sans antialiased">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a08dcdff127bb2f808ebfa4"
          data-source="WEB_USER"
        />
      </body>
    </html>
  );
}
