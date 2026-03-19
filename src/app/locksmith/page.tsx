import type { Metadata } from "next";
import { CheckCircle, Clock, Home, Building2, Key, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Locksmith Services Niagara Falls NY | Cataract Safe & Lock",
  description:
    "Expert locksmith services in Niagara Falls, NY. Residential & commercial lock changes, re-keys, repairs, broken key extraction, and 24/7 emergency lockouts. Call (716) 285-9712.",
};

const residentialServices = [
  "Lock changes & new installations",
  "Re-keying — same lock, new key",
  "Lock repairs & maintenance",
  "Broken key extraction",
  "Deadbolt upgrades",
  "High-security lock upgrades",
  "Mailbox lock service",
  "Emergency residential lockouts",
];

const commercialServices = [
  "Commercial lock installation",
  "Master key systems",
  "High-security commercial locks",
  "Keypad & electronic locks",
  "Panic bar / exit device installation",
  "Storefront & office lockouts",
  "Re-key on ownership/staff change",
  "Restricted key systems",
];

const emergencyServices = [
  "24/7 emergency lockout response",
  "Fast local dispatch — Niagara Falls area",
  "Residential lockouts",
  "Commercial lockouts",
  "No damage, no force entry",
];

export default function LocksmithPage() {
  return (
    <ServicePageLayout
      title="Locksmith Services"
      subtitle="Expert locksmith services for homeowners and businesses throughout Niagara Falls and Western NY. Trusted since 1976 — licensed, bonded, and fully insured."
      heroTagline="Licensed & Bonded · Since 1976"
    >
      {/* Why choose us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-14">
            {[
              { icon: <Clock className="w-8 h-8 text-csl-gold mx-auto mb-3" />, title: "24/7 Emergency Service", desc: "Locked out at midnight? We're available around the clock for urgent locksmith needs." },
              { icon: <CheckCircle className="w-8 h-8 text-csl-gold mx-auto mb-3" />, title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your peace of mind on every job." },
              { icon: <Key className="w-8 h-8 text-csl-gold mx-auto mb-3" />, title: "Free Estimates", desc: "Get an honest, upfront price before any work begins. No hidden fees." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                {item.icon}
                <h3 className="font-heading font-bold text-csl-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-csl-gold/15 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-csl-gold" />
                </div>
                <h2 className="font-heading font-bold text-csl-navy text-xl">Residential</h2>
              </div>
              <ul className="space-y-2.5">
                {residentialServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-csl-gold flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-csl-gold/15 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-csl-gold" />
                </div>
                <h2 className="font-heading font-bold text-csl-navy text-xl">Commercial</h2>
              </div>
              <ul className="space-y-2.5">
                {commercialServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-csl-gold flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency */}
            <div className="bg-csl-navy rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-csl-gold/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-csl-gold" />
                </div>
                <h2 className="font-heading font-bold text-white text-xl">Emergency</h2>
              </div>
              <ul className="space-y-2.5 mb-6">
                {emergencyServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-csl-gold flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href={BUSINESS.phone1Href} className="btn-gold w-full justify-center text-sm py-3">
                <Phone className="w-4 h-4" />
                Call Now — {BUSINESS.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-csl-navy mb-5">
            Niagara Falls&apos; Trusted Locksmith Since 1976
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cataract Safe &amp; Lock has been serving homeowners and businesses throughout Niagara Falls and the surrounding Western New York area for nearly 50 years. Our experienced technicians handle everything from simple lock changes to complex master key systems — always with the professionalism and care your home or business deserves.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We service all major lock brands including Schlage, Kwikset, Medeco, Mul-T-Lock, and more. Whether you need a quick re-key after moving into a new home or a complete commercial access control upgrade, our team delivers fast, reliable service at a fair price.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
