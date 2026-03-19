"use client";

import { useState } from "react";
import { Phone, Menu, X, Lock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Service Area", href: "#service-area" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-csl-navy sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs text-white/70">
          <span>AAA Affiliated · Free Estimates · Since 1976</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href={BUSINESS.phone1Href} className="hover:text-csl-gold transition-colors">
              {BUSINESS.phone1}
            </a>
            <span className="text-white/30">|</span>
            <a href={BUSINESS.phone2Href} className="hover:text-csl-gold transition-colors">
              {BUSINESS.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-csl-gold rounded flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-base leading-tight">
                Cataract Safe & Lock
              </div>
              <div className="text-csl-gold text-[10px] leading-tight font-medium">
                Niagara Falls, NY · Est. 1976
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-csl-gold font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href={BUSINESS.phone1Href}
              className="btn-gold text-sm py-2.5 px-5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-csl-navy-light border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/80 hover:text-csl-gold font-medium py-1.5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <a href={BUSINESS.phone1Href} className="btn-gold w-full justify-center">
              <Phone className="w-4 h-4" />
              {BUSINESS.phone1}
            </a>
            <a href={BUSINESS.phone2Href} className="btn-outline-gold w-full justify-center">
              <Phone className="w-4 h-4" />
              {BUSINESS.phone2}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
