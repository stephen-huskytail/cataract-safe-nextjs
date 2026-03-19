import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Shield, Flame, Lock, Star, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Safe Sales & Service Niagara Falls NY | AMSEC & Gardall Dealer | Cataract Safe & Lock",
  description:
    "Authorized AMSEC & Gardall safe dealer in Niagara Falls, NY. Fire safes, gun safes, jewelry safes, floor safes, depository safes and more. Expert safe service and combination changes. Call (716) 285-9712.",
};

const safeTypes = [
  {
    icon: <Flame className="w-5 h-5 text-csl-gold" />,
    title: "Fire Safes",
    desc: "UL-rated fire protection for documents, media, and valuables. Multiple fire ratings available up to 2 hours.",
  },
  {
    icon: <Shield className="w-5 h-5 text-csl-gold" />,
    title: "Burglary Safes",
    desc: "TL-15, TL-30, and TRTL-rated safes built to resist professional break-in attempts. Ideal for cash and jewelry.",
  },
  {
    icon: <Lock className="w-5 h-5 text-csl-gold" />,
    title: "Gun Safes",
    desc: "Long-gun and handgun storage with RSC burglary ratings. Protect your firearms from theft and unauthorized access.",
  },
  {
    icon: <Star className="w-5 h-5 text-csl-gold" />,
    title: "Jewelry Safes",
    desc: "High-security jewelry safes with organized interiors. Available in floor, wall, and furniture-style models.",
  },
  {
    icon: <Lock className="w-5 h-5 text-csl-gold" />,
    title: "Depository Safes",
    desc: "Drop slots for cash deposits — perfect for retail, restaurants, and businesses handling daily cash.",
  },
  {
    icon: <Shield className="w-5 h-5 text-csl-gold" />,
    title: "Pharmacy Safes",
    desc: "DEA-compliant narcotics safes and secure pharmaceutical storage for medical practices and pharmacies.",
  },
  {
    icon: <Lock className="w-5 h-5 text-csl-gold" />,
    title: "Floor & Wall Safes",
    desc: "Concealed installation for maximum security. Professional installation available by our team.",
  },
  {
    icon: <Shield className="w-5 h-5 text-csl-gold" />,
    title: "Commercial Safes",
    desc: "Heavy-duty safes for office and business use. Wide range of sizes and security ratings available.",
  },
];

const safeServices = [
  "Safe combination changes",
  "Safe repairs & maintenance",
  "Safe openings (lost combinations)",
  "Lock upgrades (mechanical to digital)",
  "Safe delivery & installation",
  "Safe relocation",
  "Safe deposit box service",
  "Used safe sales",
];

const brands = ["AMSEC", "Gardall", "Mosler", "Diebold", "Fort Knox", "Liberty", "Sentry", "FireKing"];

export default function SafesPage() {
  return (
    <ServicePageLayout
      title="Safe Sales & Service"
      subtitle="Authorized dealer for AMSEC and Gardall safes — two of the most trusted names in security. We carry fire safes, gun safes, jewelry safes, depository safes, and more for residential and commercial customers."
      heroTagline="Authorized AMSEC & Gardall Dealer"
    >
      {/* Safe types grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-csl-navy mb-4">
              Our Safe Inventory
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We carry a wide selection of safes in-store and can special order virtually any model. Stop in or call for current availability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {safeTypes.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-csl-gold/30 transition-all">
                <div className="w-10 h-10 bg-csl-gold/10 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-csl-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Service + brands */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Safe service */}
            <div className="bg-csl-navy rounded-2xl p-8">
              <h2 className="font-heading font-bold text-white text-xl mb-5">Safe Service & Repair</h2>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Already have a safe? We service and repair all major brands. From combination changes to complete lock replacements, our technicians can handle it.
              </p>
              <ul className="space-y-2.5 mb-7">
                {safeServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-csl-gold flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href={BUSINESS.phone1Href} className="btn-gold w-full justify-center py-3 text-sm">
                <Phone className="w-4 h-4" />
                Schedule Service
              </a>
            </div>

            {/* Brands + buying guide */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-7">
                <h3 className="font-heading font-bold text-csl-navy text-lg mb-4">Brands We Carry & Service</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((b, i) => (
                    <span key={i} className="bg-csl-gold/10 text-csl-navy text-sm font-semibold px-3 py-1.5 rounded-full border border-csl-gold/20">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-7">
                <h3 className="font-heading font-bold text-csl-navy text-lg mb-3">Not Sure Which Safe You Need?</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Our experts will help you choose the right safe based on what you&apos;re protecting, your budget, and your installation requirements. We offer free in-store consultations.
                </p>
                <a href={BUSINESS.phone1Href} className="btn-gold py-2.5 px-5 text-sm">
                  <Phone className="w-4 h-4" />
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust copy + showroom image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-csl-navy mb-5">
                Nearly 50 Years of Safe Expertise
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cataract Safe &amp; Lock has been selling and servicing safes in Western New York since 1976. As an authorized dealer for AMSEC and Gardall — two of the industry&apos;s most respected manufacturers — we carry safes that meet the highest standards for fire protection, burglary resistance, and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you&apos;re protecting family heirlooms, firearms, important documents, or business cash, we&apos;ll help you find the right safe at the right price. Visit our showroom at 1270 Depot Ave in Niagara Falls, or call us for a free consultation.
              </p>
              <a href={BUSINESS.phone1Href} className="btn-gold text-sm py-3 px-6 inline-flex">
                <Phone className="w-4 h-4" />
                Call for a Free Consultation
              </a>
            </div>
            {/* Showroom image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/safes-1.webp"
                alt="Safe showroom display at Cataract Safe & Lock — AMSEC and Gardall authorized dealer"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safe dial image banner */}
      <section className="relative overflow-hidden bg-csl-navy py-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.webp"
            alt="Vintage safe combination dial"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-csl-navy via-csl-navy/80 to-csl-navy/60" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-csl-gold font-semibold text-sm uppercase tracking-widest mb-3">Authorized Dealer</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            AMSEC &amp; Gardall — Industry-Leading Safe Brands
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            We carry the full line of AMSEC and Gardall safes, from compact home safes to commercial-grade fire &amp; burglary rated units. Stop by our showroom at 1270 Depot Ave or call to discuss your needs.
          </p>
          <a href={BUSINESS.phone1Href} className="btn-gold py-3.5 px-8">
            <Phone className="w-4 h-4" />
            {BUSINESS.phone1}
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
