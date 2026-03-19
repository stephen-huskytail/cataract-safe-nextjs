import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Car, Clock, Phone, Wrench, Key } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Automotive Locksmith Niagara Falls NY | Car Lockout | Cataract Safe & Lock",
  description:
    "Automotive locksmith services in Niagara Falls, NY. Car lockouts, key cutting, transponder key programming, ignition repair. Fast response, all makes & models. Call (716) 285-9712.",
};

const autoServices = [
  {
    icon: <Car className="w-6 h-6 text-csl-gold" />,
    title: "Vehicle Lockouts",
    desc: "Car, van, truck, and RV lockouts. Emergency vehicle and trunk opening — fast, damage-free.",
  },
  {
    icon: <Key className="w-6 h-6 text-csl-gold" />,
    title: "Car Key Replacement",
    desc: "High-security key duplication, GM VAT keys, factory remote replacement, and push-button start proximity remotes.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-csl-gold" />,
    title: "Transponder Key Programming",
    desc: "Chip key and transponder programming for most makes and models. Save hundreds vs. dealership prices.",
  },
  {
    icon: <Key className="w-6 h-6 text-csl-gold" />,
    title: "Key Fobs & Remotes",
    desc: "Large selection of keyless entry remotes, key fobs, and clickers — with programming included on applicable vehicles.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-csl-gold" />,
    title: "Broken Key Extraction",
    desc: "Key snapped in the lock or ignition? Our technicians extract it cleanly without damaging your vehicle.",
  },
  {
    icon: <Clock className="w-6 h-6 text-csl-gold" />,
    title: "24/7 Emergency Response",
    desc: "Emergencies don't follow a schedule. We dispatch locally across Niagara and Erie counties, around the clock.",
  },
];

export default function AutomotivePage() {
  return (
    <ServicePageLayout
      title="Automotive Locksmith"
      subtitle="Locked out of your car, truck, or SUV? Lost your keys? Our automotive locksmith technicians provide fast, professional service for all makes and models — with no damage to your vehicle."
      heroTagline="All Makes & Models · 24/7 Service"
      heroImage="/automotive-1.webp"
      heroImageAlt="Car key fobs and automotive locksmith tools"
    >
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-csl-navy mb-4">
              Automotive Locksmith Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We handle virtually every automotive lock and key situation for domestic and foreign vehicles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {autoServices.map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-csl-gold/30 transition-all">
                <div className="w-11 h-11 bg-csl-gold/10 rounded-xl flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-csl-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Emergency CTA panel */}
          <div className="bg-csl-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-csl-gold text-sm font-semibold uppercase tracking-wider mb-2">Available 24 Hours a Day</div>
              <h3 className="font-heading font-bold text-white text-2xl mb-2">Locked Out Right Now?</h3>
              <p className="text-white/60 max-w-lg">
                Don&apos;t wait — call us immediately and a technician will be dispatched to your location. We serve Niagara Falls and all of Niagara and Erie counties.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href={BUSINESS.phone1Href} className="btn-gold py-3.5 px-8 text-base whitespace-nowrap">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone1}
              </a>
              <a href={BUSINESS.phone2Href} className="btn-outline-gold py-3.5 px-8 text-base whitespace-nowrap">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key fob image + why choose */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Image banner */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/automotive-1.webp"
              alt="Car key fobs, transponder keys, and automotive locksmith tools"
              width={1200}
              height={500}
              className="w-full object-cover max-h-72"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-csl-navy mb-5">
                Professional Service, No Damage Guaranteed
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our automotive technicians are trained and experienced with modern vehicle locking systems — including keyless entry, transponder keys, and push-button start systems. We use professional tools that open your vehicle safely, without scratching paint or bending door frames.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlike roadside assistance services that may take hours, Cataract Safe &amp; Lock dispatches locally from Niagara Falls for the fastest possible response time. We serve all of Niagara and Erie counties.
              </p>
              <div className="space-y-2.5">
                {[
                  "Professional, damage-free techniques",
                  "Locally dispatched — fast response",
                  "All makes, models, and years",
                  "Honest, upfront pricing",
                  "Licensed & insured technicians",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-csl-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-csl-navy rounded-2xl p-8 text-center">
              <Clock className="w-14 h-14 text-csl-gold mx-auto mb-4" />
              <div className="text-csl-gold text-4xl font-heading font-extrabold mb-2">24/7</div>
              <div className="text-white font-semibold text-lg mb-3">Emergency Automotive Service</div>
              <p className="text-white/60 text-sm mb-6">
                Locked out evenings, weekends, or holidays? We&apos;re always available for emergency automotive locksmith calls throughout Western NY.
              </p>
              <a href={BUSINESS.phone1Href} className="btn-gold w-full justify-center py-3.5 text-base">
                <Phone className="w-5 h-5" />
                Call Now — {BUSINESS.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
