"use client";

import { useState } from "react";
import { Phone, Menu, X, Lock, ChevronDown, Key, Shield, Car, Tag } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const serviceLinks = [
    { label: "Locksmith Services", href: "/locksmith", icon: <Key className="w-4 h-4" /> },
    { label: "Safe Sales & Service", href: "/safes", icon: <Shield className="w-4 h-4" /> },
    { label: "Automotive Locksmith", href: "/automotive", icon: <Car className="w-4 h-4" /> },
  ];

  const navLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Service Area", href: "/#service-area" },
    { label: "Contact", href: "/#contact" },
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
            {/* Services dropdown — CSS-only group hover, no JS state */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/80 group-hover:text-csl-gold font-medium text-sm transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              {/* Invisible bridge fills gap between button and panel so mouse can travel without closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
              <div className="absolute top-[calc(100%+8px)] left-0 w-52 bg-[#0f2040] border border-white/10 rounded-xl shadow-2xl py-1.5 z-50
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            translate-y-1 group-hover:translate-y-0
                            transition-all duration-150 ease-out">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm text-white/80 hover:text-csl-gold hover:bg-white/5 transition-colors"
                  >
                    <span className="text-csl-gold/70">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-csl-gold font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Coupons */}
            <Link href="/coupons" className="flex items-center gap-1.5 text-csl-gold hover:text-csl-gold-light font-semibold text-sm transition-colors">
              <Tag className="w-3.5 h-3.5" />
              Coupons
            </Link>
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
        <div className="md:hidden bg-csl-navy-light border-t border-white/10 px-4 py-4 space-y-1">
          {/* Service links */}
          <div className="text-white/40 text-xs font-semibold uppercase tracking-wider px-1 pt-1 pb-1">Services</div>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 text-white/80 hover:text-csl-gold font-medium py-2 px-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-csl-gold/60">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-2 mt-1" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/80 hover:text-csl-gold font-medium py-2 px-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/coupons"
            className="flex items-center gap-1.5 text-csl-gold font-semibold py-2 px-1"
            onClick={() => setMenuOpen(false)}
          >
            <Tag className="w-4 h-4" />
            Coupons & Promotions
          </Link>
          <div className="pt-3 space-y-2">
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
