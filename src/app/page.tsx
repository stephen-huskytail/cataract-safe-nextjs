// Cataract Safe & Lock — Homepage
// SEO: Locksmith Niagara Falls NY | Safe Dealer | Since 1976
// Design: Trust-first, dark navy + gold, one-pager

import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Key,
  Shield,
  Car,
  Clock,
  CheckCircle,
  Star,
  Lock,
  ChevronRight,
  Award,
} from "lucide-react";
import { BUSINESS, SERVICES, SERVICE_AREAS, TRUST_ITEMS } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Locksmith & Safe Dealer Niagara Falls NY | Since 1976",
  description:
    "Cataract Safe & Lock — expert locksmith services, safe sales & service, and automotive locksmith in Niagara Falls, NY. AAA affiliated. Free estimates. 24/7 emergency service. Call (716) 285-9712.",
  alternates: { canonical: "https://www.cataractsafeandlock.com" },
};

const serviceIcons: Record<string, React.ReactNode> = {
  Key: <Key className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Car: <Car className="w-8 h-8" />,
};

const trustedBadges = [
  { icon: <Award className="w-5 h-5 text-csl-gold" />, text: "AAA Affiliated" },
  { icon: <CheckCircle className="w-5 h-5 text-csl-gold" />, text: "Free Estimates" },
  { icon: <Star className="w-5 h-5 text-csl-gold" />, text: "AMSEC & Gardall Authorized Dealer" },
  { icon: <Clock className="w-5 h-5 text-csl-gold" />, text: "24/7 Emergency Service" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative bg-csl-navy overflow-hidden"
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.webp')" }}
        />
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-csl-navy/95 via-csl-navy/80 to-csl-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-csl-navy/60 via-transparent to-transparent" />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-csl-gold" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-csl-gold/20 border border-csl-gold/40 text-csl-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Lock className="w-3.5 h-3.5" />
              Serving Niagara Falls Since 1976
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Your Trusted
              <span className="text-csl-gold"> Locksmith</span> &amp;
              <br />
              Safe Dealer in
              <br />
              Niagara Falls
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed">
              Locally owned &amp; operated since 1976. Expert locksmith services,
              safe sales &amp; service, and automotive locksmith. AAA affiliated with
              free estimates on all services.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href={BUSINESS.phone1Href} className="btn-gold text-base py-3.5 px-7 shadow-lg">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone1}
              </a>
              <a href={BUSINESS.phone2Href} className="btn-outline-gold text-base py-3.5 px-7">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone2}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {trustedBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/70 text-sm">
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-csl-gold">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="text-center py-5 px-4">
                <div className="font-heading font-extrabold text-3xl text-white">{item.value}</div>
                <div className="text-white/80 text-sm mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-csl-gold font-semibold text-sm mb-3">
              <span className="w-8 h-px bg-csl-gold inline-block" />
              WHAT WE DO
              <span className="w-8 h-px bg-csl-gold inline-block" />
            </div>
            <h2 className="section-heading">Expert Services You Can Count On</h2>
            <p className="section-subheading mx-auto">
              Whether you&apos;re locked out, need a new safe, or require automotive locksmith help —
              we&apos;ve been Niagara Falls&apos; most trusted choice since 1976.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-csl-gold/30 transition-all group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-csl-gold/10 rounded-xl flex items-center justify-center text-csl-gold mb-5 group-hover:bg-csl-gold group-hover:text-white transition-colors">
                  {serviceIcons[service.icon]}
                </div>

                <h3 className="font-heading font-bold text-xl text-csl-navy mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-csl-gold flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US / ABOUT ───────────────────────────────────── */}
      <section id="about" className="py-20 bg-csl-navy">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 text-csl-gold font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-csl-gold inline-block" />
                ABOUT US
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Nearly 50 Years of
                <span className="text-csl-gold"> Trust &amp; Expertise</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Cataract Safe &amp; Lock has been the go-to locksmith and safe dealer in
                Niagara Falls, NY since 1976. As a locally owned and operated business,
                we&apos;ve built our reputation one customer at a time — with honest service,
                fair prices, and expert craftsmanship.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                We&apos;re proud to be AAA affiliated and an authorized dealer of AMSEC &amp;
                Gardall safes — two of the most trusted names in the industry. Whether
                you need a simple re-key or a commercial-grade safe installation,
                we have the expertise to get it done right.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Locally owned & operated",
                  "AAA affiliated",
                  "AMSEC & Gardall authorized dealer",
                  "Free estimates on all services",
                  "24/7 emergency lockout service",
                  "Serving Niagara & Erie Counties",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-csl-gold/20 border border-csl-gold/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-csl-gold" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Emergency CTA card */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-csl-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-csl-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-white/60 text-sm">
                    Locked out? Need urgent help? We&apos;re available around the clock.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <a
                    href={BUSINESS.phone1Href}
                    className="flex items-center justify-between bg-csl-gold hover:bg-csl-gold-light text-white rounded-xl px-6 py-4 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-white/70 mb-0.5">Primary Number</div>
                      <div className="font-heading font-bold text-xl">{BUSINESS.phone1}</div>
                    </div>
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={BUSINESS.phone2Href}
                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 text-white rounded-xl px-6 py-4 transition-colors group border border-white/10"
                  >
                    <div>
                      <div className="text-xs text-white/70 mb-0.5">Alternate Number</div>
                      <div className="font-heading font-bold text-xl">{BUSINESS.phone2}</div>
                    </div>
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                <div className="flex items-start gap-2.5 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-csl-gold flex-shrink-0" />
                  <div>
                    <div className="text-white/80 font-medium">{BUSINESS.address.full}</div>
                    <a
                      href="https://maps.google.com/?q=1219+Main+Street+Niagara+Falls+NY+14301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-csl-gold hover:underline text-xs mt-0.5 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA ─────────────────────────────────────── */}
      <section id="service-area" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-csl-gold font-semibold text-sm mb-3">
              <span className="w-8 h-px bg-csl-gold inline-block" />
              WHERE WE SERVE
              <span className="w-8 h-px bg-csl-gold inline-block" />
            </div>
            <h2 className="section-heading">Serving Western New York</h2>
            <p className="section-subheading mx-auto">
              Proudly serving communities across Niagara and Erie Counties.
              If you don&apos;t see your town listed, give us a call — we likely cover your area.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-csl-gold hover:text-csl-navy transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-csl-gold" />
                {area}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={BUSINESS.phone1Href} className="btn-gold text-sm">
              <Phone className="w-4 h-4" />
              Check Your Area — Call {BUSINESS.phone1}
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <Testimonials />

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — info */}
            <div>
              <div className="inline-flex items-center gap-2 text-csl-gold font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-csl-gold inline-block" />
                GET IN TOUCH
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-csl-navy mb-4">
                Contact Us Today
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have a question or need service? Fill out the form and we&apos;ll get back to you
                promptly. For emergencies, please call us directly.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-csl-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-csl-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-csl-navy text-sm mb-1">Phone</div>
                    <a href={BUSINESS.phone1Href} className="text-csl-gold font-bold text-lg hover:underline block">
                      {BUSINESS.phone1}
                    </a>
                    <a href={BUSINESS.phone2Href} className="text-gray-600 text-sm hover:text-csl-gold transition-colors">
                      {BUSINESS.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-csl-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-csl-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-csl-navy text-sm mb-1">Location</div>
                    <div className="text-gray-700">{BUSINESS.address.street}</div>
                    <div className="text-gray-700">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</div>
                    <a
                      href="https://maps.google.com/?q=1219+Main+Street+Niagara+Falls+NY+14301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-csl-gold text-sm hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-csl-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-csl-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-csl-navy text-sm mb-1">Hours</div>
                    <div className="text-gray-700">Emergency service available 24/7</div>
                    <div className="text-csl-gold text-sm font-medium mt-0.5">We&apos;re here when you need us</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="font-heading font-bold text-xl text-csl-navy mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA STRIP ─────────────────────────────────── */}
      <section className="bg-csl-gold py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-2">
            Locked Out or Need Help Fast?
          </h2>
          <p className="text-white/80 mb-6">
            We&apos;re available 24/7 for emergency locksmith services throughout Niagara and Erie Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BUSINESS.phone1Href} className="btn-white text-base py-3.5 px-8">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone1}
            </a>
            <a href={BUSINESS.phone2Href} className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-heading font-bold rounded-md hover:bg-white hover:text-csl-gold transition-colors text-base">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone2}
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-csl-navy border-t border-white/10 px-4 py-3 flex gap-2">
        <a href={BUSINESS.phone1Href} className="btn-gold flex-1 justify-center py-3 text-sm">
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a href="#contact" className="btn-outline-gold flex-1 justify-center py-3 text-sm">
          Contact Us
        </a>
      </div>
    </>
  );
}
