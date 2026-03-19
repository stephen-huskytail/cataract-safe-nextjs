import { Phone, MapPin, Lock, Shield, ExternalLink } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-csl-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-csl-gold rounded flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-white leading-tight">
                  Cataract Safe & Lock
                </div>
                <div className="text-csl-gold text-xs leading-tight">Locally Owned Since 1976</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Serving Niagara Falls and surrounding communities for nearly 50 years. Your trusted local locksmith and safe dealer.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={BUSINESS.phone1Href}
                className="flex items-center gap-2 text-csl-gold hover:text-csl-gold-light transition-colors font-semibold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone1}
              </a>
              <a
                href={BUSINESS.phone2Href}
                className="flex items-center gap-2 text-white/70 hover:text-csl-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone2}
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                Locksmith Services
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                Safe Sales & Service
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                Automotive Locksmith
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                Emergency Lockout Service
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                Lock Changes & Re-keys
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-csl-gold flex-shrink-0" />
                AMSEC & Gardall Dealer
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/50">
              Serving Niagara and Erie Counties, NY
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Cataract Safe & Lock · All rights reserved
          </div>
          <div className="flex items-center gap-1.5">
            <span>Web management by</span>
            <a
              href={BUSINESS.managedByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-csl-gold transition-colors inline-flex items-center gap-1"
            >
              HuskyTail Digital Marketing
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
