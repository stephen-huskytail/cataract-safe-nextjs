import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cataractsafeandlock.com"),
  title: {
    default: "Cataract Safe & Lock | Locksmith Niagara Falls NY | Since 1976",
    template: "%s | Cataract Safe & Lock",
  },
  description:
    "Cataract Safe & Lock — trusted locksmith and safe dealer in Niagara Falls, NY since 1976. Lock changes, re-keys, emergency lockouts, safes, and automotive locksmith services. AAA affiliated. Call (716) 285-9712.",
  keywords: [
    "locksmith Niagara Falls NY",
    "safe dealer Niagara Falls",
    "emergency locksmith 24/7",
    "lock change Niagara Falls",
    "AMSEC safe dealer",
    "Gardall safe dealer",
    "automotive locksmith Niagara Falls",
    "Cataract Safe and Lock",
    "locksmith near me Niagara Falls",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cataractsafeandlock.com",
    siteName: "Cataract Safe & Lock",
    title: "Cataract Safe & Lock | Locksmith & Safe Dealer | Niagara Falls, NY",
    description:
      "Serving Niagara Falls since 1976. Expert locksmith services, safe sales & service, and automotive locksmith. AAA affiliated. Free estimates. Call (716) 285-9712.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cataract Safe & Lock — Niagara Falls, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cataract Safe & Lock | Locksmith Niagara Falls NY",
    description: "Trusted locksmith & safe dealer in Niagara Falls since 1976. 24/7 emergency service. Call (716) 285-9712.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.cataractsafeandlock.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Locksmith",
              "@id": "https://www.cataractsafeandlock.com/#business",
              name: BUSINESS.name,
              description:
                "Cataract Safe & Lock provides expert locksmith services, safe sales and service, and automotive locksmith in Niagara Falls, NY. In business since 1976.",
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phone1Tel,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.zip,
                addressCountry: "US",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: [
                "Niagara Falls, NY",
                "Lockport, NY",
                "Niagara County, NY",
                "Erie County, NY",
              ],
              hasMap: "https://maps.google.com/?q=1219+Main+Street+Niagara+Falls+NY+14301",
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
