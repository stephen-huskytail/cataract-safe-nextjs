// Shared layout wrapper for all service detail pages
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroTagline: string;
  heroImage?: string;       // path to right-side hero image
  heroImageAlt?: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroTagline,
  heroImage,
  heroImageAlt,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Header />

      {/* Page hero — compact dark band, two-column when heroImage provided */}
      <section className="bg-csl-navy py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-csl-navy via-csl-navy/95 to-csl-navy/70" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-csl-gold" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className={`grid gap-10 items-center ${heroImage ? "md:grid-cols-2" : ""}`}>

            {/* Left: text */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-white/50 text-xs mb-6">
                <Link href="/" className="hover:text-csl-gold transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/80">{title}</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-csl-gold/20 border border-csl-gold/40 text-csl-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {heroTagline}
              </div>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
                {title}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">{subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BUSINESS.phone1Href} className="btn-gold text-base py-3.5 px-7 shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone1}
                </a>
                <Link href="/#contact" className="btn-outline-gold text-base py-3.5 px-7">
                  Get a Free Estimate
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            {heroImage && (
              <div className="hidden md:flex justify-center items-center">
                <div className="relative w-full">
                  {/* Gold glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-csl-gold/20 blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-csl-gold/40 shadow-2xl">
                    <Image
                      src={heroImage}
                      alt={heroImageAlt ?? title}
                      width={600}
                      height={420}
                      className="w-full object-cover max-h-72"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Page content */}
      <main>{children}</main>

      {/* Bottom CTA band */}
      <section className="bg-csl-navy py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-white/60 mb-8">
            Locally owned &amp; operated since 1976. Free estimates on all services.
          </p>
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
