import type { Metadata } from "next";
import { Phone, Tag, CheckCircle, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coupons & Promotions | Cataract Safe & Lock Niagara Falls NY",
  description:
    "Save on locksmith services, safe purchases, and automotive locksmith work. Current promotions from Cataract Safe & Lock in Niagara Falls, NY. Call (716) 285-9712.",
};

const coupons = [
  {
    badge: "Safes",
    title: "15% Off",
    highlight: "All Safes",
    terms: "In-store purchase only. Cannot be combined with other offers. While supplies last.",
    color: "border-csl-gold",
    badgeColor: "bg-csl-gold text-white",
  },
  {
    badge: "Service",
    title: "$10.00 Off",
    highlight: "Any Service Call",
    terms: "Mention this offer when calling. One per customer. Cannot be combined with other offers.",
    color: "border-blue-400",
    badgeColor: "bg-csl-navy text-white",
  },
];

export default function CouponsPage() {
  return (
    <>
      <Header />

      {/* Page hero */}
      <section className="bg-csl-navy py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-csl-gold" />
        <div className="relative max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-white/50 text-xs mb-6">
            <Link href="/" className="hover:text-csl-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Promotions</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-csl-gold/20 border border-csl-gold/40 text-csl-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Tag className="w-3.5 h-3.5" />
            Current Offers
          </div>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Promotions & Coupons
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Save on locksmith services, safe purchases, and automotive locksmith work. Mention the offer when you call.
          </p>
        </div>
      </section>

      {/* Coupon cards */}
      <main className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {coupons.map((c, i) => (
              <div
                key={i}
                className={`relative border-2 ${c.color} rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow`}
              >
                {/* Dashed cut edge effect */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full -translate-x-0.5 border-r-2 border-gray-100" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full translate-x-0.5 border-l-2 border-gray-100" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                    <h2 className="font-heading font-extrabold text-csl-navy text-3xl leading-tight">
                      {c.title}
                    </h2>
                    <p className="text-gray-600 font-medium mt-1">{c.highlight}</p>
                  </div>
                  <Tag className="w-8 h-8 text-gray-200 flex-shrink-0 mt-1" />
                </div>

                <div className="border-t border-dashed border-gray-200 pt-3">
                  <p className="text-xs text-gray-400 leading-relaxed">{c.terms}</p>
                </div>

                <a
                  href={BUSINESS.phone1Href}
                  className="btn-gold py-2.5 px-5 text-sm self-start mt-auto"
                >
                  <Phone className="w-4 h-4" />
                  Call to Redeem
                </a>
              </div>
            ))}
          </div>

          {/* How to redeem */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-heading font-bold text-csl-navy text-2xl mb-6">How to Redeem</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6 text-csl-gold" />, step: "1", title: "Call Us", desc: "Call (716) 285-9712 and mention the promotion when scheduling your service." },
                { icon: <CheckCircle className="w-6 h-6 text-csl-gold" />, step: "2", title: "Confirm Eligibility", desc: "Our team will confirm the offer applies to your specific service or purchase." },
                { icon: <Clock className="w-6 h-6 text-csl-gold" />, step: "3", title: "Save", desc: "Discount is applied at the time of service or purchase. One offer per visit." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-csl-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-csl-gold font-bold uppercase tracking-wider mb-1">Step {item.step}</div>
                    <h3 className="font-heading font-bold text-csl-navy mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-csl-navy py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            Questions about our promotions?
          </h2>
          <p className="text-white/60 mb-8">Give us a call — we&apos;re happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BUSINESS.phone1Href} className="btn-gold py-3.5 px-8 text-base">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone1}
            </a>
            <a href={BUSINESS.phone2Href} className="btn-outline-gold py-3.5 px-8 text-base">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone2}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
